import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Career from "../pages/career/Career";
import About from "../pages/about/About";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/Home/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'news/:id',
                element: <PrivateRoute>
                    <NewsDetails></NewsDetails>
                </PrivateRoute>


            }
        ]
    }
]);

export default router;