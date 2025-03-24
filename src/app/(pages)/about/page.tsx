"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import AboutSection from "@/components/AboutSection"
import ImageGallery from "@/components/ImageGallery"
import PartnerLogos from "@/components/PartnerLogos"
import PricingTable from "@/components/PricingTable"
import StatsSection from "@/components/StatsSection"
import TestimonialCard from "@/components/TestiminalCard"
import ScrollAnimation from "@/components/ui/ScrollAnimation"












export default function About() {
  const [isClient, setIsClient] = useState(false)
  console.log(isClient);

  useEffect(() => {
    setIsClient(true)
  }, [])

  const services = [
    {
      title: "MARKET RESEARCH",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: "/icons/lightbulb.svg", // Ikonka uchun rasm yo'li (o'zingiz qo'shishingiz kerak)
    },
    {
      title: "FINANCIAL SERVICES",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: "/icons/lightbulb.svg",
    },
    {
      title: "ONLINE MARKETING",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: "/icons/lightbulb.svg",
    },
    {
      title: "24/7 SUPPORT",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: "/icons/lightbulb.svg",
    },
  ]
  const services1 = [
    {
      title: "BUSINESS STRATEGY",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: "💡",
    },
    {
      title: "DATA ANALYSIS",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: "🔍",
    },
    {
      title: "GRAPHIC DESIGN",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: "🖼️",
    },
    {
      title: "CREATIVE",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: "💡",
    },
  ]

  return (
    <div>
      <AboutSection />
      <ScrollAnimation>
        <div className="grid grid-cols-12 w-[1010px] ml-auto mr-[270px]    h-max">
          <div className="flex col-span-6 flex-col text-right items-end">
            <div className="mb-[48px] mt-[96px]">
              <p className="font-semibold text-[13px] block mb-0 uppercase tracking-[2px] text-[#fcd307]">
                Providing
              </p>
              <h2 className="mt-[16px] mb-12 leading-[6px] text-[34px] font-bold">What We Can Do for You</h2>
            </div>

            {services?.map((_, index: number) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="flex justify-end  items-center w-full mb-[56px]">
                  <div className="w-[399px] space-y-[6px]">
                    <h1 className="font-medium uppercase tracking-[1px] text-[18px]">Market Research</h1>
                    <p className="bg-white  text-[15px] leading-[1.8] font-light text-[#666666] ">
                      Even the all-powerful Pointing has no control about the blind texts it is an almost
                      unorthographic.
                    </p>
                  </div>
                  <div className="w-[80px] ml-6 h-[80px] rounded-full bg-black"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <div className="flex ml-12 col-span-6  justify-end items-start">
            <Image
              width={600}
              height={1000}
              className="w-full h-full object-center object-cover"
              src="https://preview.colorlib.com/theme/whitespace/images/about.jpg"
              alt="img"
            />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div>
          <div className="flex justify-center gap-8 py-12 mt-[40px]">
            {services1.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="text-center w-64">
                  <div className="relative inline-block p-4 rounded-full bg-gray-100">
                    <span className="text-4xl relative z-10"></span>
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h3 className="mt-4 font-medium  uppercase tracking-[1px] tezt-[18px] text-lg">{service.title}</h3>
                  <p className="  mt-2 bg-white  text-[15px]  font-light text-[#666666]">{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
      <StatsSection />
      <ScrollAnimation>
        <div className="flex justify-center items-center flex-col">
          <p className="font-semibold text-[13px] block mt-[90px] uppercase tracking-[2px] text-[#fcd307]">Projects</p>
          <h1 className="text-[50px] font-bold mb-[1.5rem] leading-[1.5] ">Recents Projects</h1>
          <p className="bg-white  text-[15px] leading-[1.8] font-light text-[#666666] w-1/2 text-center">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in
          </p>
        </div>
      </ScrollAnimation>
      <ImageGallery />
      <TestimonialCard />
      <ScrollAnimation>
        <div className="flex mb-[80px] justify-center items-center flex-col">
          <p className="font-semibold text-[13px] block mt-[90px] uppercase tracking-[2px] text-[#fcd307]">
            Our latest update
          </p>
          <h1 className="text-[50px] font-bold mb-[1.5rem] leading-[1.5] ">Case Study</h1>
          <p className="bg-white  text-[15px] leading-[1.8] font-light text-[#666666] w-[33%] text-center">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="grid  grid-cols-3 gap-6 w-[80%] m-auto">
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
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="flex bg-[#FAFAFA] mb-[80px] ">
          <div className="text-center w-[80%] justify-center items-center flex-col m-auto ">
            <p className="font-semibold text-[13px] block mt-[90px] uppercase tracking-[2px] text-[#fcd307]">
              Pricing Plans
            </p>
            <h1 className="text-[50px] font-bold mb-[1.5rem] leading-[1.5] ">Our Best Pricing</h1>
            <PricingTable />

            <ScrollAnimation delay={0.2}>
              <p className="text-left mt-[78px] text-[15px] font-light leading-[27px] w-[58%] mb-[90px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vero accusantium sunt sit aliquam ipsum
                molestias autem perferendis, incidunt cumque necessitatibus cum amet cupiditate, ut accusamus. Animi,
                quo. Laboriosam, laborum.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
      <PartnerLogos />
    </div>
  )
}

