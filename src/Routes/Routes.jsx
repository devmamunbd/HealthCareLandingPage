import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home/Home";
import Service from "../Home/Home/Service/Service";
import Blog from "../Home/Home/Blog/Blog";
import About from "../Home/Home/About/About";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/service',
                element: <Service/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    }
])