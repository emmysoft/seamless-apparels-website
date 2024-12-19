import React from 'react'

const IconButton = () => {
  return (
    <div className='flex px-7 py-2 items-center justify-center gap-4 border-[1px] rounded-lg cursor-pointer w-[394px]'>
        <img src="/icons/google.svg" alt="" className="h-4 w-4" />
        <span className="text-Black text-xl font-semibold">Login with Google</span>
    </div>
  )
}

export default IconButton;
