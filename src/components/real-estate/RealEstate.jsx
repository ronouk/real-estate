import { useLoaderData } from "react-router-dom";
import PropertyCard from "../property/PropertyCard";
import { Helmet } from "react-helmet-async";

const RealEstate = () => {
    const properties = useLoaderData();
    return (
        <div className="w-11/12 lg:w-3/4 mx-auto">
            <Helmet>
                <title>LRE | All Real Estates</title>
            </Helmet>
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-center mb-12">All Listed Real Estates</h1>
                <div className="properties-card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        properties.map((property, index) => <PropertyCard key={index} property={property}></PropertyCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default RealEstate;