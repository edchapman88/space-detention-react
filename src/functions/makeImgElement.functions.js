import { getImgByPageAndInclude } from "./imageSearching.functions"

export const makeImgElement = ( folder, imgTitleInclude, contentLinksDirectory, style ) => {
    let img = getImgByPageAndInclude(folder,imgTitleInclude,contentLinksDirectory)
    if (img) {
        return <img style={style} src={img}/>
    } else {
        console.warn(`No image including '${imgTitleInclude}' found in folder ${folder}`)
    }
}