import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/Hero/HeroSlider";
import HeroForm from "../../components/Hero/HeroForm";
import LogoSlider from "../../components/Sliders/LogoSlider";
import LeftImageRightContent from "../../components/ImagePlusContent/LeftContentRightImage";
import RightContentLeftImage from "../../components/ImagePlusContent/RightContentLeftImage";
import homePageData from "../../../public/homePageData";
import HowItWorks from "../../components/Elements/HowItWorks";
import ManagementSupport from "../../components/Elements/ManagementSupport";

function Home() {
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);
  const [managementSection, setManagementSection] = useState({});
  const homeDataContent = homePageData.dataImageContent;

  useEffect(() => {
    setLeftData(homeDataContent.leftSections);
    setRightData(homeDataContent.rightSections);
    setManagementSection(homePageData.managementSection);
  }, [homeDataContent]);

  return (
    <>
      <HeroSlider />
      <HeroForm />
      <LogoSlider />
      <LeftImageRightContent
        key={leftData[0]?.id}
        id={leftData[0]?.id}
        title={leftData[0]?.title}
        text={leftData[0]?.text}
        imgUrl={leftData[0]?.imgUrl}
      />
      <RightContentLeftImage
        key={rightData[0]?.id}
        id={rightData[0]?.id}
        title={rightData[0]?.title}
        text={rightData[0]?.text}
        imgUrl={rightData[0]?.imgUrl}
      />
      <LeftImageRightContent
        key={leftData[1]?.id}
        id={leftData[1]?.id}
        title={leftData[1]?.title}
        text={leftData[1]?.text}
        imgUrl={leftData[1]?.imgUrl}
      />
      <ManagementSupport
        title={managementSection.title}
        steps={managementSection.steps}
      />
      <HowItWorks />

      <LeftImageRightContent
        key={leftData[2]?.id}
        id={leftData[2]?.id}
        title={leftData[2]?.title}
        text={leftData[2]?.text}
        imgUrl={leftData[2]?.imgUrl}
      />
      <RightContentLeftImage
        key={rightData[1]?.id}
        id={rightData[1]?.id}
        title={rightData[1]?.title}
        text={rightData[1]?.text}
        imgUrl={rightData[1]?.imgUrl}
      />
    </>
  );
}

export default Home;
