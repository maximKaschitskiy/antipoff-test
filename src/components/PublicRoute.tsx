import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { Navigate } from "react-router-dom";
import { RouteType } from "../types/types";

function PublicRoute({children}: RouteType) {

    const user = useSelector((state: RootState) => state.user);
    
    return JSON.stringify(user) === '{}'
        ?  children
        : <Navigate to="/team" replace />
}

export default PublicRoute;