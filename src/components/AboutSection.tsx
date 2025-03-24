import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MainImage from "./MainImage";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    console.log(isVisible);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <MainImage>
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <h1 className="text-white text-[60px] font-extrabold mb-6">
          About Me
        </h1>

        <div className="flex items-center gap-2 text-white/90 text-lg">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About Me
          </Link>
        </div>
      </div>
    </MainImage>
  )
}


export default AboutSection