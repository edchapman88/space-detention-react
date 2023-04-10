import { useEffect } from "react";
import WebFont from 'webfontloader';
import DefaultButton from "./defaultButton.component";

const CoverImage = props => {

    useEffect(()=>{
        WebFont.load({
            google: {
              families: ['Sono']
            }
          });
    },[])

    const containerStyle = {

    }

    const imgStyle = {
        width : '100%'
    }

    const headerStyle = {
        color: 'white',
        fontSize: '3vw',
        fontFamily: 'sono'
    }

    const textContainerStyle = {
        position:'absolute',
        backgroundColor: 'transparent',
        width: '55%',
        top: '10%',
        left: '5%',
    }

    return(
        <div style={containerStyle}>
            <div style={textContainerStyle}>
                    { props.text && props.text.map( line => {
                    return <h1 key={line} style={headerStyle}>{line}</h1>
                })}
                {props.button &&
                <DefaultButton 
                    onClick={props.button.onClick}
                    text={props.button.text}
                    style={props.button.style}
                    className={props.button.className}/>}
            </div>
            <img style={imgStyle} src={props.imgUrl}/>
        </div>
    )
}

export default CoverImage