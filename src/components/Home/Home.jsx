import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="w-11/12 lg:w-3/4 mx-auto">
            <Helmet>
                <title>LRE | Home</title>
            </Helmet>
            <h2>Hello world</h2>
            
        </div>
    );
};

export default Home;