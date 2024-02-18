import { Button } from 'primereact/button';
type ButtonProps = {
    label?: string
    icon?: React.ReactNode|string
    onClicked: () => void
    type:"button"|"submit"| "reset"
    style?:string
    disabled?: boolean
}
export const ActionButton = (props:ButtonProps)=>{
    const {label, icon, onClicked, type, disabled, style} = props
    return(
        <Button className={`flex flex-row px-6 py-1 space-x-3 font-mono text-lg text-white border rounded-lg bg-primaryBlue-500 border-primaryBlue-500 hover:text-primaryBlue-700 hover:bg-primaryBlue-300 hover:border-primaryBlue-300 ${style}`} type={type} onClick={onClicked} disabled={disabled}>
                {typeof(icon) === 'string'?
                    <span className={icon}></span>:
                    icon
                }
                <p>
                    {label}
                </p>
        </Button>
    )
}