import Image from "next/image"
import ItemCard from "./ItemCard"
import ScrollAnimation from "./ui/ScrollAnimation"

const TestimonialCard = () => {
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

  return (
    <ScrollAnimation>
      <div className="overflow-hidden mt-[1px] max-h-max bg-[#FBD40A]">
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

export default TestimonialCard