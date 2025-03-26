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
        <div className="grid grid-cols-1 md:grid-cols-12 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-max">
          <div className="flex col-span-1 md:col-span-12 lg:col-span-6 flex-col text-center md:text-right md:items-end">
            <div className="mb-8 md:mb-[48px] mt-10 md:mt-[96px]">
              <p className="font-semibold text-[13px] block mb-0 uppercase tracking-[2px] text-[#fcd307]">Providing</p>
              <h2 className="mt-4 md:mt-[16px] mb-6 md:mb-12 text-2xl md:text-[34px] font-bold leading-tight md:leading-[1.2]">
                What We Can Do for You
              </h2>
            </div>

            {services?.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row md:justify-end items-center w-full mb-8 md:mb-[56px]">
                  <div className="w-full md:w-[399px] space-y-2 md:space-y-[6px] order-2 md:order-1">
                    <h1 className="font-medium uppercase tracking-[1px] text-base md:text-[18px]">{service.title}</h1>
                    <p className="bg-white text-sm md:text-[15px] leading-[1.8] font-light text-[#666666]">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] md:ml-6 mb-4 md:mb-0 rounded-full bg-black order-1 md:order-2"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <div className="flex col-span-1 md:col-span-12 lg:col-span-6 justify-center lg:justify-end items-start mt-8 lg:mt-0 lg:ml-12">
            <Image
              width={600}
              height={1000}
              className="w-full max-w-md lg:max-w-none h-auto lg:h-full object-center object-cover rounded-lg shadow-md"
              src="https://preview.colorlib.com/theme/whitespace/images/about.jpg"
              alt="Services image"
            />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-10 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 py-8 sm:py-12 mt-6 sm:mt-[40px] px-4">
            {services1.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="text-center w-full sm:w-[45%] md:w-64 mx-auto sm:mx-0">
                  <div className="relative inline-block p-3 sm:p-4 rounded-full bg-gray-100">
                    <span className="text-3xl sm:text-4xl relative z-10"></span>
                    <div className="absolute -top-2 -left-2 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h3 className="mt-3 sm:mt-4 font-medium uppercase tracking-[1px] text-base sm:text-lg">{service.title}</h3>
                  <p className="mt-2 bg-white text-sm sm:text-[15px] font-light text-[#666666] max-w-xs mx-auto sm:mx-0">
                    {service.description}
                  </p>
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
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
          <ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full sm:w-[95%] md:w-[90%] lg:w-[80%] m-auto px-4 sm:px-0">
              <ScrollAnimation delay={0.1}>
                <div className="w-full flex justify-center items-start flex-col space-y-3 sm:space-y-6">
                  <div
                    className="w-full aspect-[4/3] object-cover object-center rounded-md overflow-hidden"
                    style={{
                      backgroundImage: "url('https://preview.colorlib.com/theme/whitespace/images/bg_3.jpg.webp')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <h1 className="text-sm sm:text-base text-gray-600">Oct. 12, 2018 Admin </h1>
                  <p className="text-base sm:text-lg md:text-[20px] mb-2 sm:mb-[16px] leading-[1.4] font-normal">
                    Even the all-powerful Pointing has no control about the blind texts
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="w-full flex justify-center items-start flex-col space-y-3 sm:space-y-6">
                  <div
                    className="w-full aspect-[4/3] rounded-md overflow-hidden"
                    style={{
                      backgroundImage: "url(https://preview.colorlib.com/theme/whitespace/images/image_1.jpg.webp)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <h1 className="text-sm sm:text-base text-gray-600">Oct. 12, 2018 Admin </h1>
                  <p className="text-base sm:text-lg md:text-[20px] mb-2 sm:mb-[16px] leading-[1.4] font-normal">
                    Even the all-powerful Pointing has no control about the blind texts
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3}>
                <div className="w-full flex justify-center items-start flex-col space-y-3 sm:space-y-6">
                  <div
                    className="w-full aspect-[4/3] rounded-md overflow-hidden"
                    style={{
                      backgroundImage: "url(https://preview.colorlib.com/theme/whitespace/images/image_1.jpg.webp)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <h1 className="text-sm sm:text-base text-gray-600">Oct. 12, 2018 Admin </h1>
                  <p className="text-base sm:text-lg md:text-[20px] mb-2 sm:mb-[16px] leading-[1.4] font-normal">
                    Even the all-powerful Pointing has no control about the blind texts
                  </p>
                </div>
              </ScrollAnimation>


            </div>
            <div className="max-w-max m-auto flex flex-wrap my-8 sm:my-12 md:my-[78px] justify-center items-center gap-1 sm:gap-2">
              <div className="w-[30px] sm:w-[40px] border border-gray-300 h-[30px] sm:h-[40px] rounded-full flex justify-center items-center text-sm sm:text-base">
                {"<"}
              </div>
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  className={
                    item === 1
                      ? "w-[30px] sm:w-[40px] border h-[30px] sm:h-[40px] rounded-full flex justify-center items-center bg-black text-white text-sm sm:text-base"
                      : "w-[30px] sm:w-[40px] border border-gray-300 h-[30px] sm:h-[40px] rounded-full flex justify-center items-center text-sm sm:text-base"
                  }
                  key={item}
                >
                  {item}
                </div>
              ))}
              <div className="w-[30px] sm:w-[40px] border border-gray-300 h-[30px] sm:h-[40px] rounded-full flex justify-center items-center text-sm sm:text-base">
                {">"}
              </div>
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

