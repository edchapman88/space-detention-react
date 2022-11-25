import { useEffect } from "react"
import WebFont from 'webfontloader'


const ArticleText = props => {
    const container = {
        padding: '3% 10%',
        
    }
    let textStyle = {
        fontFamily: 'Sono',
        margin: 0,
        lineHeight: '2.5vw',
        fontSize: '1.6vw',
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
    
    return (
        <div style={container}>
            <p style={textStyle}>{props.text}</p>
        </div>
    )
}

export default ArticleText