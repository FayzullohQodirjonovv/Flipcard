import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/components/header'
import Navbar from './assets/components/navbar'
import Showcase from './assets/components/showcase'
import Cards from './assets/components/cards'
import Banner from './assets/components/banner'
import Swiper from './assets/components/swiper'
import Logoko from './assets/components/logoko'
import Coinatin from './assets/components/coinatin'
import Footer from './assets/components/footer'

function App() {

  return (
    <>
    <Header/>
    <Navbar/>
    <Showcase/>
    <Cards/>
    <Banner/>
    <Swiper/>
    <Logoko/>
    <Coinatin/>
    <Footer/>
    </>
  )
}

export default App
