import React, { useEffect, useState } from "react";
import PropertyContext from "./PropertyContext";
import propertyListingData  from "../data/propertyListing";

function PropertyContextProvider({children}) {
  const [propertyData, setPropertyData] = useState([]);
  useEffect(() => {
     const { list_of_properties } = propertyListingData;
    setPropertyData(list_of_properties)
  }, []);

  return <PropertyContext.Provider value={propertyData}> { children } </PropertyContext.Provider>;
}

export default PropertyContextProvider;
