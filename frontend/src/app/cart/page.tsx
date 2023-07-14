"use client"
import React from 'react';
import {Heading,Highlight} from '@chakra-ui/react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/hook';
import { removeFromCart } from '@/redux/cartSlice';

export default function page() {

  const {cartItems} = useSelector((state:any) => state.cart);
  const dispatch = useAppDispatch();


  return (
    <>
    <div className='h-screen'>
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
    <table className="table-auto w-full ">
      <thead>
        <tr >
          <th className="py-2 text-slate-700 border-[1px] border-slate-400">Product</th>
          <th className="py-2 text-slate-700 border-[1px] border-slate-400">Price</th>
          <th className="py-2 text-slate-700 border-[1px] border-slate-400">Remove</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        
          {cartItems.map((item:any,i:any) => (
            <tr key={i}>
              <td className='text-slate-600 py-2' >{item.id}:{item.name}</td>
              <td className='text-slate-600 py-2'>{item.price}</td>
              <td className='text-slate-600 py-2'><DeleteIcon className='cursor-pointer'
              onClick={()=>dispatch(removeFromCart({id:item.id}))}
              
              /></td>
            </tr>
          ))}
      
      </tbody>
    </table>
        }
    </div>
    </>
  )
}
