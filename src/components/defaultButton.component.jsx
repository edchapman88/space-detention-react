import { defaultTextStyle } from "../styles/textStyle"


const DefaultButton = props => {
    return (
        <div style={props.style} onClick={props.onClick} className={props.className}>
            <p style={defaultTextStyle} className={props.textClassName}>{props.text}</p>
        </div>
    )
}

export default DefaultButton