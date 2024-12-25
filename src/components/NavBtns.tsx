import React, { FC, useState } from 'react';


type INavBtn = {
    isActive: string
}

const names = ['SALE', 'HOT', 'NEW ARRIVALS', 'ACCESSORIES']

const NavBtns:FC<INavBtn> = ({ isActive}) => {

  const [active, setActive] = useState<string>(isActive || names[0]);

  return (
    <div className='flex items-center justify-center w-full gap-7 md:justify-around'>
        {names.map((name) => (
            <div className="flex flex-col gap-2" onClick={() => setActive(name)}>
                <span className={`text-sm md:text-[24px] font-semibold ${
                  active === name ? 'text-black' : 'text-gray-500' }`}
                >{name}</span>
                {active === name && <hr className='bg-[#000] h-0.5 md:h-1'/>}
            </div>
        ))
        }
    </div>
  )
}

export default NavBtns;


// text-sm md:text-[24px] font-semibold