import React from 'react'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import GuideMail from '../Components/GuideMail'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <GuideMail/>
      <Footer/>
    </div>
  )
}

export default Home
