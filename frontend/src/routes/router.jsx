import { lazy } from 'react';
import {createBrowserRouter} from 'react-router-dom'
import Login from '../views/Login';
import NotFound from '../views/NotFound';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
        exact: true
    },
    {
        path: "*",
        element: <NotFound/>,
        exact: true
    },
]);

export default router;