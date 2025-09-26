import React from 'react'

function LeftImageRightContent() {
  return (
    <div className="wrapper-img-right my-[50px]">
        <div className="flex flex-col lg:flex-row w-full h-auto ">
            <div className="wrapper-content flex flex-col w-[90%] mx-auto justify-center lg:w-[60%] lg:pl-[5%] lg:mr-[10%] md:mb-[30px] md:px-[15px]">
            <h3 className="font-futuraNormal text-[34px] md:text-[65px] capitalize leading-none  mb-[10px] md:mb-[20px] ">
                About PrimoLux
            </h3>
            <p className="font-futuraLight text-[18px]  mb-[20px] md:text-[20px] font-[600] xl:pr-[5%]">
                At Primolux, we specialize in providing comprehensive property management services designed to maximize your investment returns. Whether you're a homeowner or investor, our team of experts handles every aspect of short-term rentals, from guest bookings and marketing to property maintenance and cleaning. We aim to offer a seamless experience for both property owners and guests, ensuring top-notch service and hassle-free management. With a focus on enhancing property visibility and optimizing occupancy rates, Primolux is your trusted partner in elevating the potential of your real estate assets.
            </p>
            </div>
            <div className="flex flex-row wrapper-img w-[90%] ml-auto lg:w-[40%]  h-auto border-right-img ">
            <img className="object-cover lg:h-[500px]" src="../src/assets/img/IMG_5197.jpeg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default LeftImageRightContent