"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Heading, Highlight } from "@chakra-ui/react";
import axios from 'axios';


interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function MainPageProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<Product[]>('http://localhost:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Heading lineHeight='tall' className='text-slate-600 text-center py-8 text-4xl'>
        <Highlight
          query='spotlight'
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.100', color: 'gray.600', lineHeight: 'tall', letterSpacing: '6%' }}
        >
          Our Spotlight Products
        </Highlight>
      </Heading>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-12 gap-2 lg:gap-6 pb-12'>
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
