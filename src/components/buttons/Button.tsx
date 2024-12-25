import React, { FC } from 'react'

type IBtn = {
  text: string;
  className: string;
  icon?: any;
  type?: any;
  onClick?: () => void
}


const Button:FC<IBtn> = ({text, className, icon, type, onClick}) => {
  return (
    <div onClick={onClick} className={`${className} flex items-center justify-center gap-3 py-2 px-4 rounded-lg cursor-pointer`}>
        <button type={type}>{text}</button>

      {icon &&  <img src={icon} alt="" className="h-5 w-5" />}
    </div>
  )
}

export default Button;
