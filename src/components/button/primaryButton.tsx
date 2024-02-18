import { Button } from 'primereact/button';
type ButtonProps = {
    label?: string
    icon?: React.ReactNode|string
    onClicked: () => void
    type:"button"|"submit"| "reset"
}
export const PrimaryButton = (props:ButtonProps)=>{
    const {label, icon, onClicked, type} = props
    return(
        <Button className="flex flex-row px-4 py-2 space-x-3 text-lg font-semibold text-white border rounded-lg border-gray-50 hover:bg-white hover:text-customGreen-800" type={type} onClick={onClicked}>
                <p>
                    {label}
                </p>
                {typeof(icon) === 'string'?
                    <span className={icon}></span>:
                    icon
                }
                
        </Button>
    )
}
