import React from 'react'
import Image from 'next/image'
import candles from '../../../../public/candles.jpg'

export default function page() {
  return (
    <div className='flex flex-col md:flex-row justify-center  h-1/2  p-2 bg-blue-100 m-4 rounded-lg'>
        <Image src={candles} alt="Logo" className='rounded-lg md:w-1/2 '/>
        <div className="productcard-info flex flex-col w-full px-2 justify-end lg:gap-4">
            <p className='text-slate-800 font-medium text-xl'>Product Name</p>
            <p className='text-blue-900 font-medium text-xl'>Price</p>
            <p className='text-slate-600 font-semibold text-sm '>Details:</p>
            <p className='text-slate-500 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <div className="productcard-button w-full h-10  gap-2 rounded-md flex justify-center items-center">
                <button className="button bg-blue-300 rounded-lg w-1/2 py-2">Favourite</button>
                <button className="button bg-slate-800 rounded-lg w-1/2 py-2">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
