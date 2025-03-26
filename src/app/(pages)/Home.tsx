/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { tw } from "@/common/common"
import Container from "@/shared/Container"
import ImageGallery from "@/src/components/ImageGallery"
import StatsSection from "@/src/components/StatsSection"
import TestimonialCard from "@/src/components/TestiminalCard"
import ScrollAnimation from "@/src/components/ui/ScrollAnimation"
import useGetAllQuery from "@/src/hooks/api/useGetAllQuery"
import { get, isArray } from "lodash"
import Image from "next/image"
import { useEffect, useState } from "react"

// Replace the entire StatsSection component with this





// Replace the entire TestimonialCard component with this

const PricingCard = ({
  tier,
  price,
  subtitle,
  bandwidth,
  storage,
  overage,
}: {
  tier: string
  price: string
  subtitle: string
  bandwidth: string
  storage: string
  overage: string
}) => {
  return (
    <div className="bg-white p-8 rounded-lg  flex flex-col items-center text-center border border-gray-100">
      <h2 className="text-gray-800 font-medium text-[14px] leading-[14px] uppercase ">{tier}</h2>

      <div className="flex items-start mb-4">
        <span className="text-yellow-400  font-light text-[20px]">$</span>
        <span className="text-yellow-400  text-[40px] font-medium leading-[72px] ">{price}</span>
      </div>

      <p className="text-gray-500 mb-8 text-[15px] font-light leading-[27px] ">{subtitle}</p>

      <button
        className={`rounded-full py-3 px-8 mb-8 w-full font-medium transition-colors ${tier === "FREE" ? "bg-yellow-400 text-white" : "bg-white text-yellow-400 border border-yellow-400 hover:bg-yellow-50"}`}
      >
        Get Started
      </button>

      <p className="font-medium bg-[#FAFAFA] text-gray-800 mb-6 text-[16px] leading-[24px] text-center ">
        Enjoy All The Features
      </p>

      <div className="w-full space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="font-medium text-gray-800">{bandwidth} GB</span>
          <span className="text-gray-400">Bandwidth</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-800">{storage} GB</span>
          <span className="text-gray-400">Storage</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-800">${overage} / GB</span>
          <span className="text-gray-400">Overages</span>
        </div>
      </div>

      <p className="text-gray-400">All features</p>
    </div>
  )
}

// Replace the entire PricingTable component with this
const PricingTable = () => {
  const plans = [
    {
      tier: "FREE",
      price: "0",
      subtitle: "100% free. Forever",
      bandwidth: "150",
      storage: "100",
      overage: "1.00",
    },
    {
      tier: "STARTUP",
      price: "19",
      subtitle: "All features are included",
      bandwidth: "450",
      storage: "400",
      overage: "2.00",
    },
    {
      tier: "PREMIUM",
      price: "49",
      subtitle: "All features are included",
      bandwidth: "250",
      storage: "200",
      overage: "5.00",
    },
    {
      tier: "PRO",
      price: "99",
      subtitle: "All features are included",
      bandwidth: "450",
      storage: "400",
      overage: "20.00",
    },
  ]

  return (
    <ScrollAnimation>
      <div className=" mx-auto py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimation key={plan.tier} delay={index * 0.1}>
              <PricingCard
                tier={plan.tier}
                price={plan.price}
                subtitle={plan.subtitle}
                bandwidth={plan.bandwidth}
                storage={plan.storage}
                overage={plan.overage}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  )
}

