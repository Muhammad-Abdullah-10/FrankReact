import { useParams } from "react-router-dom";
import propertyListingData from "../../data/propertyListing";

function PropertyDetails() {
  const { id } = useParams(); //  get the dynamic ID from the URL

  // find the property with this id
  const property = propertyListingData.list_of_properties.find(
    (p) => p.id === parseInt(id)
  );

  // handle case: property not found
  if (!property) {
    return <p className="text-center text-red-500 py-32 text-3xl font-bold">Property not found.</p>;
  }

  return (
    <>
    <div class="flex flex-col md:flex-row">
    <div class="w-[90%] mx-auto lg:w-[70%]">
    <div class="flex flex-col w-[90%] md:w-[70%] mx-auto mb-[20px] border-b-[2px] border-solid border-[#8d7252] pb-[20px]">
        <h2 class="font-futuraLight font-[600] text-[30px] text-secondary trakcing-[1.5px] uppercase text-center mb-[10px]">
        Deluxe 3BR w/ Harbour Views & Private Rooftop!
        </h2>
        <div class="grid grid-cols-4 max-w-[100%] md:max-w-[75%] mx-auto my-[10px] items-center">
        <div class="flex flex-col md:w-[200px] items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/guest.eec24d13.svg" alt="" />
            <h4 class="font-futuraLight font-[600] text-[18px] mb-[20px] ">7 guests</h4>
        </div>
        <div class="flex flex-col md:w-[200px] items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/room.ea1068b3.svg" alt="" />
            <h4 class="font-futuraLight font-[600] text-[18px] mb-[20px] ">3 rooms</h4>
        </div>
        <div class="flex flex-col md:w-[200px] items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/beds.671db9b2.svg" alt="" />
            <h4 class="font-futuraLight font-[600] text-[18px] mb-[20px] ">3 beds</h4>
        </div>
        <div class="flex flex-col md:w-[200px] items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/bathroom.9577d95a.svg" alt="" />
            <h4 class="font-futuraLight font-[600] text-[18px] mb-[20px] ">4 bathroom</h4>
        </div>
        </div>
        <div class="flex flex-col max-w-[100%] md:max-w-[100%] mx-auto  pb-[20px]">
        <p class="font-futuraLight font-[400] my-[10px] text-[18px]">
            Experience the one-of-a-kind fusion of a lavish lifestyle in a serene setting overlooking the Creek Harbour & Dubai Skyline.
        </p>  
        <p class="font-futuraLight font-[400] my-[10px] text-[18px]">
            Stay in the heart of Creek, located within proximity to the flourishing marina & vibrant promenade, w/ ample dining, retail, entertainment, & nightlife options.
        </p>  
        <p class="font-futuraLight font-[400] my-[10px] text-[18px]">
            With first-rate amenities like an infinity pool, hotel-quality bedding, high-end appliances, maid’s room, & more that you'll surely enjoy!
        </p>  
        <p class="font-futuraLight font-[400] my-[10px] text-[18px]">
            Perfect for groups, families, or business travelers!
        </p>  
        <p class="font-futuraLight font-[400] my-[10px] text-[18px]">
            See you in Dubai!
        </p>  
        </div>
    </div>
    <div class="flex flex-col md:flex-row  md:max-w-[70%] mx-auto mb-[20px] border-b-[2px] border-solid border-[#8d7252] pb-[20px]">
        <div class="flex flex-col items-center mx-auto md:mx-0 w-[90%] md:w-1/2">
        <h3 class="font-futuraLight font-[600] text-[20px] mb-[10px]">
            Check in and out
        </h3>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            Check in: 15:00
        </p>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            Check out: 11:00
        </p>
        </div>
        <div class="flex flex-col items-center mx-auto md:mx-0 w-[90%] md:w-1/2">
        <h3 class="font-futuraLight font-[600] text-[20px] mb-[10px]">
            Prices
        </h3>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            Weekly discount: 5%
        </p>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            Monthly discount: 20%
        </p>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            Security Deposit: 2500 د.إ
        </p>
        </div>
    </div>
    <div class="flex flex-col md:flex-row  md:max-w-[70%] mx-auto mb-[20px] border-b-[2px] border-solid border-[#8d7252] pb-[20px]">
        <div class="flex flex-col items-center mx-auto md:mx-0 w-[90%] md:w-1/2">
        <h3 class="font-futuraLight font-[600] text-[20px] mb-[10px]">
            Important Information
        </h3>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            <strong>The space</strong> <br/>
            This contemporary apartment is designed to treat you like a five-star hotel, while the warm vibes will make you feel at home! The serene views overlooking the Creek Harbour and Dubai Skyline from your own private rooftop make it a highlight!
        </p>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            <strong>The space</strong> <br/>
            This contemporary apartment is designed to treat you like a five-star hotel, while the warm vibes will make you feel at home! The serene views overlooking the Creek Harbour and Dubai Skyline from your own private rooftop make it a highlight!
        </p>
        </div>
        <div class="flex flex-col items-center mx-auto md:mx-0 w-[90%] md:w-1/2">
        <h3 class="font-futuraLight font-[600] text-[20px] mb-[10px]">
            Staying Rules
        </h3>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            <strong>Security Deposit</strong> <br/>
            This contemporary apartment is designed to treat you like a five-star hotel, while the warm vibes will make you feel at home! The serene views overlooking the Creek Harbour and Dubai Skyline from your own private rooftop make it a highlight!
        </p>
        <p class="font-futuraLight font-[400] text-[18px] mb-[10px] ">
            <strong>Cancellation Policy</strong> <br/>
            This contemporary apartment is designed to treat you like a five-star hotel, while the warm vibes will make you feel at home! The serene views overlooking the Creek Harbour and Dubai Skyline from your own private rooftop make it a highlight!
        </p>
        </div>
    </div>
    
    <div class="flex flex-col md:flex-row  md:max-w-[70%] mx-auto mb-[20px] border-b-[2px] border-solid border-[#8d7252] pb-[20px]">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center item">
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wheelchair.6c96e15d.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wheelchair Accessible</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/gym.86a45136.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Gym</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/pool.8add63db.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Outdoor Pool</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/air_condition.72d3dc24.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Central air conditioning</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wifi.be099a40.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wireless Internet</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wheelchair.6c96e15d.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wheelchair Accessible</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wheelchair.6c96e15d.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wheelchair Accessible</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/gym.86a45136.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Gym</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/pool.8add63db.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Outdoor Pool</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/air_condition.72d3dc24.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Central air conditioning</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wifi.be099a40.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wireless Internet</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wheelchair.6c96e15d.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wheelchair Accessible</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wheelchair.6c96e15d.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wheelchair Accessible</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/gym.86a45136.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Gym</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/pool.8add63db.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Outdoor Pool</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/air_condition.72d3dc24.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Central air conditioning</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wifi.be099a40.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wireless Internet</h4>
        </div>
        <div class="flex flex-col md:w-auto items-center">
            <img class="max-w-[4em]  object-cover mb-[20px]"  src="assets/img/icons/wheelchair.6c96e15d.svg" alt="" />
            <h4 class="font-futuraLight font-[400] text-[18px] mb-[20px] text-center ">Wheelchair Accessible</h4>
        </div>
        </div>
    </div>
    </div>
    <div class="flex flex-col w-[90%] mx-auto items-center lg:w-[30%] bg-[#eeecea] pt-[20px] h-auto">
    <div class="flex flex-col max-w-[80%] mx-auto mb-[15px]">
        <h2 class="font-futuraLight font-[600] tracking-[1px] text-[24px] text-secondary uppercase text-left mb-[10px]">
        Deluxe 3BR w/ Harbour Views & Private Rooftop!
        </h2>
        <div class="flex flex-row">
        <p class="font-futuraLight text-[18px] text-gray-500 font-[600] mx-[5px]">
            1 guest |</p>
        <p class="font-futuraLight text-[18px] text-gray-500 font-[600] ">
            3 nights
        </p>
        </div>
    </div>
    <form class="flex flex-col">    
        <div date-rangepicker="" id="dateRangePickerId" datepicker-orientation=" right bottom left" class="rounded flex flex-col md:flex-row items-center underline">
        <div class="relative mb-[10px]">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class=" w-5 h-5 text-secondary " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
            </div>
            <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-[#000] sm:text-sm rounded-lg focus:ring-[#8d7252] focus:border-[#8d7252] block w-full pl-10 p-2.5 datepicker-input" placeholder="Check In" />
        </div>
        <span class="mx-4 text-gray-500 hidden md:block">|</span>
        <div class="relative mb-[10px]">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-secondary " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
            </div>
            <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-[#000] sm:text-sm rounded-lg focus:ring-[#8d7252] focus:border-[#8d7252] block w-full pl-10 p-2.5 datepicker-input" placeholder="Check Out" />
        </div>
        </div>
        <div class="flex flex-row w-full justify-center">
        <select class="capitalize w-full md:w-[100%] text-[16px] font-[600] font-futuraLight bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#8d7252] focus:border-[#8d7252] block p-2.5  dark:placeholder-gray-400 dark:focus:ring-[#8d7252] dark:focus:border-[#8d7252]" name="guest" id="guest">
            <option selected disabled hidden class="capitalize text-[15px] font-[600] px-[20px] py-[5px] w-full mx-auto border-b-[3px]">Number of Guests</option>
            <option class="h-[30px] capitalize text-[15px] font-[600]  w-full mx-auto" value="guest-1">Guest 1</option>
            <option class="h-[30px] capitalize text-[15px] font-[600] " value="guest-2">Guest 2</option>
            <option class="h-[30px] capitalize text-[15px] font-[600] " value="guest-3">Guest 3</option>
            <option class="h-[30px] capitalize text-[15px] font-[600] " value="guest-4">Guest 4</option>
        </select>
    </div>
    </form>
    <div class="flex flex-row justify-between w-[80%] mt-[20px]">
        <div class=" text-left w-[40%] lg:w-[40%] font-futuraLight text-[20px] text-gray-500 font-[600]">3 nights</div>
        <div class=" text-right w-[40%] lg:w-[40%] font-futuraLight text-[20px] text-gray-500 font-[600]">3 400.00 د.إ</div>
    </div>
    <div class="flex flex-row justify-between w-[80%] mt-[10px]">
        <div class=" text-left w-[40%] lg:w-[40%] font-futuraLight text-[20px] text-gray-500 font-[600]">Cleaning fee</div>
        <div class=" text-right w-[40%] lg:w-[40%] font-futuraLight text-[20px] text-gray-500 font-[600]">580.00 د.إ</div>
    </div>
    <div class="flex flex-row justify-between w-[80%] mt-[10px]">
        <div class=" text-left w-[40%] lg:w-[40%] font-futuraLight text-[20px] text-gray-500 font-[600]">Tourism tax</div>
        <div class=" text-right w-[40%] lg:w-[40%] font-futuraLight text-[20px] text-gray-500 font-[600]">80.0 د.إ</div>
    </div>
    <div class="flex flex-row justify-between w-[80%] mt-[10px]">
        <div class=" text-left w-[40%] lg:w-[40%] font-futuraLight text-[20px] text-[#000] font-[600]">Total</div>
        <div class=" text-right w-[40%] lg:w-[40%] font-futuraLight text-[20px] text-[#000] font-[600]">4070.00 د.إ</div>
    </div>
    <div class="flex flex-col w-[90%] mx-auto lg:mx-0 lg:w-[75%]">
        <a href="bookingsingle.html" class="self-center my-[25px] lg:mt-[20px] bg-[#8d7252] text-white font-futuraNormal tracking-[1.5px] font-[600] text-[16px]  uppercase py-[10px] lg:py-[12px] mx-[10px] px-[20px] rounded border-[1px] border-[#8d7252] border-solid">Book Now</a>
    </div>

    <div class="flex flex-col my-[20px]">
        <img src="assets/img/02_1L1A1062-HDR_OK-min.jpeg" alt="" />
    </div>
    </div>
    </div>
    </>

  );
}

export default PropertyDetails;
