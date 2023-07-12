"use client"
import React from 'react'
import Image from 'next/image';
import candles from '../../public/Candles.jpg';

export default function ProductCard() {
  return (
    <div className='w-64 bg-blue-100 p-2 rounded-lg'>
        <div className="productcard flex flex-col justify-between items-center p-4">
            
            <Image src={candles} alt="Logo" className='rounded-lg'/>
            
            <div className="productcard-info flex flex-col w-full p-2 ">
                <p className='text-slate-800 font-medium'>Product Name</p>
                <p className='text-slate-400 font-medium'>Price</p>
            </div>
            <div className="productcard-button w-full h-10  gap-2 rounded-md flex justify-center items-center">
                <button className="button bg-blue-300 rounded-lg w-1/2 py-2">Favourite</button>
                <button className="button bg-slate-800 rounded-lg w-1/2 py-2">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
