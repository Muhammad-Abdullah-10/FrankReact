import React, { useState } from 'react'
import '../../custom.css'
import Logo from "../../../public/frankporter_logo_black.svg"

function Header() {
    const menuItems = [
        { key: "overview", label: "Overview", href: "index.html" },
        { key: "services", label: "Services", href: "booking_services.html" },
        { key: "book", label: "Book Now", href: "booking_dubai.html" },
        { key: "gallery", label: "Gallery", href: "gallery.html" },
        { key: "about", label: "About Us", href: "about-us.html" },
        { key: "estimate", label: "Estimate Revenue", href: "estimate.html" },
        { key: "contact", label: "Contact", href: "booking_contact.html" },
    ];
    const [isMobileMenuOpen , setMobileMenuOpen] = useState(false);

    function handleMobileMenu(e){
        setMobileMenuOpen(()=>  !isMobileMenuOpen);
    }
  return (
        // <!-- header -->
    <header className="header-wrapper flex flex-col bg-white lg:border-b-[#a7a7a7] lg:border-b-[1px] sm:px-0  lg:px-[40px] xl:px-[40px] lg:sticky">
    {/* <!-- Top Bar --> */}
    <div className="wrapper-top-bar w-full flex flex-row justify-evenly sm:justify-between lg:pt-[20px] h-auto py-[10px] sm:bg-white bg-secondary">
    <div className="flex flex-row justify-evenly items-center">
        <a className="px-2 lg:px-3 wrapper-mail text-[16px] text-white sm:text-secondary text-xs xl:text-[14px] font-normal lowercase hover:text-black font-lato" href="#">
        hello@frankporter.com
        </a>
        <a className="px-2 lg:px-3 wrapper-mail text-[16px] text-white sm:text-secondary text-xs xl:text-[14px] font-normal lowercase hover:text-black font-lato" href="#">
        +971 4 427 8193
        </a>
        <a className="wrapper-insta text-[16px] text-white sm:text-secondary text-xs xl:text-sm font-[500] lowercase hover:text-black font-lato" href="#">
        <i className="px-2 lg:px-3 fa fa-instagram text-sm xl:text-sm  font-normal" aria-hidden="true"></i>      
        </a>
        <a className="px-2 lg:px-3 wrapper-lang text-[16px] text-white sm:text-secondary text-xs xl:text-[14px] font-bold uppercase hover:text-black font-lato hidden sm:block" href="#">
        AR
        </a>
    </div>
    <div className="flex flex-row justify-evenly items-center">
        <a className="px-2 lg:px-3 xl:px-5 wrapper-mail text-[16px] text-white sm:text-secondary text-xs xl:text-[14px] font-normal uppercase hover:text-black font-lato hidden sm:block " href="#">
        Book Now 
        </a>
        <a className="px-2 lg:px-3 xl:px-5 wrapper-mail flex text-[16px] text-white sm:text-secondary text-xs xl:text-[14px] font-normal uppercase hover:text-black font-lato" href="#">
        <i className="fa fa-user-circle pr-[5px]" aria-hidden="true"></i> 
        <span className=" hidden sm:block ">
            Login
        </span>
        </a>
    </div>
    </div>
    {/* <!-- Top Bar -->
    <!-- Main Menu --> */}
    <div className="main-wrapper w-full flex flex-row justify-between items-center p-[10px] lg:py-[15px]">
    <a href="index.html" className="logo-wrapper w-auto sm:w-1/5 lg:px-[20px]">
        <img className="object-cover sm:w-100 xs:max-w-[180px] min-w-[180px] " src={Logo} alt="" />
    </a>
    <a href="#" className="lang-wrapper p-[2px] text-xs text-secondary border-[0.5px] rounded-[5px] text-center font-lato font-bold border-[#8d7252] block sm:hidden w-auto mr-[10px]">
        AR
    </a>
    <a className="three col block lg:hidden" >
        <div className="hamburger-wrapper" id="hamburger-bars" onClick={handleMobileMenu}>
        <span className="line w-[30px] h-[3px] sm:w-[50px]"></span>
        <span className="line w-[30px] h-[3px] sm:w-[50px]"></span>
        <span className="line w-[30px] h-[3px] sm:w-[50px]"></span>
        </div>
    </a>
    <div className="menu-wrapper flex flex-row justify-between items-center lg:w-auto pr-0 lg:pr-3 xs:hidden lg:block">
        {menuItems.map((data) => {
            return  <a key={data.key} className="font-lato font-normal uppercase text-xs lg:text-xs xl:text-sm lg:px-2 xl:px-4" href={data.href}>{data.label}</a>
        })}
    </div>
    </div>
    
    {/* <!-- Main Menu -->
    <!-- Mobile Menu --> */}
    <div
  className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-in-out ${
    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
  }`}
>
  {/* Backdrop */}
  <div
    onClick={handleMobileMenu}
    className="absolute inset-0 bg-black bg-opacity-50"
  ></div>

  {/* Menu Content */}
  <div className="relative w-[100%] md:w-[30%] h-full bg-white flex flex-col shadow-lg">
    {/* Top Section */}
    <div className="flex flex-row w-full justify-between items-center p-3 bg-secondary">
      <div className="flex flex-col items-start">
        <a href="#" className="text-sm text-white py-[2px] font-lato">
          hello@frankporter.com
        </a>
        <div className="flex flex-row items-center py-[2px]">
          <a href="#" className="text-sm text-white px-[5px] font-lato">
            +921 4 442 4487
          </a>
          <a href="#" className="text-sm text-white px-[10px] font-lato">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <button onClick={handleMobileMenu} className="text-[20px] text-white">
        <i className="fa fa-window-close" aria-hidden="true"></i>
      </button>
    </div>

    {/* Menu Items */}
    <div className="flex flex-col py-[20px]">
      {menuItems.map((data) => (
        <a
          key={data.key}
          className="w-full py-[10px] pl-[20px] font-lato font-normal uppercase text-sm hover:bg-gray-100"
          href={data.href}
        >
          {data.label}
        </a>
      ))}
    </div>

    {/* Login Button */}
    <div className="flex justify-start w-full pl-[20px] my-[10px]">
      <a
        href="#"
        className="bg-blackButton min-w-[200px] max-w-[250px] font-lato text-white font-bold text-[12px] py-[10px] rounded-[5px]
        text-center uppercase border-[#2D2D2C] border-[2px] hover:text-[#2D2D2C] hover:bg-white"
      >
        Log in <i className="fa fa-user pl-[10px] text-xs" aria-hidden="true"></i>
      </a>
    </div>

    {/* Book Now Button */}
    <div className="flex justify-start w-full pl-[20px] my-[10px]">
      <a
        href="booking_services.html"
        className="bg-white min-w-[200px] max-w-[250px] font-lato text-[#2d2d2d] font-bold text-[12px] py-[10px] rounded-[5px]
        text-center uppercase border-[#2D2D2C] border-[2px] hover:text-white hover:bg-blackButton"
      >
        Book Now
      </a>
    </div>
  </div>
</div>

    {/* <!-- Mobile Menu --> */}
    </header>
    // <!-- header -->
  )
}

export default Header