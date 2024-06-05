import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../components/authentication/Register";
import Login from "../components/authentication/Login";
import RealEstate from "../components/real-estate/RealEstate";

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
            }
        ]
    }
])

export default router;