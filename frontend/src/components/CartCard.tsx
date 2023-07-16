"use client"
import React from 'react'
import testimage from '../../public/GiftBaskets.jpg'
import Image from 'next/image'
import { useAppDispatch } from '@/redux/hook';
import { removeFromCart } from '@/redux/cartSlice';

export default function CartCard({product}:any) {

    const dispatch = useAppDispatch();

  return (
    <div>
            <div className='flex items-center p-2 mx-2 my-2 lg:mx-6 lg:my-4 lg:px-4 bg-blue-100 gap-2 rounded-md'>
                <Image src={testimage} alt={product.name} className='md:w-48 md:h-48 w-24 h-24 object-contain'/>
                <div className='md:ml-4 '>
                    <h3 className='text-slate-700 font-semibold text-xs md:text-xl'>{product.name}</h3>
                    <p className='text-slate-600 md:line-clamp-3 line-clamp-2'>{product.description}</p>
                </div>
                <div className='md:ml-12'>
                    <p className='font-bold text-black'>Rs.{product.price}</p>
                    <p className='text-emerald-400 text-sm  hidden md:block'>Terms and conditions</p>
                    <button className='bg-slate-700 text-white p-[2px] md:px-4 md:py-2 rounded-md'
                    onClick={() => dispatch(removeFromCart({id:product.id}))}
                    >Remove </button>
                </div>
            </div>

    </div>
  )
}
