import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function HeroSlider() {
  return (
    <div className="wrapper-banner-home">
       
      <div className="swiper homeBanner">
        <div className="swiper-wrapper">
        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="wrapper-slide" style={{background: "url('../src/assets/img/FrankPorter_main_baner_1.jpeg')", backgroundSize: "cover"}}>
              <div className="slide-data">
                  <h2 className="heading-wrapper font-futuraNormal">Airbnb
                    Management Dubai</h2>
                    <h3 className="desc-wrapper">
                      Premier property management for short-term rentals across Dubai
                    </h3>
                    <div className="wrapper-button flex flex-col sm:flex-row  max-w-[100%] md:max-w-[80%] md:mx-auto lg:mx-0  lg:max-w-[50%] md:mt-[20px]">
                      <div className="flex flex-row justify-start items-center w-[80%] mx-auto  sm:w-[100%]  my-[10px]">
                        <a href="#" className="bg-blackButton w-[100%] h-auto font-futuraLight text-white font-bold text-[16px] py-[10px] rounded-[5px]
                        text-center uppercase border-[#2D2D2C] border-[2px] border-solid hover:text-[#2D2D2C] hover:bg-white  hover:font-[600]">
                          Manage My Property
                        </a>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[80%] mx-auto pl-[0px]  sm:w-[100%] sm:pl-[20px] my-[10px]">
                        <a href="#" className="bg-white w-[100%] h-auto font-futuraLight text-[#2d2d2d2] font-bold text-[16px] py-[10px] rounded-[5px]
                        text-center uppercase border-[#2D2D2C] border-[2px] border-solid hover:text-white hover:bg-blackButton hover:font-[600] ">
                          Book Now
                        </a>
                      </div>
                    </div>
              </div>
            </div>
          </SwiperSlide>
          
          
          <SwiperSlide className="swiper-slide">
            <div className="wrapper-slide" style={{background: "url('../src/assets/img/FrankPorter_main_baner_2.jpeg')", backgroundSize: "cover"}}>
              <div className="slide-data">
                  <h2 className="heading-wrapper font-futuraNormal">Airbnb
                    Management Dubai</h2>
                    <h3 className="desc-wrapper">
                      Premier property management for short-term rentals across Dubai
                    </h3>
                    <div className="wrapper-button flex flex-col sm:flex-row  max-w-[100%] md:max-w-[80%] md:mx-auto lg:mx-0  lg:max-w-[50%] md:mt-[20px]">
                      <div className="flex flex-row justify-start items-center w-[80%] mx-auto  sm:w-[100%]  my-[10px]">
                        <a href="#" className="bg-blackButton w-[100%] h-auto font-futuraLight text-white font-bold text-[16px] py-[10px] rounded-[5px]
                        text-center uppercase border-[#2D2D2C] border-[2px] border-solid hover:text-[#2D2D2C] hover:bg-white  hover:font-[600]">
                          Manage My Property
                        </a>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[80%] mx-auto pl-[0px]  sm:w-[100%] sm:pl-[20px] my-[10px]">
                        <a href="#" className="bg-white w-[100%] h-auto font-futuraLight text-[#2d2d2d2] font-bold text-[16px] py-[10px] rounded-[5px]
                        text-center uppercase border-[#2D2D2C] border-[2px] border-solid hover:text-white hover:bg-blackButton hover:font-[600] ">
                          Book Now
                        </a>
                      </div>
                    </div>
              </div>
            </div>
          </SwiperSlide>
          
          
          <SwiperSlide className="swiper-slide">
            <div className="wrapper-slide" style={{background: "url('../src/assets/img/FrankPorter_main_baner_3.jpeg')", backgroundSize: "cover"}}>
              <div className="slide-data">
                  <h2 className="heading-wrapper font-futuraNormal">Airbnb
                    Management Dubai</h2>
                    <h3 className="desc-wrapper">
                      Premier property management for short-term rentals across Dubai
                    </h3>
                    <div className="wrapper-button flex flex-col sm:flex-row  max-w-[100%] md:max-w-[80%] md:mx-auto lg:mx-0  lg:max-w-[50%] md:mt-[20px]">
                      <div className="flex flex-row justify-start items-center w-[80%] mx-auto  sm:w-[100%]  my-[10px]">
                        <a href="#" className="bg-blackButton w-[100%] h-auto font-futuraLight text-white font-bold text-[16px] py-[10px] rounded-[5px]
                        text-center uppercase border-[#2D2D2C] border-[2px] border-solid hover:text-[#2D2D2C] hover:bg-white  hover:font-[600]">
                          Manage My Property
                        </a>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[80%] mx-auto pl-[0px]  sm:w-[100%] sm:pl-[20px] my-[10px]">
                        <a href="#" className="bg-white w-[100%] h-auto font-futuraLight text-[#2d2d2d2] font-bold text-[16px] py-[10px] rounded-[5px]
                        text-center uppercase border-[#2D2D2C] border-[2px] border-solid hover:text-white hover:bg-blackButton hover:font-[600] ">
                          Book Now
                        </a>
                      </div>
                    </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>

  )
}

export default HeroSlider