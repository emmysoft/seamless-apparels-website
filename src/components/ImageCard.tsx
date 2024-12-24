import React from 'react'
import H2 from './tags/h2';

const ImageCard = () => {
  return (
    <div className='flex flex-col justify-center'>
        <img src="/img/abba.png" alt="" className="h-[354px] w-[297px] lg:w-[357px] lg:h-[404px]" />

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


// width: 397px
// height: 454px;
// top: 1113px;
// left: 78px;
// gap: 0px;
// opacity: 0px;
