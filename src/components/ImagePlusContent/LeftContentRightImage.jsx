import React from 'react'

function LeftImageRightContent({id , title , text , imgUrl}) {
  return (
    <div className="wrapper-img-right my-[50px]" >
        <div className="flex flex-col lg:flex-row w-full h-auto " style={{background :  id == "L1" || id == "L3"   ? '#F4F2F1' : 'white'}}>
            <div  className="wrapper-content flex flex-col w-[90%] mx-auto justify-center 3xl:w-1/2 lg:w-[60%] lg:pl-[5%] lg:mr-[10%] md:mb-[30px] md:px-[15px]">
            <h3 className="font-futuraNormal text-[34px] md:text-[65px] capitalize leading-none  mb-[10px] md:mb-[20px] ">
                {title}
            </h3>
            <p className="font-futuraLight text-[18px]  mb-[20px] md:text-[20px] font-[600] xl:pr-[5%]">
                {text}
            </p>
            </div>
            <div className="flex flex-row wrapper-img w-full ml-auto  3xl:w-1/2 lg:w-[40%]  h-auto border-right-img">
            <img className="object-cover lg:h-[500px] w-full" src={imgUrl} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LeftImageRightContent