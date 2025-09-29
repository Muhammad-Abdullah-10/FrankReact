import React from "react";

function BlackButton() {
  return (
    <div className="flex flex-row justify-start items-center w-[80%] mx-auto  sm:w-[100%]  my-[10px]">
      <a
        href="#"
        className="bg-blackButton w-[100%] h-auto font-futuraLight text-white font-bold text-[16px] py-[10px] rounded-[5px]
                        text-center uppercase border-[#2D2D2C] border-[2px] border-solid hover:text-[#2D2D2C] hover:bg-white  hover:font-[600]"
      >
        Manage My Property
      </a>
    </div>
  );
}

export default BlackButton;
