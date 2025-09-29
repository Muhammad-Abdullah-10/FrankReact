import React from "react";

function SliderButton({text , link ,style}) {
  const baseClasses =
    "w-full h-auto font-futuraLight text-base font-bold hover:font-bold py-2.5 rounded-5px text-center uppercase border-2 border-solid transition-colors duration-300 mx-[10px]";

  const styleClasses =
    style === "blackButton"
      ? "bg-blackButton text-white border-blackButton hover:bg-white hover:text-blackButton"
      : "bg-white text-blackButton border-blackButton hover:bg-blackButton hover:text-white";
    return (
    <div className="flex flex-row justify-start items-center w-[80%] mx-auto  sm:w-[100%]  my-[10px]">
      <a
        href={link}
        className={`${baseClasses} ${styleClasses}`}
      >
        {text}
      </a>
    </div>
  );
}

export default SliderButton;
