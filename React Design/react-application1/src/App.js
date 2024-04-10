import React from 'react'

import { Brand, Cta, Navbar } from './components/index'
import { Blog, Featuress, Footer, Header, Possibility, WhatGPT3 } from './containers/index'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Featuress />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
