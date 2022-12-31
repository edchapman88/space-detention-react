import { useContext, useEffect, useState } from "react"
import CoverImage from "../components/coverImage.component"
import { LinksContext } from "../contexts/links.context"
import { getImgsByPage, getImgByPageAndInclude } from "../functions/imageSearching.functions"
import NavBar from "../components/navBar.component"

const HomeScreen = () => {
    const { contentLinks } = useContext(LinksContext)

    const [ homeImgs, setHomeImgs ] = useState(null)
    const [ coverUrl, setCoverUrl ] = useState(null)

    useEffect(()=> {
        if (contentLinks) {
            console.log(contentLinks)
            setHomeImgs(getImgsByPage('homePage',contentLinks))
            setCoverUrl(getImgByPageAndInclude('homePage','coverImg',contentLinks).link)
        }
    },[contentLinks])


    return (
        <>
            <NavBar/>
            {coverUrl && <CoverImage imgUrl={coverUrl} text={[
            `Welcome to a place of space.`,
            `Look, but don't become,`,
            `Feel, but don't need,`,
            `Continue, explore.`]} />}
        </>
    )
}

export default HomeScreen