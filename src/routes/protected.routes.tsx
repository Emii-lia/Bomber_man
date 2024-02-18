import { RouteObject } from "react-router-dom";
import { MainLayout } from "../components/layout/main.layout";
import { HomePage } from "../pages/home.page";

export const ProtectedRoutes: RouteObject[]= [
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element: <HomePage/>,
            },
        ]
    }
]