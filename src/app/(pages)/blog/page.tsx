"use client"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import { Search } from "lucide-react"

import MainImage from "@/components/MainImage"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface Article {
  id: number
  title: string
  image: string
  date: string
  author: string
  comments: number
}

const ArticleItem = ({ article, index }: { article: Article; index: number }) => {
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-6 mb-12"
    >
      <div className="w-[113px] h-[113px] flex-shrink-0">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={113}
          height={113}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <Link href="#" className="text-[18px] font-light  leading-[27px] hover:text-yellow-500 transition-colors mb-4 ">
          {article.title}
        </Link>
        <div className="flex items-center flex-wrap text-gray-500 text-[15px] gap-4 w-[80%]">
          <div className="flex items-center">
            <span className="inline-block mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
            </span>
            <span className="text-[12px] font-light leading-[21.6px]">{article.date}</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </span>
            <span className="text-[12px] font-light leading-[21.6px]">
              {article.author}
            </span>
          </div>
          <div className="flex items-center">
            <span className="inline-block mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              </svg>
            </span>
            <span className="text-[12px] font-light leading-[21.6px]">
              {article.comments}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const PopularArticles = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "Even the all-powerful Pointing has no control about the blind texts",
      image: "https://preview.colorlib.com/theme/whitespace/images/image_1.jpg.webp",
      date: "Oct. 04, 2018",
      author: "Dave Lewis",
      comments: 19,
    },
    {
      id: 2,
      title: "Even the all-powerful Pointing has no control about the blind texts",
      image: "https://preview.colorlib.com/theme/whitespace/images/image_2.jpg.webp",
      date: "Oct. 04, 2018",
      author: "Dave Lewis",
      comments: 19,
    },
    {
      id: 3,
      title: "Even the all-powerful Pointing has no control about the blind texts",
      image: "https://preview.colorlib.com/theme/whitespace/images/image_3.jpg.webp",
      date: "Oct. 04, 2018",
      author: "Dave Lewis",
      comments: 19,
    },
  ]

  return (
    <div className="py-12">
      <h2 className="text-[40px] font-bold mb-10 text-gray-800">Popular Articles</h2>
      <div>
        {articles.map((article, index) => (
          <ArticleItem key={article.id} article={article} index={index} />
        ))}
      </div>
    </div>
  )
}


const page = () => {
  return (
    <>
      <MainImage>
        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <h1 className="text-white text-[60px] font-extrabold mb-6">
            Blog
          </h1>

          <div className="flex items-center gap-2 text-white/90 text-lg">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              blog
            </Link>
          </div>
        </div>
      </MainImage>
      <div className="grid grid-cols-12 mt-12 gap-x-[55px] w-[80%] m-auto">

        <div className="col-span-8  ">
          <ScrollAnimation>
            <div className="grid  grid-cols-2 gap-6 w-[80%] m-auto">
              <ScrollAnimation delay={0.1}>
                <div className="w-[350px]   flex justify-center items-start flex-col space-y-6 ">
                  <div
                    className="w-[350px] h-[275px] object-cover object-center "
                    style={{ backgroundImage: "url('https://preview.colorlib.com/theme/whitespace/images/bg_3.jpg.webp')" }}
                  ></div>
                  <h1>Oct. 12, 2018 Admin </h1>
                  <p className="text-[20px] mb-[16px] leading-[1.4] font-normal ">
                    Even the all-powerful Pointing has no control about the blind texts
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="w-[350px]   flex justify-center items-start flex-col space-y-6">
                  <div
                    className="w-[350px] h-[275px]"
                    style={{
                      backgroundImage: "url(https://preview.colorlib.com/theme/whitespace/images/image_1.jpg.webp)",
                    }}
                  ></div>
                  <h1>Oct. 12, 2018 Admin </h1>
                  <p className="text-[20px] mb-[16px] leading-[1.4] font-normal ">
                    Even the all-powerful Pointing has no control about the blind texts
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3}>
                <div className="w-[350px]   flex justify-center items-start flex-col space-y-6">
                  <div
                    className="w-[350px] h-[275px]"
                    style={{
                      backgroundImage: "url(https://preview.colorlib.com/theme/whitespace/images/image_1.jpg.webp)",
                    }}
                  ></div>
                  <h1>Oct. 12, 2018 Admin </h1>
                  <p className="text-[20px] mb-[16px] leading-[1.4] font-normal ">
                    Even the all-powerful Pointing has no control about the blind texts
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="w-[350px]   flex justify-center items-start flex-col space-y-6">
                  <div
                    className="w-[350px] h-[275px]"
                    style={{
                      backgroundImage: "url(https://preview.colorlib.com/theme/whitespace/images/image_1.jpg.webp)",
                    }}
                  ></div>
                  <h1>Oct. 12, 2018 Admin </h1>
                  <p className="text-[20px] mb-[16px] leading-[1.4] font-normal ">
                    Even the all-powerful Pointing has no control about the blind texts
                  </p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="max-w-max m-auto flex my-[78px] justify-center items-center space-x-2">
              <div className="w-[40px] border border-gray-300   h-[40px] rounded-full flex justify-center items-center">{"<"}</div>
              {
                [1, 2, 3, 4, 5,].map((item) =>
                (
                  <div className={item === 1 ? "w-[40px]  border h-[40px] rounded-full flex justify-center items-center bg-black text-white" : `${"w-[40px] border border-gray-300   h-[40px] rounded-full flex justify-center items-center"}`} key={item} >{item}</div>
                )
                )
              }
              <div className="w-[40px] border border-gray-300   h-[40px] rounded-full flex justify-center items-center">
                {">"}
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-span-4 ">
          <div className="flex mt-10 px-[10px] py-[6px] justify-center items-center bg-[#FAFAFA]">
            <input type="text" className="py-[6px] outline-none   px-[12px] w-full h-[52px] bg-white text-black border border-[#e6e6e6]" placeholder="Type a keyword and hit enter" />
            <div className="w-[50px] h-full flex justify-center items-center">
              <Search size={15} />
            </div>
          </div>
          <div className="mt-[80px] mb-[25px]">
            <h1 className="text-[20px] font-semibold mb-[25px] leading-[1.5] ">Categories</h1>
            <div className="">
              <div className="flex justify-between w-full items-center border-b border-gray-300 pb-2 mb-6">
                <p className="text-[15px] font-light leading-[27px]">Family Law</p> <span>{"("}6{")"}</span>
              </div>
              <div className="flex justify-between w-full items-center border-b border-gray-300 pb-2 mb-6">
                <p className="text-[15px] font-light leading-[27px]">Criminal Law</p> <span>{"("}6{")"}</span>
              </div>
              <div className="flex justify-between w-full items-center border-b border-gray-300 pb-2 mb-6">
                <p className="text-[15px] font-light leading-[27px]">Business Law</p> <span>{"("}6{")"}</span>
              </div>
              <div className="flex justify-between w-full items-center border-b border-gray-300 pb-2 mb-6">
                <p className="text-[15px] font-light leading-[27px]">Insurance Law</p> <span>{"("}6{")"}</span>
              </div>
              <div className="flex justify-between w-full items-center border-b border-gray-300 pb-2 mb-6">
                <p className="text-[15px] font-light leading-[27px]">Drug Control Law</p> <span>{"("}6{")"}</span>
              </div>

            </div>
            <PopularArticles />

          </div>
        </div>

      </div>
    </>
  )
}

export default page