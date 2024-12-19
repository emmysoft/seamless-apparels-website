import React from 'react'

const TextInput = () => {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor="" className="">
            Name
        </label>
        <div className="flex  w-[394px] p-3 border-[1px] rounded-lg">
            <input type="text" placeholder='First Name and Last Name' className="w-full h-full  px-2 outline-none" />
        </div>
    </div>
  )
}

export default TextInput;
