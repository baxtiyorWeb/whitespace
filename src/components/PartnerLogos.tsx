import Image from "next/image"
import ScrollAnimation from "./ui/ScrollAnimation"

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

export default PartnerLogos