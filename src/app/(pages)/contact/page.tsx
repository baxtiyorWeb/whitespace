"use client"
import MainImage from "@/components/MainImage"
import Link from "next/link"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"


interface IProps {
  title: string,
  content: string,
  delay: number
}

const ContactInfoItem = ({ title, content, delay = 0 }: IProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#FBD302] p-8 rounded-sm "
    >
      <div>
        <span className="font-medium">{title}</span> <span className="text-gray-600">{content}</span>
      </div>
    </motion.div>
  )
}

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Message sent! (This is a demo)")
  }

  return (
    <div className="w-[70%] m-auto  mx-auto  py-16">
      <h2 className="text-4xl font-medium text-left mb-12">Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <ContactInfoItem title="Address:" content="198 West 21th Street, Suite 721 New York NY 10016" delay={0} />
        <ContactInfoItem title="Phone:" content="+ 1235 2355 98" delay={0.1} />
        <ContactInfoItem title="Email:" content="info@yoursite.com" delay={0.2} />
        <ContactInfoItem title="Website" content="yoursite.com" delay={0.3} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-all duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-all duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#fce675] text-gray-800 px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-200 h-[456px] rounded-sm">{/* Map would go here */}</div>
      </div>
    </div>
  )
}


const Work = () => {
  return (
    <div>
      <MainImage>
        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <h1 className="text-white text-[60px] font-extrabold mb-6">
            Contact
          </h1>

          <div className="flex items-center gap-2 text-white/90 text-lg">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </MainImage>
      <ContactSection />
    </div>

  )
}

export default Work