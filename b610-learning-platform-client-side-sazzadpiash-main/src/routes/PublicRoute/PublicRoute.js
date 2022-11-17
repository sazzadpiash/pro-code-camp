import { createBrowserRouter } from "react-router-dom";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import Main from "../../layout/Main";
import Checkout from "../../pages/Checkout/Checkout";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Unaccesable from "../../pages/Unaccesable/Unaccesable";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const mainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                loader: ()=>fetch('https://pro-code-camp-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: async ({params}) => fetch(`https://pro-code-camp-server.vercel.app/course/${params.id}`),
                element: <SingleCourse></SingleCourse>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: async ({params}) => fetch(`https://pro-code-camp-server.vercel.app/course/${params.id}`),
                
            }
        ]
    },
    {
        path: '*',
        element: <Unaccesable></Unaccesable>
    }
]);