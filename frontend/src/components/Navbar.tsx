import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import Link from 'next/link';

function Navbar() {
  return (
    <>
        <div className="navbar w-full p-2 md:px-12 bg-blue-200 flex justify-between items-center">
            <div className="logo text-3xl ">
                <Link href="/">
                <Image src={Logo} alt="Logo" className=' w-36'/>
                </Link>
            </div>
            <div className="navbar-icons flex gap-4 items-center"> 
                <div className= "searchbar hidden md:block bg-slate-200 rounded-md p-2 border-white focus:outline-none">
                    <input type="text" placeholder="Search" className='text-black focus:outline-none bg-slate-200'/>
                    <SearchOutlinedIcon className='text-slate-500'/>
                    
                </div>
                <div className="navbar-icon md:hidden"><SearchOutlinedIcon/></div>
                <div className="navbar-icon cursor-pointer">
                    <Link href="/wishlist">
                    <FavoriteBorderOutlinedIcon/>
                    </Link>
                    </div>
                <div className="navbar-icon cursor-pointer">
                    <Link   href="/cart">
                    <LocalMallOutlinedIcon/>
                    </Link>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Navbar