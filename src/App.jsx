import React, { useEffect, useState } from "react";
import "./App.css";
import "./custom.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import LogoSlider from "./components/Sliders/LogoSlider";
import HeroForm from "./components/Hero/HeroForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LeftImageRightContent from "./components/ImagePlusContent/LeftContentRightImage";
import RightContentLeftImage from "./components/ImagePlusContent/RightContentLeftImage";
import HeroSlider from "./components/Hero/HeroSlider";
import homePageData from "../public/homePageData";
import HowItWorks from "./components/Elements/HowItWorks";
import ManagementSupport from "./components/Elements/ManagementSupport";

function App() {
  // console.log(homePageData.dataImageContent);
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);
  const [managementSection ,setManagementSection] = useState({});
  const homeDataContent = homePageData.dataImageContent;

  useEffect(() => {
    setLeftData(homeDataContent.leftSections);
    setRightData(homeDataContent.rightSections);
    setManagementSection(homePageData.managementSection);
  }, [homeDataContent]);

  
  return (
    <>
      <Header />
      <HeroSlider />
      <HeroForm />
      <LogoSlider />
      <LeftImageRightContent
        key={leftData[0]?.id}
        title={leftData[0]?.title}
        text={leftData[0]?.text}
        imgUrl={leftData[0]?.imgUrl}
      />
      <RightContentLeftImage
        key={rightData[0]?.id}
        title={rightData[0]?.title}
        text={rightData[0]?.text}
        imgUrl={rightData[0]?.imgUrl}
      />
      <LeftImageRightContent
        key={leftData[1]?.id}
        title={leftData[1]?.title}
        text={leftData[1]?.text}
        imgUrl={leftData[1]?.imgUrl}
      />
      <ManagementSupport title={managementSection.title} steps={managementSection.steps} />
      <HowItWorks />

      <RightContentLeftImage
        key={rightData[1]?.id}
        title={rightData[1]?.title}
        text={rightData[1]?.text}
        imgUrl={rightData[1]?.imgUrl}
      />
      <RightContentLeftImage
        key={rightData[2]?.id}
        title={rightData[2]?.title}
        text={rightData[2]?.text}
        imgUrl={rightData[2]?.imgUrl}
      />
      <Footer />
    </>
  );
}

export default App;
