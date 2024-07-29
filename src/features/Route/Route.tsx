import React from "react";
import CreateAnAccount from "../../components/CreateAnAccount";
import Dashboard from "../../components/Dashboard";

export const Route = [
    {
        path:"/",
        element:<CreateAnAccount/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    }

]