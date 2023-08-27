import ArticleText from "../../components/articleText.component"
import ArticleImgs from "../../components/articleImgs.component"
import ArticleHeader from "../../components/articleHeader.component"

const ReflectionScreen = props => {
    const FOLDER = '2308reflection'

    const screen = {

    }

    return(
        <div style={screen}>
            <ArticleHeader text='articleName' date='14.08.23'/>
            <ArticleImgs folder={FOLDER} imgs={['thumbnail']}/>

            <ArticleText indent={true} text={``}/>
            <ArticleText text={``}/>

            <ArticleImgs folder={FOLDER} imgs={['']}/>
        </div>
    )
}

export default ReflectionScreen