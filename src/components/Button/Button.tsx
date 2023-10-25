import './Button.css'

export default function Button(props: any) {
    return(
        <button className="btn-primary">{props.label}</button>
    )
}