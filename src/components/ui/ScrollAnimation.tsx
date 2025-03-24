
"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
interface IProps {
  delay?: number,
  children?: React.ReactNode,
}
const ScrollAnimation = ({ children, delay = 0 }: IProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isVisible, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation