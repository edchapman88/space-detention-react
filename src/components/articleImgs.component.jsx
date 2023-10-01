import { useContext, useEffect } from "react"
import { getImgByPageAndInclude } from "../functions/imageSearching.functions"
import { LinksContext } from "../contexts/links.context"
import { makeImgElement } from "../functions/makeImgElement.functions"

const ArticleImgs = props => {
    const { contentLinks } = useContext(LinksContext)
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
                    { contentLinks && makeImgElement(props.folder, props.imgs[0],contentLinks, singleImg) }
                </div>
            }
            </>) 
        case 2:
        default:
            return (
            <div style={{...imgContainer,height:'30vw'}}>
                { contentLinks && 
                    props.imgs.map( imgString => {
                        let img = getImgByPageAndInclude(props.folder,imgString,contentLinks)
                        if (img) {
                            return (<img key={img} style={sideBySideImg} src={img}/>)
                        } else {
                            console.warn(`No image including '${imgString}' found in folder ${props.folder}`)
                        }
                        
                    })
                }
            </div>
            ) 
    }
    
}

export default ArticleImgs


