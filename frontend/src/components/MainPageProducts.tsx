"use client";
import React from 'react'
import ProductCard from './ProductCard';
import { Heading, Highlight } from "@chakra-ui/react"

export default function MainPageProducts() {
  return (
    <>
    <Heading lineHeight='tall' className='text-slate-600 text-center py-8  text-4xl'>
        <Highlight
            query='spotlight'
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100' ,color: 'gray.600', lineHeight:'tall',letterSpacing: '6%'}}
        >
           Our Spotlight Products
        </Highlight>
    </Heading>
    <div className='grid grid-cols-1 md:grid-cols-4 md:px-12 gap-2 md:gap-6 pb-12'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
    </>
  )
}