// Replace the entire PartnerLogos component with this
const PartnerLogos = () => {
  const partners = [
    {
      name: "Partner 1",
      imageUrl: "https://preview.colorlib.com/theme/whitespace/images/partner-1.png.webp",
    },
    {
      name: "Partner 2",
      imageUrl: "https://preview.colorlib.com/theme/whitespace/images/partner-2.png.webp",
    },
    {
      name: "Partner 3",
      imageUrl: "https://preview.colorlib.com/theme/whitespace/images/partner-3.png.webp",
    },
    {
      name: "Partner 4",
      imageUrl: "https://preview.colorlib.com/theme/whitespace/images/partner-4.png.webp",
    },
    {
      name: "Partner 5",
      imageUrl: "https://preview.colorlib.com/theme/whitespace/images/partner-5.png.webp",
    },
  ]

  return (
    <ScrollAnimation>
      <div className="w-[80%]  mx-auto pb-12   ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <ScrollAnimation key={partner.name} delay={index * 0.1}>
              <div className="bg-white w-[228px]  h-[64px] rounded-lg  flex flex-col items-center justify-center">
                <div className="h-[64px] flex items-center justify-start ">
                  <Image
                    src={partner.imageUrl || "/placeholder.svg"}
                    alt={partner.name}
                    width={228}
                    height={64}
                    className="w-full h-full  object-cover p-1"
                  />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  )
}

// Find the return statement in the Main component and replace it with this
export default function Main() {
  const [isClient, setIsClient] = useState(false)

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
  const { data } = useGetAllQuery({
    key: "projects",
    url: "/projects/",
  })

  const items = isArray(get(data, "data.results")) ? get(data, "data.results") : []
  return (
    <div>
      <div>
        <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden ">
          {isClient && (
            <iframe
              src="https://www.youtube.com/embed/iia8HIsvqmw?modestbranding=1&autoplay=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=iframe_YTP_1742636383655&origin=https%3A%2F%2Fpreview.colorlib.com&allowfullscreen=true&wmode=transparent&iv_load_policy=3&playsinline=1&mute=1&html5=1&widgetid=1&loop=1"
              className="absolute w-auto sm:w-[200%] md:w-[150%] lg:w-[120%] h-[82%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Background Video"
            ></iframe>
          )}
          <div className="absolute inset-0 h-[91%] bg-black -z-10"></div>
        </div>

        <div className=" left-0 top-[103px] bg-black  h-[80vh] w-[331px]">
          <div className="flex justify-center items-center flex-col h-full bg-black">
            <div className={`ml-[430px] -mt-30  w-[639px] h-[324px]  ${tw.config.font.semibold} `}>
              <div className="relative border-white">
                <p className={`text-white text-[14px] tracing-[3px] ${tw.config.font.semibold}`}>Welcome</p>
                <div className={`absolute h-2 w-[130px] bottom-[1px]  ${tw.config.darkBlue.bg}`}></div>
              </div>

              <h1 className={`${tw.config.font.black} leading-[108px] text-white text-[90px]`}>
                We Help to Build You the Product
              </h1>
              <span className="text-[28px] font-semibold text-white mb-[1.4rem]">Business Solution</span>
            </div>
          </div>
        </div>
      </div>

      <Container>
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
      </Container>

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

      <div className="flex justify-center items-center flex-col  mb-[80px]">
        <p className="font-semibold text-[13px] block mt-[90px] uppercase tracking-[2px] text-[#fcd307]">Our latest update</p>
        <h1 className="text-[50px] font-bold mb-[1.5rem] leading-[1.5] ">Case Study</h1>
        <p className="bg-white  text-[15px] leading-[1.8] font-light text-[#666666] w-1/2 text-center">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
        </p>
      </div>
      <ScrollAnimation>
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
          <ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full sm:w-[95%] md:w-[90%] lg:w-[80%] m-auto px-4 sm:px-0">
              {
                items?.map((item: any, index: number) => (
                  <ScrollAnimation delay={Number(`0.${index}`)} key={index}>
                    <div className="w-full flex justify-center items-start flex-col space-y-3 sm:space-y-6">
                      <div
                        className="w-full aspect-[4/3] object-cover object-center rounded-md overflow-hidden"
                        style={{
                          backgroundImage: `url('${item?.images[0].image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <h1 className="text-sm sm:text-base text-gray-600">Oct. 12, 2018 Admin </h1>
                      <p className="text-base sm:text-lg md:text-[20px] mb-2 sm:mb-[16px] leading-[1.4] font-normal">
                        {item?.description}
                      </p>
                    </div>
                  </ScrollAnimation>

                ))
              }
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

