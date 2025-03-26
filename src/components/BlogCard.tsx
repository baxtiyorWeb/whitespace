/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, isArray } from 'lodash'
import useGetAllQuery from '../hooks/api/useGetAllQuery'
import ScrollAnimation from './ui/ScrollAnimation'

const BlogCard = () => {
  const { data } = useGetAllQuery({
    key: "projects",
    url: "/projects/",
  })

  const items = isArray(get(data, "data.results")) ? get(data, "data.results") : []
  return (
    <ScrollAnimation>
      <div className="col-span-12 md:col-span-12 lg:col-span-8">
        <ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full sm:w-[95%] md:w-[90%] lg:w-[80%] m-auto px-4 sm:px-0">
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
            <ScrollAnimation delay={0.4}>
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
                  Even the all-powerful Pointing has no control about the blind textssss
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

  )
}

export default BlogCard