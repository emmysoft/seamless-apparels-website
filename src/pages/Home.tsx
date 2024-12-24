import React from 'react'
import Header from '../sections/landing/Header';
import Sale from '../sections/landing/Sale';

const Home = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Header/>
      <Sale/>
    </div>
  )
}

export default Home;
