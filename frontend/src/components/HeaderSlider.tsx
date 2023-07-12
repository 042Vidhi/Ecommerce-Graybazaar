"use client"
import Pillowcases from '../../public/PillowCases.jpg';
import ToteBags from '../../public/ToteBags.jpg';
import Pottery from '../../public/Pottery.jpg';
import Jewelry from '../../public/Jewelry.jpg';
import Paintings from '../../public/Paintings.jpg';
import GiftBasket from '../../public/GiftBaskets.jpg';
import Candles from '../../public/Candles.jpg';

import Image from 'next/image';
import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './stylesSlider.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeaderSlider() {
    const sliderimages = [
        {
            image: Pillowcases
        },
        {
            image: ToteBags
        },
        {
            image: Pottery    
        },
        {
            image: Jewelry
        },
        {
            image: Paintings
        },
        {
            image: GiftBasket
        },
        {
            image: Candles
        },

    ]
  return (
    <div className='p-2 rounded-full'>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderimages.map((image,i) => (
            <SwiperSlide key={i} className='w-full h-1/2 '>
            <Image className='rounded-lg' src = {image.image} alt="Picture"  />  
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
