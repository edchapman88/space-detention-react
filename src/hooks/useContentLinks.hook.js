import { useEffect, useState } from "react";
import getAllContentLinks from "../api/getContentLinks.api";
import { linksFormatter } from "../functions/contentLinkFormatting.functions";
import { items } from "./itemsDev";

const useContentLinks = () => {

    const [ contentLinks, setContentLinks ] = useState(null)

    async function getAndSetLinks( stateSetter ) {

        // const items = await getAllContentLinks()
        // console.log(items)
    
        stateSetter(linksFormatter(items))
    }

    useEffect(()=>{
        getAndSetLinks(setContentLinks)
    },[])

    return {
        contentLinks,
        setContentLinks
    }
}

export default useContentLinks