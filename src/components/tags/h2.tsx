import React, { FC } from 'react';

type hType = {
  text: string;
}

const H2:FC<hType> = ({text}) => {
  return (
    <h2 className='font-[500] text-4xl text-Black'>{text}</h2>
  )
}

export default H2;
