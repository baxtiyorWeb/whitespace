"use client"
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import { ReactNode } from 'react'


interface IProps {
  children: ReactNode
}

const layout = ({ children }: IProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

export default layout