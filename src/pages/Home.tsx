import React from 'react'
import Header from '../sections/landing/Header';
import Sale from '../sections/landing/Sale';

var images = [1, 2, 3];

var otherImgs = [1, 2, 3, 4, 5, 6, 7, 8]

const Home = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Header/>
      <Sale data={images} className='h-[354px] w-[297px] md:w-[320px] lg:w-[357px] lg:h-[404px]' isSale={true}/>
      <Sale data={otherImgs} className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'/>
      <Sale data={otherImgs} className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'/>
      <Sale data={otherImgs} className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'/>
    </div>
  )
}

export default Home;
