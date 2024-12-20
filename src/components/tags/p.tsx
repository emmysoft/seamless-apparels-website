import React, { FC } from 'react'

type pType = {
  text: string;
}


const P:FC<pType> = ({text}) => {
  return (
    <p className='text-Black font-[400]'>{text}</p>
  )
}

export default P;
