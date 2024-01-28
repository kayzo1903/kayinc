import AboutUs from '@/components/AboutUS/aboutUs'
import Herosection from '@/components/Herosection/AboutHerosection'
import WhyUs from '@/components/WhyUs/WhyUs'
import React from 'react'

export default function Aboutpage(){
  return (
    <main className='w-full min-h-screen'>
        <Herosection />
        <WhyUs />
        <AboutUs />
    </main>
  )
}