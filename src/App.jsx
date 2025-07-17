import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import { imageGallery, newArrivals, blindsImages, wallpaperImages } from "./util/productImages";

function App() {
  return (
    <>
      <Header />
      <Product heading="Popular" images={imageGallery}/>
      <Product heading="New Arrivals" images={newArrivals}/>
      <Product heading="Window Blinds" images={blindsImages}/>
      <Product heading="Wallpapers" images={wallpaperImages}/>
    </>
  )
}

export default App
