import { useEffect } from "react"
import WebFont from 'webfontloader'


const ArticleHeader = props => {
    const container = {
        padding: '10% 10% 0 10%',
        
    }
    let textStyle = {
        fontFamily: 'Sono',
        margin: 0,
        lineHeight: '2.5vw',
        fontSize: '3vw',
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

export default ArticleHeader