import React,{lazy, Suspense,} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import userContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {


  const [username, setusername]=useState();
  useEffect(()=>{
  const data={
    name:"TS Chohan",
  }
  setusername(data.name);
  },[])
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{LoggedInUser:username, setusername}}>
    <div className="app">
     
      <Header />
    
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={"Loading....."}><Grocery/></Suspense>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<RouterProvider router={router} />);
