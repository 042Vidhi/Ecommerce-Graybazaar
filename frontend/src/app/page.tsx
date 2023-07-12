import Footer from '@/components/Footer'
import HeaderSlider from '@/components/HeaderSlider'
import HeroSection from '@/components/HeroSection'
import MainPageProducts from '@/components/MainPageProducts'
import CatagoriesBar from '@/components/CatagoriesBar'


export default function Home() {
  return (
    <>
    <CatagoriesBar/>
    <HeroSection  />
    <MainPageProducts />
    <HeaderSlider />
    
    </>
  )
}
