"use client"
import React from 'react'
import { Highlight,Heading } from '@chakra-ui/react'
import { color } from 'framer-motion'
import Image from 'next/image'
import Pillowcases from '../../public/PillowCases.jpg'
import candles from '../../public/candles.jpg'
import pottery from '../../public/pottery.jpg'


export default function HeroSection() {
  return (
    <div>
        <div className="hero-name ">
        <Heading lineHeight='tall' className='text-slate-700 md:text-5xl text-base/loose font-semibold text-center p-4 '>
            <Highlight   
                query={['handmade', 'artisians', 'small']}
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100', color: 'gray.700', lineHeight:'tall',letterSpacing: '6%'}}
                
            >
                Buy handmade products from local artisians 
                
                to support small businesses
            </Highlight>
        </Heading>

        </div>
        <div className="hero-images grid grid-cols-1 md:grid-cols-3 md:gap-8 px-2">
            <div className="column ">
                <Image src={Pillowcases} alt="Pillowcases" className='h-full rounded-lg '/>
            </div>
            <div className="column ">
                <div className="buttons flex flex-col justify-center items-center gap-3 border-[1px] border-slate-300 p-4 rounded-lg">
                    <button className="button bg-slate-800 rounded-full w-full py-3">Shop Now</button>
                    <button className="button bg-blue-200 text-slate-500 rounded-full w-full py-3">Explore more</button>
                </div>
                <Image src={pottery} alt="Pillowcases" className='object-cover rounded-lg border-x-8 mt-4 border-slate-100'/>
            </div>
            <div className="column ">
                <Image src={candles} alt="Pillowcases" className='h-full rounded-lg '/>
            </div>
        </div>

    </div>
  )
}
