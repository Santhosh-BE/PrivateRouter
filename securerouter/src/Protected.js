import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function Protected({ isLogged }) {
    return isLogged ? <Outlet /> : <Navigate to="/"/> ;
}
export default Protected;