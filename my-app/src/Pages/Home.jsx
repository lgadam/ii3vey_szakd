import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import GuideMail from '../Components/GuideMail'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Slider from '../Components/Slider'

function Home() {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <GuideMail/>
    </div>
  )
}

export default Home
