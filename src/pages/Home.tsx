import React from 'react'
import Header from '../sections/landing/Header';
import Sale from '../sections/landing/Sale';
import { productData, saleData } from '../constant/data';



const Home = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Header/>
      <Sale data={saleData} className='h-[354px] w-[297px] md:w-[320px] lg:w-[357px] lg:h-[404px]' isSale={true}/>
      <Sale data={productData} className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'/>
      <Sale data={productData} className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'/>
      <Sale data={productData} className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'/>
    </div>
  )
}

export default Home;
