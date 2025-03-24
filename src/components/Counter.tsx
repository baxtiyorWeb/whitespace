import { useEffect, useRef, useState } from "react"

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const speed = 100 // Tezlik sozlash

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const increment = value / speed
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.ceil(start))
            }
          }, 20)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="font-medium text-[40px] block text-white">
      {count.toLocaleString()}
    </div>
  )
}

export default Counter