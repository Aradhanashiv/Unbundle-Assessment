import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/navbar'
import Results from './components/Results'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Results/>
    <FAQ/>
    </>
  )
}

export default App