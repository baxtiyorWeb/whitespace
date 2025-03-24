import React from 'react'

type ChildrenProp = {
  children: React.ReactNode
}



const Container = ({ children }: ChildrenProp) => {
  return (
    <div className={`container  mx-auto border`}>
      {children}
    </div>
  )
}

export default Container