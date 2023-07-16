"use client"
import React from 'react';
import {Heading,Highlight} from '@chakra-ui/react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import CartCard from '@/components/CartCard';

export default function page() {

  const {cartItems} = useSelector((state:any) => state.cart);
  

  let sum = 0;
  cartItems.forEach((item:any) => {
    sum += parseFloat(item.price);
  });

  return (
    <>
    <div className=''>
    <Heading lineHeight='tall' className='text-slate-700 md:text-5xl text-base/loose font-semibold text-center p-4 '>
            <Highlight   
                query={['Cart']}
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100', color: 'gray.700', lineHeight:'tall',letterSpacing: '6%'}}
                
            >
                Your Cart
            </Highlight>
        </Heading>
        {cartItems.length === 0 ? 
        <div className='text-slate-700 text-center'>Cart is Empty</div>
        :

        <div className='flex flex-col'>
              <div>
              {cartItems.map((item:any,i:any) => (
                <CartCard key={i} product={item}/>
              ))}
              </div>
              <div className='flex flex-col  p-2 m-2 lg:m-6  lg:px-4 bg-blue-100  rounded-md'>
                <div className='flex justify-between'>
                  <p className='text-slate-900 font-semibold  text-xl'>Total</p>
                  <p className='font-bold text-black text-xl'>Rs.{sum}</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <p className='text-slate-600 text-sm'>Inclusive of all Taxes</p>
                  <button className='w-full bg-black text-white p-[4px] md:px-4 md:py-2 rounded-md'>Checkout</button>
                </div>
              </div>
       </div>


     
        }
        </div>
    </>
  )
}
