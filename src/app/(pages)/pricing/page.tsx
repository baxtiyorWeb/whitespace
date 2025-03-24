import MainImage from "@/components/MainImage"
import PricingTable from "@/components/PricingTable"
import ScrollAnimation from "@/components/ui/ScrollAnimation"
import Link from "next/link"

const Pricing = () => {
  return (
    <div>
      <MainImage>
        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <h1 className="text-white text-[60px] font-extrabold mb-6">
            Pricing
          </h1>

          <div className="flex items-center gap-2 text-white/90 text-lg">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Our Pricing
            </Link>
          </div>
        </div>
      </MainImage>
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
    </div>
  )
}

export default Pricing