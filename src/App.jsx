import React from 'react'
import './App.css'
import './custom.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'swiper/css';
import LogoSlider from './components/Sliders/LogoSlider'
import HeroForm from './components/Hero/HeroForm'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import LeftImageRightContent from './components/ImagePlusContent/LeftContentRightImage';
import RightContentLeftImage from './components/ImagePlusContent/RightContentLeftImage';
import HeroSlider from './components/Hero/HeroSlider';



function App() {
  
  return (
    <>
      <Header />
      <HeroSlider />
      <HeroForm />
      <LogoSlider />
      <LeftImageRightContent />
      <RightContentLeftImage />
      <Footer />
    </>
    
  )
}

export default App
