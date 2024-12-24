import React, { FC } from 'react'

type pType = {
  text: string;
  className: string;
}


const P:FC<pType> = ({text, className}) => {
  return (
    <p className={`${className}`}>{text}</p>
  )
}

export default P;
