import React from 'react'
import arabianBusiness from "../../assets/img/news-logo/arabianBusiness.svg";
import forbes from "../../assets/img/news-logo/forbesMiddleEast.svg";
import gulfNews from "../../assets/img/news-logo/gulfNews.svg";
import khaleejTimes from "../../assets/img/news-logo/khaleejTimes.svg";
import theNational from "../../assets/img/news-logo/theNational.svg";
import zawya from "../../assets/img/news-logo/zawya.svg";
import dubaiOne from "../../assets/img/news-logo/dubaiOne.svg";

function LogoSlider() {
    const logos = [
        { src: arabianBusiness, alt: "Arabian Business" },
        { src: forbes, alt: "Forbes Middle East" },
        { src: gulfNews, alt: "Gulf News" },
        { src: khaleejTimes, alt: "Khaleej Times" },
        { src: theNational, alt: "The National" },
        { src: arabianBusiness, alt: "Arabian Business" },
        { src: forbes, alt: "Forbes Middle East" },
        { src: zawya, alt: "Zawya" },
        { src: dubaiOne, alt: "Dubai One" },
        { src: theNational, alt: "The National" },
    ];
  return (
    <div className="wrapper-logo-scroll flex flex-row h-auto w-full my-[25px] lg:my-[75px]">
        <div className="scroll" style={{ "--t": "15s" }}>
              <div>
                {logos.map((logo, i) => (
                  <img key={i} src={logo.src} alt={logo.alt} />
                ))}
              </div>
        </div>
      </div>
  )
}

export default LogoSlider