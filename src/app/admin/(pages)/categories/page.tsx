"use client";
import { api } from "@/src/config/auth/api";
import { Box, Button, Dialog, Flex, Table, TextField } from "@radix-ui/themes";
import "@radix-ui/themes/components.css";
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/tokens.css";
import "@radix-ui/themes/utilities.css";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories/");
      setCategories(response.data?.results);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddCategory = async () => {
    if (newCategory.trim() === "") return;
    try {
      await api.post("/categories/", { name: newCategory });
      fetchCategories();
      setNewCategory("");
      setOpenAdd(false);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleEditCategory = async () => {
    if (!editingCategory) return;
    try {
      await api.patch(`/categories/${editingCategory.id}`, { name: editingCategory.name });
      fetchCategories();
      setOpenEdit(false);
    } catch (error) {
      console.error("Error editing category:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/categories/${id}/`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <Flex justify="between" align="center" className="mb-6">
        <h2 className="text-3xl font-bold text-gray-700">Categories</h2>
        <Button variant="solid" color="green" onClick={() => setOpenAdd(true)}>
          + Add Category
        </Button>
      </Flex>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {categories.map((category) => (
            <Table.Row key={category.id} className="hover:bg-gray-100">
              <Table.Cell>{category.id}</Table.Cell>
              <Table.RowHeaderCell>{category.name}</Table.RowHeaderCell>
              <Table.Cell>
                <Flex gap="3">
                  <Button
                    variant="soft"
                    color="blue"
                    onClick={() => {
                      setEditingCategory(category);
                      setOpenEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button variant="soft" color="red" onClick={() => handleDelete(category.id)}>
                    Delete
                  </Button>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Dialog.Root open={openAdd} onOpenChange={setOpenAdd}>
        <Dialog.Content>
          <Dialog.Title>Add Category</Dialog.Title>
          <Box className="p-4">
            <TextField.Root
              placeholder="Category name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <Flex justify="end" gap="3" className="mt-4">
              <Button variant="soft" onClick={() => setOpenAdd(false)}>
                Cancel
              </Button>
              <Button color="green" onClick={handleAddCategory}>
                Add
              </Button>
            </Flex>
          </Box>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root open={openEdit} onOpenChange={setOpenEdit}>
        <Dialog.Content>
          <Dialog.Title>Edit Category</Dialog.Title>
          <Box className="p-4">
            <TextField.Root
              placeholder="Category name"
              value={editingCategory?.name || ""}
              onChange={(e) =>
                setEditingCategory((prev) =>
                  prev ? { ...prev, name: e.target.value } : null
                )
              }
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <Flex justify="end" gap="3" className="mt-4">
              <Button variant="soft" onClick={() => setOpenEdit(false)}>
                Cancel
              </Button>
              <Button color="blue" onClick={handleEditCategory}>
                Save
              </Button>
            </Flex>
          </Box>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default Categories;