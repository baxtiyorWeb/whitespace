import Counter from "./Counter"
import ScrollAnimation from "./ui/ScrollAnimation"

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



export default StatsSection