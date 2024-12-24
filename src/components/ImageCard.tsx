import React, { FC } from 'react'
import H2 from './tags/h2';

type ICard = {
    className: string;
}

const ImageCard:FC<ICard> = ({className}) => {
  return (
    <div className='flex flex-col justify-center'>
        <img src="/img/abba.png" alt="" className={`${className}`} />

        <H2 text='Round Neck' className='text-center font-semibold text-lg'/>
        <div className="flex items-center my-3 justify-center gap-4">
            <span className='text-lg font-medium'>N10,000  {' '} | </span>
            
            <span className='text-lg font-medium'>6.0</span>
            <img src="/icons/star.svg" alt="" className="h-4 w-4 object-cover" />
        </div>
    </div>
  )
}

export default ImageCard;

