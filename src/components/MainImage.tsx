import { ReactNode } from "react";


interface IProps {
  children: ReactNode
}


const MainImage = ({ children }: IProps) => {
  return <div
    className="relative w-full h-[650px] flex items-center justify-start overflow-hidden pt-[75px]"
    style={{
      backgroundImage: "url('https://preview.colorlib.com/theme/whitespace/images/bg_2.jpg.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30"></div>

    {children}
  </div>


}

export default MainImage