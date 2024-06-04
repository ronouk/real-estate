import { Helmet } from "react-helmet-async";
import Banner from "../homeComponenets/Banner";

const Home = () => {
    return (
        <div className="w-11/12 lg:w-3/4 mx-auto">
            <Helmet>
                <title>LRE | Home</title>
            </Helmet>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;