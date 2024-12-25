import React from 'react';
import H2 from '../../components/tags/h2';
import P from '../../components/tags/p';
import Button from '../../components/buttons/Button';
import { CoverPic } from '../../constant/images';



const Header = () => {
  return (
    <div className='w-full my-4'>
      <div className="max-w-[1200px] mx-auto flex w-full flex-col md:flex-row gap-4 lg:gap-[100px]  px-4 lg:px-0">
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-3 gap-3">
          <H2 className='text-2xl md:text-3xl lg:text-6xl font-semibold mb-4' text='Creating a fashion wearables around scriptures.'/>

          <P className='text-sm md:text-lg' text='We are a fashion brand established for the purpose of inscribing scriptures on clothings and creating fashion wearables around scriptures in order to communicate the Light of GOD to the people.'/>
          <Button className='mt-5 px-4 py-3 w-[200px] bg-black text-White border-none' text='Explore Now'/>
        </div>

        <div className="flex justify-center items-center">
          <img src={CoverPic} alt="" className="h-[310px] lg:h-[510px] w-[260px] md:w-[290px] lg:w-[460px] rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Header;
