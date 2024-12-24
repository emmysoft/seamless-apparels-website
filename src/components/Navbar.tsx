import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import Button from './buttons/Button';


const links  = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Shop',
    url: '/show'
  },
  {
    name: 'Features',
    url: '/features'
  },
  {
    name: 'Cart (5)',
    url: '/cart'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
]


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);


  return (
    <main className='flex relative'>
    <div className='w-full flex items-center md:justify-between'>
      <div className="flex items-center p-4 gap-4 justify-between w-full">
        <div className="flex items-center gap-2 w-full md:w-[30%]">
          <img src="/icons/logo.png" alt="" className="" />
          <h2 className='font-bold md:text-[19px] lg:text-[22px]'>SEAMLESS APPARREL</h2>
        </div>

        <div className="hidden md:flex items-center justify-around gap-2 w-[70%]">
          {links.map((l) => (
            <Link to={l.url} key={l.name} className='text-inherit uppercase text-lg font-[500]'>{l.name}</Link>
          ))}
          <Button className='w-[140px]' text='Login'/>
        </div>
      </div>
        <div className="flex md:hidden px-2">
          {openMenu ? <RiCloseLine color='#000' size={32} onClick={() => setOpenMenu(false)}/>: 
          <RiMenu3Line color='#000' size={32} onClick={() => setOpenMenu(true)}/>
          }

        </div>
      </div>
          { openMenu &&
            <div className="flex flex-col h-[90vh] w-full md:hidden absolute top-12 right-0 justify-center items-center gap-8 bg-[#000] text-[#fff] mt-5">
            {links.map((l) => (
              <Link to={l.url} key={l.name} className='text-inherit uppercase text-lg font-[500]'>{l.name}</Link>
            ))}
            <Button className='w-[140px] text-[#000] bg-white font-semibold text-lg' text='Login'/>
          </div>}
    </main>
  )
}

export default Navbar;
