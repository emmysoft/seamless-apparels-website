import React, { FC } from 'react'
import H2 from './tags/h2';

type ICard = {
    className: string;
    d: any;
}

const ImageCard:FC<ICard> = ({className, d}) => {
  return (
    <div className='flex flex-col justify-center'>
        <img src={d.img} alt="" className={`${className}`} />

        <H2 text={d.name} className='text-center font-semibold text-lg'/>
        <div className="flex items-center my-3 justify-center gap-4">
            <span className='text-lg font-medium'>{d.price}  {' '} | </span>
            
            <span className='text-lg font-medium'>{d.rating}</span>
            <img src="/icons/star.svg" alt="" className="h-4 w-4 object-cover" />
        </div>
    </div>
  )
}

export default ImageCard;

