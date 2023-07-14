import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import Link from 'next/link';
import { useSelector } from 'react-redux';


function Navbar() {
    
    const cart = useSelector((state:any) => state.cart);
    const wishList = useSelector((state:any) => state.wishList);
    
  return (
    <>
        <div className="navbar w-full p-2 md:px-12 bg-blue-200 flex justify-between items-center">
            <div className="logo text-3xl ">
                <Link href="/">
                <Image src={Logo} alt="Logo" className=' w-36'/>
                </Link>
            </div>
            <div className="navbar-icons flex md:gap-4 items-center"> 
                <div className= "searchbar hidden md:block bg-slate-200 rounded-md p-2 border-white focus:outline-none">
                    <input type="text" placeholder="Search" className='text-black focus:outline-none bg-slate-200'/>
                    <SearchOutlinedIcon className='text-slate-500'/>
                </div>
                <div className="navbar-icon md:hidden"><SearchOutlinedIcon/></div>
                <div className="relative navbar-icon cursor-pointer md:p-2 p-[1px]">
                    <Link href="/wishlist">
                    <span className='absolute top-0 right-0 bg-rose-500 rounded-full h-4 w-4 p-[1px] text-xs text-center'>
                    {wishList.wishListItems.length}
                    </span>
                    <FavoriteBorderOutlinedIcon/>
                    </Link>
                    </div>
                <div className="relative navbar-icon cursor-pointer md:p-2 p-[1px]">
                    <Link   href="/cart">
                    <LocalMallOutlinedIcon />
                    <span className='absolute top-0 right-0 bg-rose-500 rounded-full h-4 w-4 p-[1px] text-xs text-center'>
                        {cart.cartItems.length}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Navbar