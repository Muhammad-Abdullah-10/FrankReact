import React, {useEffect, useState} from 'react'
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
import homePageData from '../public/homePageData'


function App() {
  // console.log(homePageData.dataImageContent);
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]); 
  const homeDataContent  = homePageData.dataImageContent;
  useEffect(() => {
    setLeftData(homeDataContent.leftSections);
    setRightData(homeDataContent.rightSections);
  }, []);
  // console.log(leftData);    
  // console.log(rightData); 
  return (
    <>
      <Header />
      <HeroSlider />
      <HeroForm />
      <LogoSlider />
      <LeftImageRightContent
      key={leftData[0].id} title={leftData[0].title} text={leftData[0].text} imgUrl={leftData[0].imgUrl}/>
      <RightContentLeftImage />
       <LeftImageRightContent
      key={leftData[1].id} title={leftData[1].title} text={leftData[1].text} imgUrl={leftData[1].imgUrl}/>
      <Footer />
    </>
    
  )
}

export default App
