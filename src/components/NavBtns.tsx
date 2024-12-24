import React, { FC, useState } from 'react';


type INavBtn = {
    name?: string;
    isActive?: string
}

const names = ['SALE', 'HOT', 'NEW ARRIVALS', 'ACCESSORIES']

const NavBtns:FC<INavBtn> = ({name, isActive}) => {

    const [activeItem, setActiveItem] = useState('SALE')

  return (
    <div className='flex items-center justify-center w-full gap-4 md:justify-around'>
        {names.map((name) => (
            <div className="flex flex-col gap-2">
                <span className='text-lg md:text-[24px] font-semibold'>{name}</span>
                <hr className='bg-[#000] h-0.5 md:h-1'/>
            </div>
        ))
        }
    </div>
  )
}

export default NavBtns;
