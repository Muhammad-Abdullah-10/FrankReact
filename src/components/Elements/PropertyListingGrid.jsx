import React, { useContext, useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import PropertyContext from "../../context/PropertyContext";

function PropertyListingGrid() {
  const propertyData = useContext(PropertyContext);
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    if (Array.isArray(propertyData) && propertyData.length > 0) {
      setPropertyList(propertyData);
    }
  }, [propertyData]);

  console.log("propertyList:", propertyList);
  return (
    <div className="wrapper-property-cards">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:px-5 xl:grid-cols-3 3xl:grid-cols-3 2xl:max-w-3/4 2xl:mx-auto gap-8">
        {propertyList.map((item) => (
          <PropertyCard key={item.key} id={item.id} property={item} />
        ))}
      </div>
    </div>
  );
}

export default PropertyListingGrid;
