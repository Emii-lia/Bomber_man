import { NavLink } from "react-router-dom"

type NavLinkItemProps = {
    to:string
    label:string
    showLabel:boolean
    iconAfter?:React.ReactNode
    iconBefore?:React.ReactNode
    style?:string
    showActive:boolean
}
export const LinkNavigation = (props:NavLinkItemProps) =>{
    const {to, label, iconAfter, iconBefore, showLabel, showActive, style} = props
    return (
        <NavLink
            to={to}
            className={({isActive})=>
                isActive && showActive?  " text-blue-600 border-blue-500": " text-gray-500"
            }
        >
            {
                
            }
            <div className="flex flex-row items-center p-1 justify-center space-x-1">
                <span className="w-5">
                    {iconBefore}
                </span>
                {
                    showLabel &&
                    <span className={`md:flex flex-1 justify-start items-start text-customGray-400/70 ${style}`}>
                        { label }
                    </span>
                }
                <span className="w-5 text-center text-lg">
                    {iconAfter}
                </span>
            </div>
        </NavLink>
    )
}