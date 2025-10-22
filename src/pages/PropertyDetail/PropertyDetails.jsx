import { useContext } from "react";
import { useParams } from "react-router-dom";
import PropertyContext from "../../context/PropertyContext";

function PropertyDetails() {
  const { id } = useParams(); // dynamic id from URL
  const propertyData = useContext(PropertyContext); // ✅ context se data lo

  // find the property by id
  const property = propertyData.find((p) => p.id === parseInt(id));

  // handle case: property not found
  if (!property) {
    return (
      <p className="text-center text-red-500 py-32 text-3xl font-bold">
        Property not found.
      </p>
    );
  }

  return (
    <div className="single-property-page p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-[400px] object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">
        {property.guests} • {property.bedrooms}
      </p>
      <p className="text-secondary text-xl mt-2">
        {property.price} / {property.rate_type}
      </p>
    </div>
  );
}

export default PropertyDetails;
