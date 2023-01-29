import NavBar from "../components/navBar.component"
import ArticlePreview from "../components/articlePreview.component";
import { getImgByPageAndInclude } from "../functions/imageSearching.functions";
import { useContext } from "react";
import { LinksContext } from "../contexts/links.context";
import '../styles/articlePreview.style.css'

const ArticlesScreen = () => {
    const { contentLinks } = useContext(LinksContext)

    const imageRefs = [
        {ref:'2202ecrins',
        blurb:'A long short weekend, a steep learning curve and squirty cream.',
        date:'04.02.22',
        title:'Where to look'},
        {ref:'2203benNevis',
        blurb:'Tactics, a tent and a tiring tick list.',
        date:'18.03.22',
        title:'In the pursuit of a lie in'},
        {ref:'2209yosemite1',
        blurb:'',
        date:'29.09.22',
        title:'Land of the Giants: Part One'},
        {ref:'2209yosemite2',
        blurb:'',
        date:'08.10.22',
        title:'Land of the Giants: Part Two'}
        ];
        
    const articleContainer = {
        display: 'flex'
    }

    return (<>
        <NavBar/>
        { contentLinks && 
            <div className='articlesContainer'>
                {imageRefs.map( item => {
                    const {blurb,date,title} = item
                    return <ArticlePreview
                                key={item.ref} 
                                imageLink={getImgByPageAndInclude(
                                                'articleThumbnails',
                                                item.ref,
                                                contentLinks
                                            )?.link}
                                blurb={blurb} date={date} title={title}/>
                })}
            </div>
        }       
    </>)
}

export default ArticlesScreen