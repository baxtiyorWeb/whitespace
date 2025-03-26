"use client"

import ScrollAnimation from "@/components/ui/ScrollAnimation"
import { useEffect, useState } from "react"

// Simple Counter component
const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepTime = duration / steps
    const increment = value / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep += 1
      setCount(Math.min(Math.round(increment * currentStep), value))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{count}+</div>
}

const StatsSection = () => {
  return (
    <ScrollAnimation>
      <div
        className="relative mt-10 sm:mt-[90px] bg-cover bg-center min-h-[300px] py-12 sm:py-0 sm:h-[300px] md:h-[350px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://preview.colorlib.com/theme/whitespace/images/bg_3.jpg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-[390px] text-center lg:text-left mb-8 lg:mb-0">
              <p className="text-sm uppercase tracking-widest">Some</p>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold mb-6">Interesting Facts</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 w-full">
              <div className="text-center">
                <Counter value={2000} />
                <p className="text-[16px] text-gray-300 block">Done Works</p>
              </div>
              <div className="text-center">
                <Counter value={300} />
                <p className="text-[16px] text-gray-300 block">Happy Customers</p>
              </div>
              <div className="text-center">
                <Counter value={100} />
                <p className="text-[16px] text-gray-300 block">Coffee</p>
              </div>
              <div className="text-center">
                <Counter value={1000} />
                <p className="text-[16px] text-gray-300 block">Work Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default StatsSection

