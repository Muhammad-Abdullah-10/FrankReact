import React from 'react'
import Logo from "../../../public/logo_FP-white-ex_px35.svg"

function Footer() {
    const menuItems1 = [
        { key: "owner-app", label: "Owner App", href: "#" },
        { key: "services", label: "Services", href: "#" },
        { key: "pricing", label: "Pricing", href: "#" },
        { key: "gallery", label: "Gallery", href: "#" },
        { key: "about", label: "About Us", href: "#" },
        { key: "estimate", label: "Estimate Revenue", href: "#" },
    ];
    const menuItems2 = [
        { key: "media", label: "Media", href: "#" },
        { key: "blog", label: "Blog", href: "#" },
        { key: "retirement", label: "Retirement Visa UAE", href: "#" },
        { key: "videos", label: "Videos", href: "#" },
        { key: "pricing", label: "Pricing", href: "#" },
        { key: "about", label: "About Us", href: "#" },
        { key: "estimate", label: "Estimate Revenue", href: "#" },
    ];
  return (
    <footer className="footer-wrapper flex flex-col lg:flex-row px-[5%] pt-[5%] pb-[3%] bg-blackButton">
    <div className="footer-col-1 w-full lg:w-2/5 2xl:max-w-4/5 2xl:mx-auto flex flex-col px-[20px] lg:px-[10px]">
        <img src={Logo} alt="" className="object-cover w-full  2xl:max-w-[70%] mb-[20px]" />
        <p className="font-futuraLight text-[16px] xl:text-[20px] text-wrap text-white leading-[1.1] 2xl:max-w-[75%]">
        Frank Porter world-className Airbnb management services, takes the hassle out of renting out your property on Airbnb and similar platforms, so you can sit back, relax and count your dirhams
        </p>
        <h3 className="text-[18px] font-futuraLight xl:text-[30px] font-[500] my-[10px] md:my-[20px] text-white">
        Subscribe
        </h3>
    <div className="flex flex-row justify-between">
      <form className="flex flex-row justify-between w-full 2xl:max-w-3/4" action="">
        <input className="w-[70%] rounded mr-[10px] h-[50px] placeholder:text-gray-600 pl-[20px] focus-within:outline-[#8d7252] focus-within:border-0 placeholder:text-[18px] text-[18px]" type="email" name="email" placeholder="E-mail" id="" />
        <button type="submit" className="bg-secondary w-[30%] h-[50px] font-futuraLight text-white font-bold text-[18px] rounded-[5px]
        text-center uppercase  border-[#2D2D2C] border-[2px] border-solid tracking-wide hover:border-solid hover:border-[1px]
       focus-within:border-white focus-within:text-white  hover:bg-blackButton hover:font-[600]">
        Submit
      </button>
      </form>
    </div>
    <p className="text-[16px] font-futuraLight mt-[10px] mb-[5px] hidden md:block text-white">
      Copyright © 2024 FRANK PORTER VACATION HOMES RENTAL L.L.C.
    </p>
    <p className="text-[16px] font-futuraLight hidden md:block text-white">
      All rights reserved.
    </p>
    </div>
    <div className="footer-col-2 w-full lg:w-[25%] flex flex-col px-[20px] lg:px-[10px] mt-[20px] lg:mt-0"> 
        <h3 className="text-[24px] lg:text-[30px] xl:text-[40px] font-futuraLight text-white underline lg:underline-offset-0 pb-[5px]  lg:no-underline">Contact</h3>
        <a href="#" className="text-[18px] font-futuraLight font-[400] hover:font-[600] text-white mt-[10px]">
        + 971 4 427 8193
        </a>
        <a href="#" className="text-[16px] font-futuraLight font-[400] hover:font-[600] text-white ">
        hello@frankporter.com
        </a>
        <p className="text-[16px] font-futuraLight font-[400] hover:font-[600] text-white my-[10px] lg:my-[30px] ">
        Frank Porter Vacation Homes Rental L.L.C.
        Sheikha Noora Tower, Office 303, Barsha Heights, Dubai, United Arab Emirates
        </p>
    </div>
    <div className="footer-col-2 w-full lg:w-[20%] flex flex-col px-[20px] lg:px-[10px] mt-[20px] lg:mt-0 justify-self-center 2xl:pl-[100px]"> 
        <h3 className="text-[24px] lg:text-[30px] xl:text-[40px] font-futuraLight text-white underline lg:no-underline pb-[5px]">Main</h3>
              {menuItems1.map((item) => (
                <a
                key={item.key}
                href={item.href}
                className="text-[18px] font-futuraLight font-[400] hover:font-[600] text-white capitalize"
                >
                {item.label}
                </a>
            ))}
    </div>
    <div className="footer-col-2 w-full lg:w-[20%] flex flex-col px-[20px] lg:px-[10px] mt-[20px] lg:mt-0"> 
        <h3 className="text-[24px] lg:text-[30px] xl:text-[40px] font-futuraLight text-white underline lg:no-underline pb-[5px]">More about us</h3>
            {menuItems2.map((item) => (
                <a
                key={item.key}
                href={item.href}
                className="text-[18px] font-futuraLight font-[400] hover:font-[600] text-white capitalize"
                >
                {item.label}
                </a>
            ))}
    </div>
    </footer>
  )
}

export default Footer