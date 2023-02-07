import {createBrowserRouter, Navigate} from 'react-router-dom'
import DefaultLayout from '../views/DefaultLayout';
import GuestLayout from '../views/GuestLayout';
import Login from '../views/Login';
import NotFound from '../views/NotFound';
import Signup from '../views/Signup';
import Users from '../views/Users'

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        exact: true,
        children: [
            {
                path: "/",
                element: <Navigate to="/users"/>,
                exact: true
            },
            {
                path: "/users",
                element: <Users/>,
                exact: true
            },
        ]
    },
    {
        path: "/",
        element: <GuestLayout/>,
        exact: true,
        children: [
            {
                path: "/login",
                element: <Login/>,
                exact: true
            },
            {
                path: "/signup",
                element: <Signup/>,
                exact: true
            },
        ]
    },
    {
        path: "*",
        element: <NotFound/>,
        exact: true
    },
]);

export default router;