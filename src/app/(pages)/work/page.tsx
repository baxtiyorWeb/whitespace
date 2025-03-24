import ImageGallery from "@/components/ImageGallery"
import MainImage from "@/components/MainImage"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import Link from "next/link"

const Work = () => {
  return (
    <div>
      <MainImage>
        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <h1 className="text-white text-[60px] font-extrabold mb-6">
            Our Work
          </h1>

          <div className="flex items-center gap-2 text-white/90 text-lg">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Our Work
            </Link>
          </div>
        </div>
      </MainImage>
      <ScrollAnimation>
        <div className="flex justify-center items-center flex-col">
          <p className="font-semibold text-[13px] block mt-[90px] uppercase tracking-[2px] text-[#fcd307]">Projects
          </p>
          <h1 className="text-[50px] font-bold mb-[1.5rem] leading-[1.5] ">Our Projects</h1>
          <p className="bg-white  text-[15px] leading-[1.8] font-light text-[#666666] w-1/2 text-center">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
          </p>
        </div>
      </ScrollAnimation>

      <ImageGallery />

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
    </div>
  )
}

export default Work