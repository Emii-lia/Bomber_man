import { Button } from 'primereact/button';
type ButtonProps = {
    label?: string
    icon?: React.ReactNode|string
    onClicked: () => void
}
export const SecondaryButton = (props:ButtonProps)=>{
    const {label, icon, onClicked} = props
    return(
        <Button className="flex flex-row px-6 py-1 space-x-3 text-lg text-white transition border border-white rounded-lg hover:bg-slate-100 hover:text-customGreen-800"  onClick={onClicked}>
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
