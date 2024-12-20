import React, { FC } from 'react'

type IBtn = {
  text: string;
  className: string;
}


const Button:FC<IBtn> = ({text, className}) => {
  return (
    <button type='submit' className={`${className} w-full py-2 px-4 bg-black text-White border-none rounded-lg`}>{text}</button>
  )
}

export default Button;
