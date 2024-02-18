import { useRoutes } from "react-router-dom"
import { ProtectedRoutes } from "./protected.routes"

export const AppRoutes = ()=>{
    const elements = useRoutes([...ProtectedRoutes])
    return (
        <div className="">
            {elements}
        </div>
    )
}