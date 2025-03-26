"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Briefcase,
  Grid,
  Home,
  Menu,
  PanelLeft,
  X
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Categories", href: "/admin/categories", icon: Grid },
  { name: "Blog", href: "/blogs", icon: Grid },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 md:hidden" onClick={toggleSidebar}>
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* Sidebar for mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleSidebar}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-background border-r transition-all duration-300 md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed ? "w-[70px]" : "w-64",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b flex items-center justify-between">
            {!isCollapsed && (
              <Link
                href="/"
                className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600"
              >
                DevConnect
              </Link>
            )}
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleCollapse}>
              <PanelLeft className={cn("h-5 w-5", isCollapsed && "rotate-180")} />
            </Button>
          </div>

          <nav className="flex-1 py-4 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-2 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-gradient-to-r from-primary to-indigo-600 text-primary-foreground"
                    : "text-foreground hover:bg-muted",
                  isCollapsed && "justify-center",
                )}
              >
                <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            ))}


          </nav>

        </div>
      </aside>
    </>
  )
}

