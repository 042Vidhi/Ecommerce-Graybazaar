"use client"
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import {Input } from '@chakra-ui/react';

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
}
interface PriceState {
  min: number;
  max: number;
}
export default function page() {
  const [products, setProducts] = useState<Product[]>([] as Product[])
   
  const [sort, setSort] = React.useState("0");
  const [price, setPrice] = React.useState<PriceState>({min:0,max:700});
  const [category, setCategory] = React.useState(new Array(7).fill(false));

  const catagories = [
    'Pillowcase',
    'Totebag',
    'Pottery',
    'Jewelry',
    'Painting',
    'GiftBasket',
    'Candles',
];



  // ---------------------------------FETCH----------------------------------------
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<Product[]>('http://localhost:8000/api/products');
        let filteredProducts = response.data;

        // Filter based on selected categories
        if (category.some((selected) => selected)) {
          filteredProducts = filteredProducts.filter((product) => category[catagories.indexOf(product.category)]);
        }

        // Filter based on selected price range
        filteredProducts = filteredProducts.filter((product) => product.price >= price.min && product.price <= price.max);

        // Sort based on the selected sorting option
        if (sort === "1") {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sort === "2") {
          filteredProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, [sort, price, category]);



// ---------------------------------RESET----------------------------------------
const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  setSort(""); // Uncheck the radio buttons and reset to default value ("")
  setPrice({ min: 0, max: 700 });
  setCategory(new Array(7).fill(false));
};


  return (
    <div className='flex'>
      <aside className='hidden md:block md:w-1/5 h-screen sticky top-0 text-slate-800'>
     
      <div className='lg:p-4 lg:px-12 md:p-6 h-screen bg-blue-100 flex flex-col justify-between  border-y-[1px] border-slate-200 '>
        {/* -----------------------Categories filter----------------------------------------- */}
        <p className='text-xl font-medium'>Categories</p>
          {catagories.map((categoryName, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name={categoryName}
                id={categoryName}
                className='mr-2'
                checked={category[index]}
                onChange={(e) => {
                  const newCategoryState = [...category];
                  newCategoryState[index] = e.target.checked;
                  setCategory(newCategoryState);
                }}
              />
              <label htmlFor={categoryName} className='text-xs'>
                {categoryName}
              </label>
            </div>
          ))}



        {/* -----------------------Price filter---------------------------------------------- */}
        <p className='text-xl font-medium'>Price</p>

          <RangeSlider
              value={[price.min, price.max]} // Use 'value' instead of 'defaultValue'
              min={0}
              max={700}
              step={100}
              colorScheme='blue'
              onChange={(newValues) => {
                // 'newValues' is an array of two values, [minValue, maxValue]
                setPrice({ min: newValues[0], max: newValues[1] });
              }}
            >
              <RangeSliderTrack bg='blue.100'>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0}>
                <Input
                  size={"xs"}
                  color={"white"}
                  value={price.min}
                  onChange={(e) => setPrice({ ...price, min: parseInt(e.target.value) })}
                />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={6} index={1}>
                <Input
                  size={"xs"}
                  color='white'
                  value={price.max}
                  onChange={(e) => setPrice({ ...price, max: parseInt(e.target.value) })}
                />
              </RangeSliderThumb>
            </RangeSlider>



        {/* -----------------------Sort filter----------------------------------------------- */} 
        <p className='text-md font-medium'>Sort by</p>
          <span>
            <input
              type="radio"
              name="sort"
              id="sortLowToHigh" // Unique ID for Low to High option
              value="1"
              className='mr-2'
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="sortLowToHigh" className='text-xs'>
              Price: Low to High
            </label>
          </span>
          <span>
            <input
              type="radio"
              name="sort"
              id="sortHighToLow" // Unique ID for High to Low option
              value="2"
              className='mr-2'
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="sortHighToLow" className='text-xs'>
              Price: High to Low
            </label>
          </span>

      
        <button className='bg-blue-500 text-sm text-slate-50 py-[4px] rounded-lg'
        onClick ={handleReset}
        >
          Remove
        </button>
      </div>
      </aside>
      <main className='md:w-4/5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
          {products.map((product) => (
            <ProductCard  key={product.id} product={product} />
          ))}
      </main>
    </div>
  )
}
