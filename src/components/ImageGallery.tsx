"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const ImageGallery = () => {
  const controls = useAnimation()
  const [isVisible, setIsVisible] = useState(false)
  const galleryRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (galleryRef.current) {
      observer.observe(galleryRef.current)
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isVisible, controls])

  const images = [
    "https://preview.colorlib.com/theme/whitespace/images/project-4.jpg.webp",
    "https://preview.colorlib.com/theme/whitespace/images/project-4.jpg.webp",
    "https://preview.colorlib.com/theme/whitespace/images/project-4.jpg.webp",
    "https://preview.colorlib.com/theme/whitespace/images/project-4.jpg.webp",
  ]

  return (
    <motion.div
      ref={galleryRef}
      id="gallery"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-6 mx-auto mt-20 "
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={`relative h-[400px] overflow-hidden rounded-lg shadow-lg group ${index === 0 || index === 3 ? "lg:col-span-2" : ""
            }`}
        >
          {/* Asl rasm */}
          <Image
            width={600}
            height={400}
            src={src || "/placeholder.svg"}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Hover qilinganda chiqadigan overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white px-4"
          >
            <h2 className="text-2xl font-bold">Branding & Illustration Design</h2>
            <p className="text-yellow-400 uppercase tracking-[2px] text-[12px] font-semibold mt-2">WEB DESIGN</p>
          </motion.div>
        </div>
      ))}
    </motion.div>
  )
}
export default ImageGallery