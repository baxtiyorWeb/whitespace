/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, isArray } from "lodash"
import Image from "next/image"
import useGetAllQuery from "../hooks/api/useGetAllQuery"
import ItemCard from "./ItemCard"
import ScrollAnimation from "./ui/ScrollAnimation"

const TestimonialCard = () => {
  const { data } = useGetAllQuery({
    key: "contact-submissions",
    url: "/admin/contact-submissions/",
  })

  const submissions = isArray(get(data, "data.results")) ? get(data, "data.results") : []

  return (
    <ScrollAnimation>
      <div className="overflow-hidden mt-[80px] max-h-max bg-[#FBD40A]">
        <ItemCard
          slider
          sliderConfig={{
            slidesToShow: 4,
            responsive: [
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                },
              },
            ],
          }}
          className="m-auto"
          items={submissions.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="bg-[#FDDC56] space-y-4 sm:space-y-6 mb-6 mx-12 sm:mx-4 md:mx-6 lg:mx-10 w-full max-w-[380px] m-auto p-4 sm:p-6 md:p-8 rounded-lg text-center"
            >
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 mx-auto">
                <Image
                  width={100}
                  height={100}
                  src={testimonial.image ? testimonial.image : (index !== 3 ? "https://randomuser.me/api/portraits/men/32.jpg" : "/default.png")}
                  alt={testimonial.name}
                  className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-4 border-white shadow-md"
                />

                <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-yellow-500 text-base sm:text-xl font-bold">&quot;</span>
                </div>
              </div>
              <h3 className="mt-2 sm:mt-4 font-bold text-base sm:text-lg">{testimonial.name}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{testimonial.message}</p>
              <p className="mt-2 sm:mt-4 text-gray-800 text-xs sm:text-sm">{testimonial.subject}</p>
            </div>
          ))}
        ></ItemCard>

        <ScrollAnimation delay={0.2}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold mb-4 sm:mb-[1.5rem] leading-[1.5] text-center block mt-6 sm:mt-10">
            My satisfied customer says{" "}
          </h1>
          <p className="text-center text-sm sm:text-[15px] leading-[1.8] font-light text-[#666666] block mb-16 sm:mb-24 md:mb-32 lg:mb-[150px] mt-4 sm:mt-10 px-4 sm:px-6 md:px-10 lg:px-20">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
            blind texts. Separated they live in
          </p>
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  )
}

export default TestimonialCard

