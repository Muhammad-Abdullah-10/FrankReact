import React ,  {useContext, useState} from 'react'
import PropertyContext from '../../context/PropertyContext';

function PropertyCard() {
    const [propretyDetailsShowBtn, setPropretyDetailsShowBtn] = useState();
    const data = useContext(PropertyContext)
    // console.log(data);

    function handleProperty() {
        setPropretyDetailsShowBtn(!propretyDetailsShowBtn);
    }

  return (
    <div className="property-card-wrapper  flex flex-col max-w-[90%] md:max-w-[430px] mx-auto my-[10px] md:my-[20px]">
            <div className="wrapper-aera-img relative">
              <img
                className=" rounded-t-[5px] object-cover w-full h-[250px]"
                src="../../src/assets/img/pgztpe38rmm9bnaz4akm.jpg"
                alt=""
              />
            </div>
            <div className="wrapper-content-area p-[10px] lg:p-[15px] bg-[#d8d7d77e]">
              <div className="flex flex-row justify-between py-[10px]">
                <div className="card-title w-3/4 flex flex-col items-start">
                  <h3 className="card-title-wrapper font-futuraLight text-[20px] font-[600]">
                    Impressive 5BR Townhouse w/ Own Backyard in La Mer
                  </h3>
                  <h4 className="guestAndRooms-wrapper py-[10px] font-futuraLight font-[600] text-[18px] text-gray-500">
                    11 guests | 5 bedrooms
                  </h4>
                </div>
                <div className="card-price w-[25%] flex flex-col items-end">
                  <h3 className="font-futuraLight text-[30px]  text-secondary">
                    4999{" "}
                    <span className="font-futuraLight text-[22px] font-[100]">
                      د.إ
                    </span>
                  </h3>
                  <h4 className="night-wrapper relative font-futuraLight text-[20px]">
                    night
                    <span className="h-[2px] w-full absolute bottom-0 left-0 bg-secondary"></span>
                  </h4>
                </div>
              </div>
              <div className="flex flex-row justify-between py-[10px]">
                <a
                  onClick={handleProperty}
                  className="more-btn uppercase font-futuraNormal text-secondary text-[16px] font-extrabold"
                >
                  More
                  <i
                    className="fa fa-caret-right"
                    style={{ borderRadius: "50%" }}
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="single_booknow.html"
                  className="details-card-wrapper tracking-[2px] font-futuraLight uppercase text-[16px]  text-white bg-secondary font-[600] py-[7px] px-[30px] rounded"
                >
                  Details
                </a>
              </div>
              <div
                className={`flex flex-col justify-between py-2.5 ${
                  propretyDetailsShowBtn ? "" : "hidden"
                }`}
              >
                <div className="flex flex-row justify-between flex-wrap my-[10px]">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="checkin-card"
                      className="font-futuraNormal text-[14px] font-[700] text-secondary"
                    >
                      Check In
                    </label>
                    <input
                      type="date"
                      name="checkin-card"
                      id="checkin-card"
                      className="border-[2px] border-[#8d7252] px-[10px] text-secondary font-futuraNormal font-[600]"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="checkout-card"
                      className="font-futuraNormal text-[14px] font-[700] text-secondary"
                    >
                      Check Out
                    </label>
                    <input
                      type="date"
                      name="checkin-card"
                      id="checkin-card"
                      className="border-[2px] border-[#8d7252] px-[10px] text-secondary font-futuraNormal font-[600]"
                    />
                  </div>
                </div>
                <select
                  name="card-guest"
                  id="card-guest"
                  className="border-[2px] border-[#8d7252] px-[10px] py-[5px] text-secondary font-futuraNormal font-[600]"
                >
                  <option hidden disabled>
                    No of Guest
                  </option>
                  <option className="font-futuraNormal text-[16px]" value="1">
                    1
                  </option>
                  <option className="font-futuraNormal text-[16px]" value="2">
                    2
                  </option>
                </select>
              </div>
            </div>
          </div>
  )
}

export default PropertyCard