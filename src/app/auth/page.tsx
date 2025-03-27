"use client"
import usePostQuery from "@/src/hooks/api/usePostQuery"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Login = () => {
  const { mutate } = usePostQuery({})
  const [username, setuserName] = useState("admin")
  const [password, setpassword] = useState("UzDev2024!")
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token && pathname !== "/") {
      router.push("/")
    }
  }, [pathname, router]);

  const login = () => {
    mutate({
      url: '/auth/token/',
      attributes: {
        username,
        password
      },
      config: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    }, {
      onSuccess: (e) => {
        console.log(e.data);
        window.location.href = "/"
        localStorage.setItem("access_token", e.data?.access)
        localStorage.setItem("refresh_token", e.data?.refresh)
      }
    })
  }

  return (
    <div className='flex justify-center items-center flex-col h-screen'>
      <div className='w-[400px] h-auto p-4 flex justify-center items-center flex-col space-y-3'>
        <input type="text" className='w-full h-12 rounded-md px-3 outline-none border-2 border-blue-500' placeholder="username" onChange={(e) => setuserName(e.target.value)} />
        <input type="text" className='w-full h-12 rounded-md px-3 outline-none border-2 border-blue-500' placeholder="password" onChange={(e) => setpassword(e.target.value)} />
        <button className="p-2 w-1/2 h-12 bg-blue-500 rounded-lg text-white  hover:bg-blue-300 hover:text-gray-800 cursor-pointer" onClick={login}>send</button>
      </div>
    </div>
  )
}

export default Login