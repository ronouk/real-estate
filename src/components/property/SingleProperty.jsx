import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";

const SingleProperty = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const allProperty = useLoaderData();
    const singleProperty = allProperty.find(prop => prop.id == id);
    // console.log(singleProperty);
    const { area, description, segment_name, facilities, estate_title, image, location, price, status } = singleProperty;
    // const singleProperty = allProperty[id-1];
    // console.log(singleProperty)


    return (
        <div className="w-11/12 lg:w-3/4 mx-auto mb-12">
            <Helmet>
                <title>LRE | {estate_title}</title>
            </Helmet>
            <div className="flex flex-col gap-12">
                <h2 className="text-3xl font-bold text-center">{estate_title}</h2>
                <img src={image} alt="" />
                <div className="border border-yellow-500 p-6 leading-8">
                    <p>{description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-center">Property Details</h1>
                </div>
                <div className="border border-yellow-500 capitalize">
                    <div className="flex justify-between">
                        <p className="font-bold p-4 border-b border-r border-yellow-500 w-1/2">Property type:</p>
                        <p className="p-4 border-b border-yellow-500 w-1/2">{segment_name}</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-bold p-4 border-b border-r w-1/2 border-yellow-500">Location:</p>
                        <p className="p-4 border-b w-1/2 border-yellow-500">{location}</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-bold p-4 border-b border-r w-1/2 border-yellow-500">Size:</p>
                        <p className="p-4 border-b w-1/2 border-yellow-500">{area}</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-bold p-4 border-b border-r w-1/2 border-yellow-500">Facilities:</p>
                        <p className="p-4 border-b w-1/2 border-yellow-500">
                            {facilities.map((facility, index) => <li key={index} className="list-none">{facility}</li>)}
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-bold p-4 border-b border-r w-1/2 border-yellow-500">Listed for:</p>
                        <p className="p-4 border-b w-1/2 border-yellow-500">{status}</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="font-bold p-4 border-r w-1/2 border-yellow-500">Price:</p>
                        <p className="p-4 w-1/2 border-yellow-500">{price}</p>
                    </div>
                </div>

                <button className="btn border-yellow-500" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default SingleProperty;

SingleProperty.propTypes = {
    singleProperty: PropTypes.object,
}