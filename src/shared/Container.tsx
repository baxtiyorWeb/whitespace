import { tw } from '@/common/common'
import React from 'react'

type ChildrenProp = {
  children: React.ReactNode
}



const Container = ({ children }: ChildrenProp) => {
  return (
    <div className={`container ${tw.colors.darkBlue.bg} px-[67px] mx-auto border`}>
      {children}
    </div>
  )
}

export default Container