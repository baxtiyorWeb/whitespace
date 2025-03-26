"use client"

import { motion, useAnimation } from "framer-motion"
import { get, isArray } from "lodash"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import useGetAllQuery from "../hooks/api/useGetAllQuery"

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

  const { data } = useGetAllQuery({
    key: "Project",
    url: "/projects/",
  })

  const projects = isArray(get(data, "data.results")) ? get(data, "data.results") : []

  return (
    <motion.div
      ref={galleryRef}
      id="gallery"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full px-3 sm:px-6 mx-auto mt-10 sm:mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {projects.map(
        (
          src: {
            title: string
            description: string
            images: [
              {
                id: number
                image: string
                is_main: boolean
              },
            ]
          },
          index: number,
        ) => (
          <div
            key={index}
            className={`relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg group ${index === 0 || index === 3 ? "sm:col-span-2" : ""
              }`}
          >
            {/* Main image */}
            <Image
              width={600}
              height={400}
              src={src.images.find((item) => item.is_main)?.image || "/placeholder.svg"}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white px-4 text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold">Branding & Illustration Design</h2>
              <p className="text-yellow-400 uppercase tracking-[2px] text-[10px] sm:text-[12px] font-semibold mt-2">
                WEB DESIGN
              </p>
            </motion.div>
          </div>
        ),
      )}
    </motion.div>
  )
}
export default ImageGallery

