import React from 'react'

type ChildrenProp = {
  children: React.ReactNode
}



const Container = ({ children }: ChildrenProp) => {
  return (
    <div className={`container  mx-auto `}>
      {children}
    </div>
  )
}

export default Container