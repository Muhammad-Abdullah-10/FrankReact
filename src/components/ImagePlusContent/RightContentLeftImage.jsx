import React from 'react'

function RightContentLeftImage() {
  return (
    
  <div className="wrapper-img-left my-[50px]">
    <div className="flex flex-col-reverse lg:flex-row w-full h-auto ">
      <div className="flex flex-row wrapper-img w-[90%] mr-auto lg:w-[40%] h-auto border-left-img ">
        <img className="object-cover lg:h-[500px]" src="../src/assets/img/apartment-dining-room.jpeg" alt="" />
      </div>
      <div className="wrapper-content flex flex-col w-[90%] mx-auto justify-center mt-[20px] lg:w-[60%] 2xl:pl-[10%] lg:ml-[5%] md:mb-[30px] md:px-[15px]">
        <h3 className="font-futuraNormal text-[34px] md:text-[65px] capitalize leading-none  mb-[10px] md:mb-[20px] ">
          Short Let Management
        </h3>
        <p className="font-futuraLight text-[18px]  mb-[20px] md:text-[20px] font-[600] leading-[30px] ">
          At Primolux, we handle every detail of your short-term rental, from guest bookings and marketing to maintenance and cleaning. Maximize your property’s earning potential with our seamless, hassle-free management services tailored to meet your needs.
        </p>
      </div>
    
    </div>
  </div>

  )
}

export default RightContentLeftImage