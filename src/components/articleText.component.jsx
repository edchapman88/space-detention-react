import { useEffect } from "react"
import WebFont from 'webfontloader'


const ArticleText = props => {
    const container = {
        padding: '3% 10%',
        ...props.containerStyle
    }
    let textStyle = {
        fontFamily: 'Sono',
        margin: 0,
        lineHeight: '2.5vw',
        fontSize: '1.6vw',
        ...props.textStyle
    }

    if (props.indent) {
        textStyle = {
            textIndent: '3%',
            ...textStyle
        }
    }

    useEffect(()=>{
        WebFont.load({
            google: {
              families: ['Sono']
            }
          });
    },[])
    
    if (typeof(props.text) == 'string'){
        return (
            <div style={container}>
                <p style={textStyle}>{props.text}</p>
            </div>
        )
    } else {
        return (
            <div style={container}>
                { props.text.map( line => {
                    return <p key={line} style={textStyle}>{line}</p>
                })}
            </div>
        )
    }

    
}

export default ArticleText