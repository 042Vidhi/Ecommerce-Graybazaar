import Link from 'next/link';
import React from 'react'

function CatagoriesBar() {

    const catagories = [
        'Pillowcases',
        'Tote Bags',
        'Pottery',
        'Jewelry',
        'Paintings',
        'GiftBasket',
        'Candles',
    ];


  return (
    <div className='hidden md:block'>

        <div className=" catagoriesbar w-full p-4 md:px-12 bg-blue-100 flex justify-between items-center border-y-[1px] border-slate-200 ">
                {catagories.map((category,i) => (

                    <div className="py-[1px] text-slate-400 font-medium catagoriesbar-item cursor-pointer lg:text-base md:text-sm" 
                    key={i}  >
                        
                        {category}
                        
                        </div>
                       
                ))}

                </div>
    </div>
  )
}

export default CatagoriesBar