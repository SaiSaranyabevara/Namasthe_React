 import React from "react";
 import ReactDOM from 'react-dom/client';
import { jsx } from "react/jsx-runtime";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";

import RestaurantMenu from "./src/components/RestaurantMenu";



     const AppLayout= () =>{
        return (
            <div className="app">
                <Header/>
               <Outlet/>
            </div>
        )
     };


     const appRouter = createBrowserRouter(
        [
           {
            path:"/",
             element:<AppLayout/>,
           
             children:[
                {
                    path:"/",
                    element:<Body/>
                },
             {
            path:"/about",
            element:<About/>
           },
           {
            path:"/contact",
            element:<Contact/>,
           },
           {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>,
           }
             ],
            errorElement: <ErrorPage/>
         }
           ,
          
        ]
     )

     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(<RouterProvider router={appRouter}/>)