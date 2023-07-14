"use client"
import React from 'react'
import Image from 'next/image';
import candles from '../../public/Candles.jpg';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/cartSlice';
import { removeFromWishList } from '@/redux/wishListSlice';

export default function WishListCard({product}:any) {

    const dispatch = useAppDispatch();
    return (
        <div className=' bg-blue-100 p-4 rounded-lg m-2'>
        <div className="productcard flex flex-col justify-between items-center ">
            
            <Image src={candles} alt="Logo" className='rounded-lg cursor-pointer' 
            onClick={()=>{window.location.href=`/products/${product?.id}`}}
            />
            
            <div className="productcard-info flex flex-col w-full p-2 ">
                <p className='text-slate-800 font-medium'>{product?.name}</p>
                <p className='text-slate-400 font-medium'>Rs. {product?.price}</p>
            </div>
            <div className="productcard-button w-full h-10  gap-2 rounded-md flex justify-center items-center">
                <button className="button bg-blue-300 rounded-lg w-1/2 py-2"
                onClick={() => dispatch(removeFromWishList(product))}
                >Unsave</button>
                <button className="button bg-slate-800 rounded-lg w-1/2 py-2"
                  onClick={() => dispatch(addToCart(product))}
                > Cart</button>
            </div>
        </div>
    </div>
    )
}