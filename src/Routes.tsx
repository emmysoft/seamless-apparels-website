import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Navbar from './components/Navbar';
import Home from './pages/Home'



function Layout(){
    return(
        <main className="flex flex-col h-[100vh] w-full">
            <Navbar/>
            <Outlet/>
        </main>
    )
}


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/auth',
        element: <Auth/>
    }
])


const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
