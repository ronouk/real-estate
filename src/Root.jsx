import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { HelmetProvider } from "react-helmet-async";

const Root = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <HelmetProvider>
                <Outlet></Outlet>
            </HelmetProvider>
            <Footer></Footer>
        </div>
    );
};

export default Root;