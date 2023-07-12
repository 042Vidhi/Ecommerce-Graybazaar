"use client"
import React from 'react'
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Footer() {
  return (
    <div className='h-1/3 bg-slate-300'>
        <div className="footer flex flex-col text-slate-600 justify-between items-center p-4">
            
                <Image src={Logo} alt="Logo" className=' w-48'/>
                
                <p className='font-medium text-xl pb-4'>Where creativity meets craftmanship</p>
                 <div className=" flex flex-col text-sm items-center">
                <p>Made with 
                    <FavoriteIcon className='text-red-500'/>
                </p>
                <p>Copyright @2023</p>
            </div>
            </div>
    </div>
  )
}
