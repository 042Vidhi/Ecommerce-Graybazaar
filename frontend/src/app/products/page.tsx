"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import ProductCard from '@/components/ProductCard'
import Sidebar from '@/components/Sidebar'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
}
export default function page() {
  const [products, setProducts] = useState<Product[]>([] as Product[])
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<Product[]>('http://localhost:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts()
  }, [])
  return (
    <div className='flex'>
      <aside className='hidden md:block md:w-1/5 h-screen sticky top-0 '>
        <Sidebar />
      </aside>
      <main className='md:w-4/5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
          {products.map((product) => (
            <ProductCard  key={product.id} product={product} />
          ))}
      </main>
    </div>
  )
}
