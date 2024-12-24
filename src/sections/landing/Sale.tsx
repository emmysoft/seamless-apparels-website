import React, { FC } from 'react'
import H2 from '../../components/tags/h2';
import NavBtns from '../../components/NavBtns';
import ImageCard from '../../components/ImageCard';
import Button from '../../components/buttons/Button';


type ISale = {
  data: any[];
  className: string;
  isSale?: boolean
}

const Sale:FC<ISale> = ({data, className, isSale}) => {



  return (
    <div className='w-full min-h-[100vh]'>
      <div className="flex flex-col max-w-[1200px] mx-auto gap-[22px]">
        <H2 text='Best Selling' className='text-center text-3xl lg:text-[48px] mt-[20px] font-semibold'/>

        <div className="flex flex-col items-center justify-center">
          <NavBtns/>

          <div className="flex items-center justify-center gap-4 flex-wrap p-4">
            {
              data.map((l) => (
                <ImageCard className={className}/>
              ))
            }
          </div>
            { isSale && 
              <Button text='See More' className='w-[200px] py-3 mt-[50px] font-medium lg:mt-[90px] text-lg'/>
            }
        </div>
      </div>
    </div>
  )
}

export default Sale;
