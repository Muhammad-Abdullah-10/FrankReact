import React from 'react'

function RightContentLeftImage(props) {
  return (
    
  <div className="wrapper-img-left my-[50px]">
    <div className="flex flex-col-reverse lg:flex-row w-full h-auto ">
      <div className="flex flex-row wrapper-img w-[90%] mr-auto lg:w-[40%] 3xl:w-1/2 h-auto border-left-img ">
        <img className="object-cover w-full lg:h-[500px]" src={props.imgUrl} alt="" />
      </div>
      <div className="wrapper-content flex flex-col w-[90%] mx-auto justify-center mt-[20px] 3xl:w-1/2 lg:w-[60%] 2xl:pl-[10%] lg:ml-[5%] md:mb-[30px] md:px-[15px]"> 
        <h3 className="font-futuraNormal text-[34px] md:text-[65px] capitalize leading-none  mb-[10px] md:mb-[20px] ">
          {props.title}
        </h3>
        <p className="font-futuraLight text-[18px]  mb-[20px] md:text-[20px] font-[600] leading-[30px] ">
          {props.text}
        </p>
      </div>
    
    </div>
  </div>

  )
}

export default RightContentLeftImage