import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../components/authentication/Register";
import Login from "../components/authentication/Login";
import Footer from "../components/Footer/Footer";
import RealEstate from "../components/real-estate/RealEstate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/real-estate',
                element: <RealEstate></RealEstate>
            }
        ]
    }
])

export default router;