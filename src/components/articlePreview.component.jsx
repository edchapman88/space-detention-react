import { useEffect } from "react"
import WebFont from 'webfontloader'
import { defaultTextStyle } from '../styles/textStyle'

const ArticlePreview = props => {

    useEffect(()=>{
        WebFont.load({
            google: {
              families: ['Sono']
            }
          });
    },[])

    const articlePreviewContainer = {
        width: '420px',
        margin: '1vw',
        cursor: 'pointer'
    }

    const articleCaptionContainer = {
        paddingTop: '2%',
        paddingBottom: '5%',
        paddingLeft: '2%',
        paddingRight: '2%'
    }

    const articleImg = {
        width:'100%',
        borderRadius: '4px'
    }

    return (
        <div onClick={props.onClick} style={articlePreviewContainer}>
            <img style={articleImg} src={props.imageLink}/>
            <div style={articleCaptionContainer}>
                <p style={{...defaultTextStyle,fontWeight:'bold'}}>{props.date} - {props.title}</p>
                <p style={defaultTextStyle}>{props.blurb}</p>
            </div>
        </div>
    )
}

export default ArticlePreview