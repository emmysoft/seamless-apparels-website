import React, { FC, useState } from 'react';


type IType = {
  type: any;
  placeholder: string;
  img: string;
  label: string;
}

const TextInput:FC<IType> = ({type, img, placeholder, label}) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor="" className="">
            {label}
        </label>
        <div className="flex items-center w-[394px] p-3 border-[1px] rounded-lg">
            <img src={img} alt='' />
            <input type={showPassword ? 'text' : type} placeholder={placeholder} className="w-full h-full  px-2 outline-none" />

            { type === 'password' &&
               <img src={`${!showPassword ? '/auth/visibilityoff.svg' : '/auth/visiblity.png'}`} alt='' className='cursor-pointer h-4 w-5' onClick={() => setShowPassword(!showPassword)}/>
            }
        </div>
    </div>
  )
}

export default TextInput;
