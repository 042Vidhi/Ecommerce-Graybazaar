"use client"
import React from 'react'


export default function Sidebar() {
  const catagories = [
    'Pillowcases',
    'Tote Bags',
    'Pottery',
    'Jewelry',
    'Paintings',
    'GiftBasket',
    'Candles',
];
const prices = [
  '0-100',
  '100-200',
  '200-300',
  '300-400',
  '400-500',
  '500-600',
  '600-700',
];

  return (
    <div className='text-slate-700 h-screen bg-slate-100 '>
      <div className='lg:p-4 lg:px-12 h-screen bg-blue-100 flex flex-col justify-between  border-y-[1px] border-slate-200 '>
        {/* -----------------------Categories filter----------------------------------------- */}
        <p className='text-xl font-medium'>Categories</p>
          {catagories.map((catagory) => (
            <div key={catagory}>
              <input type="checkbox" name="categories" id="categories" className='mr-2'/>
              <label htmlFor="categories" className='text-xs'>{catagory}</label>
            </div>
          ))}


        {/* -----------------------Price filter---------------------------------------------- */}
        <p className='text-xl font-medium'>Price</p>
          {prices.map((price) => (
            <div key={price}>
              <input type="checkbox" name="price" id="price" className='mr-2'/>
              <label htmlFor="price" className='text-xs'>{price}</label>
            </div>
          ))}



        {/* -----------------------Sort filter----------------------------------------------- */} 
        <p className='text-md font-medium'>Sort by</p>
            <span>
            <input type="checkbox" name="sort" id="sort" className='mr-2'/>
            <label htmlFor="sort" className='text-xs'>Price: Low to High</label>
            </span>
            <span>
            <input type="checkbox" name="sort" id="sort" className='mr-2'/>
            <label htmlFor="sort" className='text-xs'>Price: High to Low</label>
            </span>


        

        <button className='bg-blue-500 text-sm text-slate-50 py-[4px] rounded-lg'>
          Apply 
        </button>
        <button className='bg-blue-500 text-sm text-slate-50 py-[4px] rounded-lg'>
          Remove
        </button>
      </div>
          
        

    </div>
  )
}
