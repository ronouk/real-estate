import { useLoaderData } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const Properties = () => {
    const properties = useLoaderData();
    // console.log(properties);
    return (
        <div data-aos="fade-up" data-aos-duration="4000">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-center mb-12">Featured Real Estates</h1>
                <div className="properties-card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        properties.slice(0,9).map((property, index) => <PropertyCard key={index} property = {property}></PropertyCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Properties;