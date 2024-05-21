import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';


import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import Navbar from './components/NavBar';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path: "/productDetails/:id",
    element: <ProductDetails/>,
  },
  
])
const App = () => {

  return  <RouterProvider router={router}/>;
};
export default App;




















