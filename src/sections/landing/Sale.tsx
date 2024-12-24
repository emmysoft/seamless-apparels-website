import React from 'react'
import H2 from '../../components/tags/h2';
import NavBtns from '../../components/NavBtns';
import ImageCard from '../../components/ImageCard';

const Sale = () => {
  return (
    <div className='w-full min-h-[100vh]'>
      <div className="flex flex-col max-w-[1200px] mx-auto gap-[22px]">
        <H2 text='Best Selling' className='text-center text-3xl lg:text-[48px] mt-[20px] font-semibold'/>

        <div className="flex flex-col items-center justify-center">
          <NavBtns/>

          <div className="flex items-center justify-center gap-4 flex-wrap p-4">
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sale;
