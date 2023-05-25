import { useContext, useEffect, useState } from "react"
import CoverImage from "../components/coverImage.component"
import { LinksContext } from "../contexts/links.context"
import { getImgsByPage, getImgByPageAndInclude } from "../functions/imageSearching.functions"
import NavBar from "../components/navBar.component"
import { useNavigate } from "react-router-dom"
import '../styles/accentButton.style.css';

const HomeScreen = () => {
    const { contentLinks } = useContext(LinksContext)
    const navigate = useNavigate();
    const [ homeImgs, setHomeImgs ] = useState(null)
    const [ coverUrl, setCoverUrl ] = useState(null)

    useEffect(()=> {
        if (contentLinks) {
            setHomeImgs(getImgsByPage('homePage',contentLinks))
            setCoverUrl(getImgByPageAndInclude('homePage','coverImg',contentLinks))
        }
    },[contentLinks])


    return (
        <>
            <NavBar/>
            {coverUrl && <CoverImage imgUrl={coverUrl} text={[
            `Welcome to this tiny pocket of the Internet,`,
            `I hope it brings you something fresh and spacious.`,
            `There are some photos and some stories,`,
            `About adventures into the mountains!`,
            ]}
            button={{
                onClick:()=>{navigate('/Articles')},
                text:'Read more!',
                className:'accentbutton',
                style:{
                    width:'120px',
                    marginTop:'40px',
                    display:'flex',
                    justifyContent:'center'
                },
            }}
            />}
        </>
    )
}

export default HomeScreen