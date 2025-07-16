import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import Wallpapers from './components/Wallpapers'
import Blinds from './components/Blinds'

function App() {
  return (
    <>
      <Header />
      <Product />
      <Wallpapers />
      <Blinds />
    </>
  )
}

export default App
