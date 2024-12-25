import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom';
import Button from './buttons/Button';


const links  = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Shop',
    url: '#'
  },
  {
    name: 'Features',
    url: '#'
  },
  {
    name: 'Cart (5)',
    url: '#'
  },
  {
    name: 'Contact',
    url: '#'
  },
]


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState('Home')

  const navigate = useNavigate()


  return (
    <main className='flex relative border-b-[1px]'>
    <div className='w-full flex items-center md:justify-between'>
      <div className="flex items-center p-4 gap-4 justify-between w-full">
        <div className="flex items-center gap-2 w-full md:w-[30%]">
          <img src="/icons/logo.png" alt="" className="" />
          <h2 className='font-bold md:text-[19px] lg:text-[22px]'>SEAMLESS APPARREL</h2>
        </div>

        <div className="hidden md:flex items-center justify-around gap-2 w-[70%]">
          {links.map((l) => (
            <div className="flex flex-col">
              <Link 
                to={l.url} key={l.name} 
                onClick={() => setActive(l.name)}
                className={`text-inherit uppercase text-lg font-[500] ${active === l.name ? 'text-Black' : 'text-gray-500'}`}>{l.name}</Link>
             {active === l.name &&  <hr className='bg-[#000] h-0.5 md:h-1'/>}
            </div>
          ))}
          <Button 
            onClick={(() => navigate('/auth'))}
            className='w-[140px] bg-black text-White border-none' 
            text='Login'
          />
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
            <Button 
              onClick={(() => navigate('/auth'))}
              className='w-[140px] text-[#000] bg-white font-semibold text-lg' 
              text='Login'
            />
          </div>}
    </main>
  )
}

export default Navbar;
