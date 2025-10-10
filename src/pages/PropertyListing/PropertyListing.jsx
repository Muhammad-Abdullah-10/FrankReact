import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PropertyListingGrid from "../../components/Elements/PropertyListingGrid";

function PropertyListing() {
  return (
    <>
      <form className="wrapper-form-dubai flex flex-wrap justify-center w-[90%] lg:w-full  lg:flex-rowxl:px-5  mx-auto my-5 bg-[#f3f3f3] px-2.5 py-5 rounded">
        <div className="my-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <select
            className="capitalize w-full md:w-[90%] text-[16px] font-[600] font-futuraLight"
            name="city"
            id="city"
          >
            <option
              className="capitalize text-[15px] font-[600] px-[10px] py-[5px] w-full mx-auto"
              value="dubai"
            >
              dubai
            </option>
            <option
              className="capitalize text-[15px] font-[600] px-[10px] py-[5px]"
              value="abu-dhabi"
            >
              Abu Dhabi
            </option>
          </select>
        </div>
        <div className="my-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/6 relative">
          <select
            className="capitalize w-full md:w-[90%] text-[16px] font-[600] font-futuraLight"
            name="guest"
            id="guest"
          >
            <option
              defaultValue=""
              disabled
              hidden
              className="capitalize text-[15px] font-[600] px-[10px] py-[5px] w-full mx-auto border-b-[3px]"
            >
              Number of Guests
            </option>
            <option
              className="h-[30px] capitalize text-[15px] font-[600]  w-full mx-auto"
              value="guest-1"
            >
              Guest 1
            </option>
            <option
              className="h-[30px] capitalize text-[15px] font-[600] "
              value="guest-2"
            >
              Guest 2
            </option>
            <option
              className="h-[30px] capitalize text-[15px] font-[600] "
              value="guest-3"
            >
              Guest 3
            </option>
            <option
              className="h-[30px] capitalize text-[15px] font-[600] "
              value="guest-4"
            >
              Guest 4
            </option>
          </select>
        </div>
        <div className="my-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <select
            className="capitalize w-full md:w-[90%] text-[16px] font-[600] font-futuraLight"
            name="guest"
            id="guest"
          >
            <option
              disabled
              hidden
              className="capitalize text-[15px] font-[600] px-[10px] py-[5px] w-full mx-auto border-b-[3px]"
            >
              Select Bedromm
            </option>
            <option
              className="h-[30px] uppercase text-[15px] font-[600]  w-full mx-auto"
              value="1br"
            >
              1 BR
            </option>
            <option
              className="h-[30px] uppercase text-[15px] font-[600] w-full mx-auto"
              value="2br"
            >
              2 br
            </option>
            <option
              className="h-[30px] uppercase text-[15px] font-[600] w-full mx-auto"
              value="3br"
            >
              3 br{" "}
            </option>
            <option
              className="h-[30px] uppercase text-[15px] font-[600] w-full mx-auto"
              value="4br"
            >
              4 Br
            </option>
          </select>
        </div>
        <div className="my-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <div className="w-full md:w-[90%] flex flex-row justify-evenly">
            <input
              type="date"
              name="checkin"
              placeholder="Check in"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[45%]"
            />
            <input
              type="date"
              name="checkout"
              placeholder="Check-Out"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[45%]"
            />
          </div>
        </div>
        <div className="my-[10px] w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
          <select
            className="capitalize w-full md:w-[90%] text-[16px] font-[600] font-futuraLight"
            name="area"
            id="area"
          >
            <option
              disabled
              hidden
              className="capitalize text-[15px] font-[600] px-[10px] py-[5px] w-full mx-auto border-b-[3px]"
            >
              Select Area
            </option>
            <option
              className="h-[30px] capitalize text-[15px] font-[600]  w-full mx-auto"
              value="dubai-marina"
            >
              Dubai Marina
            </option>
            <option
              className="h-[30px] capitalize text-[15px] font-[600] w-full mx-auto"
              value="jbr"
            >
              JBR
            </option>
            <option
              className="h-[30px] capitalize text-[15px] font-[600] w-full mx-auto"
              value="jlt"
            >
              JLT{" "}
            </option>
            <option
              className="h-[30px] capitalize text-[15px] font-[600] w-full mx-auto"
              value="downtown-dubai"
            >
              Downtown Dubai
            </option>
          </select>
        </div>
        <button
          className="my-[10px] w-full sm:w-1/2 md:w-1/4 lg:w-1/6 bg-secondary text-white font-futuraNormal font-[500] text-[16px]  lg:text-[20px] uppercase py-[10px] rounded"
          type="submit"
        >
          Search
        </button>
      </form>

      <PropertyListingGrid />

      {/* <!-- faq Area --> */}
      <div className="faq-area-wrapper bg-white my-[20px] xl:my-[] py-6 flex flex-col max-w-[90%] mx-auto xl:max-w-3/4">
        <h3 className="font-futuraNormal font-[700] text-[30px] mb-[20px]">
          FAQs
        </h3>
        <div className="mb-4 question">
          <div className=" flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-secondary font-bold cursor-pointer hover:bg-gray-300">
            Lorem ipsum dolor sit amet?
            <span className="h-6 w-6 flex items-center justify-center text-secondary faq-icon">
              <svg
                className="w-3 h-3 fill-current plus"
                viewBox="0 0 469.33333 469.33333"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" />
              </svg>
              <svg
                className="w-3 h-3 fill-current minus hidden"
                viewBox="0 -192 469.33333 469"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
              </svg>
            </span>
          </div>
          <div className="p-3 answer hidden">
            <p className="text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue.
              Vestibulum consequat in urna in bibendum. Praesent sed magna
              risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem
              sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut,
              blandit.
            </p>
            <p className="text-gray-600">
              Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat
              tortor. Nulla consectetur commodo justo. Pellentesque eget ornare
              quam. Pellentesque sodales metus non semper luctus. Praesent non
              ornare tellus, eget vulputate tellus. Donec luctus non sapien sed
              semper.
            </p>
          </div>
        </div>
        <div className="mb-4 question">
          <div className="  flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-secondary font-bold cursor-pointer hover:bg-gray-300">
            Lorem ipsum dolor sit amet?
            <span className="h-6 w-6 flex items-center justify-center text-secondary faq-icon">
              <svg
                className="w-3 h-3 fill-current plus"
                viewBox="0 0 469.33333 469.33333"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" />
              </svg>
              <svg
                className="w-3 h-3 fill-current minus hidden"
                viewBox="0 -192 469.33333 469"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
              </svg>
            </span>
          </div>
          <div className="p-3 answer hidden">
            <p className="text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue.
              Vestibulum consequat in urna in bibendum. Praesent sed magna
              risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem
              sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut,
              blandit.
            </p>
            <p className="text-gray-600">
              Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat
              tortor. Nulla consectetur commodo justo. Pellentesque eget ornare
              quam. Pellentesque sodales metus non semper luctus. Praesent non
              ornare tellus, eget vulputate tellus. Donec luctus non sapien sed
              semper.
            </p>
          </div>
        </div>
        <div className="mb-4 question">
          <div className=" flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-secondary font-bold cursor-pointer hover:bg-gray-300">
            Lorem ipsum dolor sit amet?
            <span className="h-6 w-6 flex items-center justify-center text-secondary faq-icon">
              <svg
                className="w-3 h-3 fill-current plus"
                viewBox="0 0 469.33333 469.33333"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0" />
              </svg>
              <svg
                className="w-3 h-3 fill-current minus hidden"
                viewBox="0 -192 469.33333 469"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
              </svg>
            </span>
          </div>
          <div className="p-3 answer hidden">
            <p className="text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue.
              Vestibulum consequat in urna in bibendum. Praesent sed magna
              risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem
              sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut,
              blandit.
            </p>
            <p className="text-gray-600">
              Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat
              tortor. Nulla consectetur commodo justo. Pellentesque eget ornare
              quam. Pellentesque sodales metus non semper luctus. Praesent non
              ornare tellus, eget vulputate tellus. Donec luctus non sapien sed
              semper.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- faq Area --> */}
    </>
  );
}

export default PropertyListing;
