"use client"
import React from 'react';
import Image from 'next/image';
import candles from '../../../../public/candles.jpg';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/cartSlice';
import { addToWishList } from '@/redux/wishListSlice';
import axios from 'axios';
import { useEffect } from 'react';

type Params ={
  params :{ id: string}
 
}

export default function Page({params :{id}}: Params) {

  const [product,setProduct] = React.useState<any>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:8000/api/products/${id}`);
      console.log(res.data);
      setProduct(res.data);
    }
    fetchProduct();
  }, [id]);



  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col md:flex-row justify-center h-1/2 p-2 bg-blue-100 m-4 rounded-lg">
      <Image src={candles} alt="Logo" className="rounded-lg md:w-1/2" />
      <div className="productcard-info flex flex-col w-full px-2 justify-end lg:gap-4">
        <p className="text-slate-800 font-medium text-xl">{product?.name}</p>
        <p className="text-blue-900 font-medium text-xl">{product?.price}</p>
        <p className="text-slate-600 font-semibold text-sm">Details:</p>
        <p className="text-slate-500 text-base">
         {product?.description}
        </p>
        <div className="productcard-button w-full h-10 gap-2 rounded-md flex justify-center items-center">
          <button className="button bg-blue-300 rounded-lg w-1/2 py-2"
          onClick={() => dispatch(addToWishList(product))}
          >Favourite</button>
          <button
            className="button bg-slate-800 rounded-lg w-1/2 py-2"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
