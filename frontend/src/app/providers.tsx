// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <Provider store={store}>
      <ChakraProvider>
        {children}
      </ChakraProvider>
      </Provider>
    </CacheProvider>
  )
}