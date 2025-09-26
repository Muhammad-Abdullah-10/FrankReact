import React from 'react'
import './App.css'
import './custom.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import LogoSlider from './components/Sliders/LogoSlider'
import HeroForm from './components/Hero/HeroForm'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <>
      <Header />
      <HeroForm />
      <LogoSlider />
      <Footer />
    </>
    
  )
}

export default App
