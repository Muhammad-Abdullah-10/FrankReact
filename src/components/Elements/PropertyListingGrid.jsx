import React , {useContext} from 'react'
import PropertyCard from './PropertyCard'
import PropertyContext from '../../context/PropertyContext';

function PropertyListingGrid() {
    const data = useContext(PropertyContext)
  return (
      <div className="wrapper-property-cards">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:px-5 xl:grid-cols-3 3xl:grid-cols-3 2xl:max-w-3/4 2xl:mx-auto gap-8">
          {/* <!-- property-card --> */}
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
          {/* <!-- property-card --> */}
     
        </div>
      </div>
  )
}

export default PropertyListingGrid