import React, { useState, useRef, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

function PropertyCard({ property }) {
  const [propretyDetailsShowBtn, setPropretyDetailsShowBtn] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [totalRent, setTotalRent] = useState(property.price);

  const basePrice = property.price || 0;
  const timeoutRef = useRef(null); // for debounce

function calculateRent(ci, co, g) {
  if (!ci || !co) return;

  const checkInDate = new Date(ci);
  const checkOutDate = new Date(co);

  if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) return;

  const diffDays = Math.ceil(
    (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
  );

  if (diffDays <= 0) return;

  // clean price before calculation
  const base = parseFloat(property.price?.toString().replace(/[^\d.]/g, "")) || 0;
  const total = base * diffDays * (g || 1);

  console.log("Base:", base, "Days:", diffDays, "Guests:", g, "Total:", total);
  setTotalRent(total);
}

  // Debounced rent calculation (500ms delay)
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      calculateRent(checkIn, checkOut, guests);
    }, 500);
    return () => clearTimeout(timeoutRef.current);
  }, [checkIn, checkOut, guests]);

  //  Handlers
  const handleCheckIn = (e) => setCheckIn(e.target.value);
  const handleCheckOut = (e) => setCheckOut(e.target.value);
  const handleGuests = (e) => setGuests(parseInt(e.target.value));

  const showPropertyDetail = () => {
    setPropretyDetailsShowBtn((prev) => !prev);
  };

  
  // Dynamic Navigation with form values Using use navigate 
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    const basePath = `/propertylisting/property/${property.id}`;

    // agar user ne koi input diya hai, toh query string bana lo
    if (checkIn && checkOut && guests) {
      const params = new URLSearchParams({
        checkIn,
        checkOut,
        guests,
        total: totalRent,
      }).toString();
      navigate(`${basePath}?${params}`);
    } else {
      // warna simple redirect
      navigate(basePath);
    }
  };

  return (
    <div className="property-card-wrapper flex flex-col h-12/12 max-w-[90%] md:max-w-[430px] my-2.5 md:my-[20px]">
      {/* Property Image */}
      <div className="wrapper-aera-img relative">
        <img
          className="rounded-t-[5px] object-cover w-full h-[250px]"
          src= "../../src/assets/img/pgztpe38rmm9bnaz4akm.jpg"
          alt={property.title || "Property Image"}
        />
      </div>

      {/* Content */}
      <div className="wrapper-content-area p-[10px] lg:p-[15px] bg-[#d8d7d77e]">
        <div className="flex flex-row justify-between py-[10px]">
          <div className="card-title w-3/4 flex flex-col items-start">
            <h3 className="font-futuraLight text-[20px] font-[600] max-w-4/5">
              {property.title}
            </h3>
            <h4 className="py-[10px] font-futuraLight font-[600] text-[18px] text-gray-500">
              {property.guests} | {property.bedrooms} 
            </h4>
          </div>

          <div className="card-price w-[25%] flex flex-col items-end">
            <h3 className="font-futuraLight text-[30px] text-secondary">
              {totalRent} د.إ
            </h3>
            <h4 className="relative font-futuraLight text-[20px]">
              {property.rate_type}
              <span className="h-[2px] w-full absolute bottom-0 left-0 bg-secondary"></span>
            </h4>
          </div>
        </div>

        <div className="flex flex-row justify-between py-[10px]">
          <button
            onClick={showPropertyDetail}
            className="uppercase font-futuraNormal text-secondary text-[16px] font-extrabold"
          >
            {propretyDetailsShowBtn ? "Hide" : "More"}{" "}
            <i className={`duration-300 ease-in-out fa ${propretyDetailsShowBtn ? "fa-caret-down" : "fa-caret-right" }`} aria-hidden="true"></i>
          </button>
          <button onClick={handleDetailsClick}
          className="tracking-[2px] font-futuraLight uppercase text-[16px] text-white bg-secondary font-[600] py-[7px] px-[30px] rounded"
          >
           Details
          </button>
        </div>

        {/* Expandable Section */}
        <div
          className={`flex flex-col justify-between py-2.5 ${
            propretyDetailsShowBtn ? "" : "hidden"
          }`}
        >
          <div className="flex flex-row justify-between flex-wrap my-2.5">
            {/* Check-In */}
            <div className="flex flex-col">
              <label
                htmlFor="checkin-card"
                className="font-futuraLight text-[14px] font-[700] text-secondary"
              >
                Check In
              </label>
              <input
                onChange={handleCheckIn}
                value={checkIn}
                type="date"
                name="checkin-card"
                id="checkin-card"
                className="border-[2px] border-[#8d7252] px-[10px] text-secondary font-futuraLight font-[600]"
              />
            </div>

            {/* Check-Out */}
            <div className="flex flex-col">
              <label
                htmlFor="checkout-card"
                className="font-futuraLight text-[14px] font-[700] text-secondary"
              >
                Check Out
              </label>
              <input
                onChange={handleCheckOut}
                value={checkOut}
                type="date"
                name="checkout-card"
                id="checkout-card"
                className="border-[2px] border-[#8d7252] px-[10px] text-secondary font-futuraLight font-[600]"
              />
            </div>
          </div>

          {/* Guest Dropdown */}
          <select
            name="card-guest"
            id="card-guest"
            value={guests}
            onChange={handleGuests}
            className="border-[2px] border-[#8d7252] px-[10px] py-[5px] text-secondary font-futuraLight font-[600]"
          >
            <option hidden disabled>
              No of Guest
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
