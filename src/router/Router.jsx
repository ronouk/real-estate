import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../components/authentication/Register";
import Login from "../components/authentication/Login";
import RealEstate from "../components/real-estate/RealEstate";
import SingleProperty from "../components/property/SingleProperty";
import Faq from "../components/Faq/Faq";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data-luxury.json'),
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
                element: <RealEstate></RealEstate>,
                loader: () => fetch('/data-luxury.json')
            },
            {
                path: '/viewdetails/:id',
                element: <SingleProperty></SingleProperty>,
                loader: () => fetch('/data-luxury.json')
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])

export default router;