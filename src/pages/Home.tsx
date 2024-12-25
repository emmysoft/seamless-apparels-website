import React from 'react'
import Header from '../sections/landing/Header';
import Sale from '../sections/landing/Sale';
import { productData, saleData } from '../constant/data';



const Home = () => {
  return (
    <div className='flex flex-col gap-[20px] p-2'>
      <Header/>
      <Sale 
        isActive='SALE' 
        data={saleData} 
        className='h-[354px] w-[297px] md:w-[320px] lg:w-[357px] lg:h-[404px]' isSale={true}
      />
      <Sale 
        isActive='HOT' 
        data={productData} 
        className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'
      />
      <Sale isActive='NEW ARRIVALS' data={productData} className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'/>
      <Sale isActive='ACCESSORIES' data={productData} className='h-[354px] w-[297px] md:w-[320px] lg:w-[247px] lg:h-[304px]'/>
    </div>
  )
}

export default Home;
