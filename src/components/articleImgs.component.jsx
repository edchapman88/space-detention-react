import { useEffect } from "react"
import { getImgByPageAndInclude } from "../functions/imageSearching.functions"
import useContentLinks from "../hooks/useContentLinks.hook"


const ArticleImgs = props => {
    const {contentLinks} = useContentLinks()
    const imgContainer = {
        display : 'flex',
        margin: '2vw 5vw',
        justifyContent: 'center',
        width: '90vw',
        // margin: '1vw',
        // marginBottom: '0.5vw'
    }
    const singleImg = {
        width : '90%',
        borderRadius: '4px'
    }
    const sideBySideImg = {
        width: 'auto',
        height: '100%',
        margin: '0 0.5vw',
        borderRadius: '4px'
    }

    switch (props.imgs.length) {
        case 1:
           return (<>
           { contentLinks && 
                <div style={imgContainer}>
                    <img style={singleImg} src={getImgByPageAndInclude(props.folder,props.imgs[0],contentLinks).link}/>
                </div>
            }
            </>) 
        break;
        case 2:
        default:
            return (
            <div style={{...imgContainer,height:'30vw'}}>
                { contentLinks && 
                    props.imgs.map( img => {
                        // console.log(getImgByPageAndInclude(props.folder,img,contentLinks))
                        return (<img key={img} style={sideBySideImg} src={getImgByPageAndInclude(props.folder,img,contentLinks).link}/>)
                    })
                }
            </div>
            ) 
    }
    
}

export default ArticleImgs