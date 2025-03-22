"use client"

import ItemCard from "@/components/ItemCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import Progress from "@/components/ui/Progress";
import Text from "@/components/ui/Text";
import usePaginateQuery from "@/hooks/api/usePaginateQuery";
import Container from "@/shared/Container";
import { get } from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeartIcon } from "../assets/houzing-images";
export default function Home() {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Har sahifadagi elementlar soni

  const { data, isLoading, isError } = usePaginateQuery({
    key: 'products',
    url: "https://dummyjson.com/products",
    params: {
      size: pageSize,
      skip: currentPage,
    }
  });



  useEffect(() => {
    console.log(get(data, "data"))
  }, [data])

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <Container >
      <h1>ok</h1>
      <ItemCard className="w-[250px]  h-[300px] border " items={[1, 2, 3, 4, 5]} slider sliderConfig={{
        slidesToShow: 3
      }} />


      <Button variant="primary" disabled={false} className="cursor-pointer">download</Button>
      <Text >html</Text>
      <Progress value={100} max={100} showValue />
      <Input type="checkbox" />
      <div className="relative">
        <Image src={HeartIcon} alt="img" />
      </div>



      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-xl font-bold">Products List</h1>

        <ul>
          {data?.products?.map((item: { id: number, title: string }) => (
            <li key={item.id} className="p-2 border-b">{item.title}</li>
          ))}
        </ul>

        {/* Pagination */}
        <Pagination
          totalPages={data?.data?.products.total}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </Container>
  );
}
