import { Helmet } from "react-helmet-async";
import Banner from "../homeComponenets/Banner";
import Ribbon from "../homeComponenets/Ribbon";
import Properties from "../homeComponenets/Properties";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="4000" className="w-11/12 lg:w-3/4 mx-auto">
            <Helmet>
                <title>LRE | Home</title>
            </Helmet>
            <Banner></Banner>
            <Ribbon></Ribbon>
            <Properties></Properties>
            
        </div>
    );
};

export default Home;