"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import { Heading,Highlight } from '@chakra-ui/react'
import WishListCard from '@/components/WishListCard'


export default function page() {
  const {wishListItems} = useSelector((state:any) => state.wishList)

  return (

    <div className=''>
          <Heading lineHeight='tall' className='text-slate-700 md:text-5xl text-base/loose font-semibold text-center p-4 '>
            <Highlight   
                query={['WishList']}
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100', color: 'gray.700', lineHeight:'tall',letterSpacing: '6%'}}
                
            >
                Your WishList
            </Highlight>
        </Heading>
    {wishListItems.length === 0 ?
    <div className=' text-center font-medium text-xl text-slate-600'>WishList is Empty</div>
    :
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {wishListItems.map((product:any) => (
          <WishListCard key={product.id} product={product} />
        ))}
      </div>
    }
    </div>
  )
}
