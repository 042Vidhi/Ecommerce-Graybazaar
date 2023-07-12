"use client"
import React from 'react';
import {Heading,Highlight} from '@chakra-ui/react'


export default function page() {
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
    
    </div>
    </>
  )
}
