import React from 'react'

function ManagementSupport({ title, steps }) {
  return (
    <div className="wrapper-management 2xl bg-[#F4F2F1] lg:mt-[-5%] lg:py-[50px] ">
      {/* Row 1 : First 2 items */}
      <div className="flex flex-col w-full h-auto md:flex-row 2xl:mb-[20px] ">
        {steps?.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className={`wrapper-content-management w-[90%] mx-auto md:w-[40%] lg:w-[30%] my-[20px] ${
              index === 0 ? "lg:mr-[5%]" : "3xl:ml-[-2%] lg:ml-[0%] lg:mr-auto"
            }`}
          >
            <div className="flex flex-row heading-management-wrapper items-center mb-[10px]">
              <img
                src={item.icon}
                alt={item.title}
                className="object-contain max-h-[50px] max-w-[35px] mr-[20px]"
              />
              <h3 className="font-futuraNormal text-[24px] md:text-[32px] leading-none">
                {item.title}
              </h3>
            </div>
            <p className="para-management font-[600] text-[14px] font-futuraLight leading-[1.3] md:text-[18px]">
              {item.description}
              <svg
                className="inline-block text-secondary hover:translate-x-2 hover:transition-all hover:duration-300"
                width="50"
                height="16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                data-cy="index-service-arrow-1"
              >
                <path d="M49.707 8.707a1 1 0 0 0 0-1.414L43.343.929a1 1 0 1 0-1.414 1.414L47.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM0 9h49V7H0v2Z"></path>
              </svg>
            </p>
          </div>
        ))}
        <div className="wrapper-content-management-empty sm:hidden lg:block lg:min-w-[30%]"></div>
      </div>

      {/* Row 2 : Next 3 items */}
      <div className="flex flex-col w-full lg:mx-auto h-auto md:grid md:auto-rows-auto md:grid-cols-2 lg:flex lg:flex-row lg:mt-[30px] lg:mb-[20px] ">
        {steps?.slice(2, 5).map((item, index) => (
          <div
            key={index}
            className="wrapper-content-management w-[90%] mx-auto md:w-[80%] lg:w-[30%] my-[20px] lg:ml-[2.5%]"
          >
            <div className="flex flex-row heading-management-wrapper items-center mb-[10px]">
              <img
                src={item.icon}
                alt={item.title}
                className="object-contain max-h-[50px] max-w-[35px] mr-[20px]"
              />
              <h3 className="font-futuraNormal text-[24px] md:text-[32px] leading-none">
                {item.title}
              </h3>
            </div>
            <p className="para-management font-[600] text-[16px] font-futuraLight leading-[1.3] md:text-[18px]">
              {item.description}
              <svg
                className="inline-block text-secondary hover:translate-x-2 hover:transition-all hover:duration-300"
                width="50"
                height="16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                data-cy="index-service-arrow-1"
              >
                <path d="M49.707 8.707a1 1 0 0 0 0-1.414L43.343.929a1 1 0 1 0-1.414 1.414L47.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM0 9h49V7H0v2Z"></path>
              </svg>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManagementSupport
