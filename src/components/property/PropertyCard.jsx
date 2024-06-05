import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'animate.css';

const PropertyCard = ({ property }) => {
    // console.log(property);
    const { id, area, estate_title, image, location, price, status } = property;
    return (
        <div data-aos="fade-up" data-aos-duration="4000" data-aos-delay='50'>
            <div className='border'>
                <div className='relative'>
                    <img className='w-full h-72 object-cover' src={image} alt="" />
                    <div className='absolute transform left-[32%] top-[42%] xl:left-[35%] xl:top-[45%]'>
                        <button className='btn bg-[#ffffff66]'><Link to={`/viewdetails/${id}`}>View Property</Link></button>
                    </div>
                    <div className= {`p-2 uppercase font-semibold text-white ${status === 'sale' ? 'bg-purple-400' : 'bg-blue-500'}`}>
                        {status}
                    </div>
                </div>
                <div className='flex flex-col px-2 py-4 border-b flex-grow min-h-28'>
                    <h1 className='font-semibold'>{estate_title}</h1>
                    <p className='font-semibold text-sm text-red-500'>{location}</p>
                </div>
                <div className='px-2 py-4 flex justify-between text-center border-b'>
                    <div>
                        <p className='text-green-900 font-semibold text-sm'>{area}</p>
                        <p className='font-semibold text-sm'>Area</p>
                    </div>
                    <div>
                        <p className='text-green-900 font-semibold text-sm'>{price}</p>
                        <p className='font-semibold text-sm'>Price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.object,
}

export default PropertyCard;