import React from "react";
import { Navigate } from "react-router-dom";

export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
        return <Navigate to={'/admin/login'} replace={true}></Navigate>
    }

    return children
}