import React from 'react'

function LeftImageRightContent(props) {
  console.log(props);
  return (
    <div className="wrapper-img-right my-[50px]">
        <div className="flex flex-col lg:flex-row w-full h-auto ">
            <div className="wrapper-content flex flex-col w-[90%] mx-auto justify-center lg:w-[60%] lg:pl-[5%] lg:mr-[10%] md:mb-[30px] md:px-[15px]">
            <h3 className="font-futuraNormal text-[34px] md:text-[65px] capitalize leading-none  mb-[10px] md:mb-[20px] ">
                {props.title}
            </h3>
            <p className="font-futuraLight text-[18px]  mb-[20px] md:text-[20px] font-[600] xl:pr-[5%]">
                {props.text}
            </p>
            </div>
            <div className="flex flex-row wrapper-img w-[90%] ml-auto lg:w-[40%]  h-auto border-right-img ">
            <img className="object-cover lg:h-[500px]" src={props.imgUrl} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LeftImageRightContent