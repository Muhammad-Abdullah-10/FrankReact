import React from 'react'
import './App.css'
import './custom.css'
import LogoSlider from './components/Sliders/LogoSlider'


function App() {
  
  return (
    <>
       <section className="wrapper-form-banner mt-[-15%] md:mt-[-8%] lg:mt-[-8%] bg-white w-full h-auto ">
        <div className="main-container-form-banner lg:container lg:mx-auto rounded p-[20px] w-full md:max-h-[300px] lg:w-[75%]" >
          <div className="wrapper-content">
            <h3 className="text-[35px]  text-center mt-[15px]  md:text-left md:text-[45px] lg:text-[55px] font-futuraNormal lg:px-[25px]">
              Estimate your revenue
            </h3>
            <form className="form-banner p-[15px] lg:my-[20px] my-[10px] flex flex-col md:flex-row  justify-between" action="">
              
              <select className="w-[100%] md:w-[23%] my-[10px] md:my-0 md:mx-auto py-[10px] px-[20px] border-[#333] border-solid border-[2px] rounded" name="area" id="area">
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="Dubai">Dubai</option>
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="Abu Dhabi">Abu Dhabi</option>
              </select>
              
              <select className="w-[100%] md:w-[23%] my-[10px] md:my-0 md:mx-auto py-[10px] px-[20px] border-[#333] border-[2px] rounded" name="bedrooms" id="bedrooms">
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="1 Bedroom">1 Bedroom</option>
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="2 Bedroom">2 Bedroom</option>
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="3 Bedroom">3 Bedroom</option>
              </select>
              <select className="w-[100%] md:w-[23%] my-[10px] md:my-0 md:mx-auto py-[10px] px-[20px] border-[#333] border-[2px] rounded" name="cars" id="cars">
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="volvo">Volvo</option>
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="saab">Saab</option>
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="mercedes">Mercedes</option>
                <option className="font-futuraLight text-[16px] capitalize text-[#333]" value="audi">Audi</option>
              </select>
              <button type="submit" className="bg-blackButton w-full md:w-[23%] my-[10px] md:my-0 md:mx-auto h-auto font-futuraLight text-[#2d2d2d2] font-bold text-[12px] py-[10px] rounded-[5px]
            text-center uppercase text-white  border-[#2D2D2C] border-[2px] border-solid tracking-wide hover:text-white hover:bg-blackButton hover:font-[600]">
              Calculate
            </button>
            </form>
          </div>

        </div>
      </section>
      <LogoSlider />
    </>
    
  )
}

export default App
