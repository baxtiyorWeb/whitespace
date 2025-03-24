"use client"

import { tw } from "@/common/common"
import ItemCard from "@/components/ItemCard"
import Container from "@/shared/Container"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface IProps {
  delay?: number,
  children?: React.ReactNode,
}
// Add this function after the imports and before any other components
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

// Replace the entire StatsSection component with this
const StatsSection = () => {
  return (
    <ScrollAnimation >
      <div
        className="relative mt-[90px] bg-cover bg-center h-[300px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://preview.colorlib.com/theme/whitespace/images/bg_3.jpg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex z-10  w-[1010px] mx-auto px-6">
          <div className="w-[390px]">
            <p className="text-sm uppercase tracking-widest">Some</p>
            <h2 className="text-[40px] font-bold mb-6 ">Interesting Facts</h2>
          </div>
          <div className="flex justify-between  items-center max-w-4xl mx-auto text-center">
            <div className="ml-[64px] w-[190px]">
              <Counter value={2000} />
              <p className="text-[16px] text-gray-300 block ">Done Works</p>
            </div>
            <div className="ml-[64px] w-[190px]">
              <Counter value={300} />
              <p className="text-[16px] text-gray-300 block ">Happy Customers</p>
            </div>
            <div className="ml-[64px] w-[190px]">
              <Counter value={100} />
              <p className="text-[16px] text-gray-300 block ">Coffee</p>
            </div>
            <div className="ml-[64px] w-[190px]">
              <Counter value={1000} />
              <p className="text-[16px] text-gray-300 block ">Work Hours</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

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

const testimonials = [
  {
    name: "Garreth Smith",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Garreth Smith",
    role: "Interface Designer",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Garreth Smith",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Garreth Smith",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
]

// Replace the entire TestimonialCard component with this
const TestimonialCard = () => {
  return (
    <ScrollAnimation>
      <div className="overflow-hidden mt-[90px] max-h-max bg-[#FBD40A]">
        <ItemCard
          slider
          sliderConfig={{
            slidesToShow: 4,
          }}
          className="m-auto "
          items={testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FDDC56] space-y-6 mb-6  mx-10 w-[380px]  m-auto p-8 rounded-lg   text-center "
            >
              <div className="relative w-20  h-20 mx-auto">
                <Image
                  width={100}
                  height={100}
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md"
                />
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-yellow-500 text-xl font-bold">&quot;</span>
                </div>
              </div>
              <p className="mt-4 text-gray-800 text-sm">{testimonial.quote}</p>
              <h3 className="mt-4 font-bold text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
          ))}
        ></ItemCard>

        <ScrollAnimation delay={0.2}>
          <h1 className="text-[50px] font-bold mb-[1.5rem] leading-[1.5] text-center block mt-10">
            My satisfied customer says{" "}
          </h1>
          <p className="text-center  text-[15px] leading-[1.8] font-light text-[#666666] block mb-[150px] mt-10">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in
          </p>
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  )
}
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

  return (
    <div>
      <div>
        <div className="absolute -z-10 inset-0 w-full h-full overflow-hidden ">
          {isClient && (
            <iframe
              src="https://www.youtube.com/embed/iia8HIsvqmw?modestbranding=1&autoplay=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=iframe_YTP_1742636383655&origin=https%3A%2F%2Fpreview.colorlib.com&allowfullscreen=true&wmode=transparent&iv_load_policy=3&playsinline=1&mute=1&html5=1&widgetid=1&loop=1"
              className="absolute w-[300%] h-[82%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
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
          <div className="grid grid-cols-10 w-[1010px] ml-auto mr-[270px]    h-max">
            <div className="flex col-span-6 flex-col   text-right items-end">
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
            <div className="flex ml-12 col-span-4  justify-end items-start">
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

