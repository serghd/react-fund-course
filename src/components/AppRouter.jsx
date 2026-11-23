import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = function () {
   const {isAuth, loginInProcess} = useContext(AuthContext);

   if (loginInProcess) {
      return <Loader />
   }

   return (
      isAuth
         ?
         <Routes>
            {
               privateRoutes.map(route =>
                  <Route
                     path={route.path}
                     element={route.element}
                  />
               )
            }
            <Route path="*" element={<Posts />} />
         </Routes >
         : <Routes>
            {
               publicRoutes.map(route =>
                  <Route
                     path={route.path}
                     element={route.element}
                  />
               )}
            <Route path="*" element={<Login />} />
         </Routes>
   );
}

export default AppRouter;