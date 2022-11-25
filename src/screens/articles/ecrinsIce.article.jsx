import ArticleText from "../../components/articleText.component"
import ArticleImgs from "../../components/articleImgs.component"
import ArticleHeader from "../../components/articleHeader.component"

const EcrinsIceScreen = props => {
    const FOLDER = '2202EcrinsIce'
    const screen = {

    }


    return(
        <div style={screen}>
            <ArticleHeader text='Where to look' date='04.02.22'/>
            <ArticleImgs folder={FOLDER} imgs={['thumbnail']}/>
            <ArticleText indent={true} text={`A ringing ear and a bleeding lip. Faint headache, numb toes, burning fingers.
                 Fading light.`}/>
            <ArticleText text={`A chunk of ice, smacked behind the ear, the now bulging base of the skull bone. 
                Whistling, screaming, Catherine wheeling. Feels like my incisor is knocked in a bit. Is the blood 
                from the gum or my lip.`}/>
            <ArticleText indent={true} text={`A sleeper train into the Alps after work on Thursday. My brother and Elin parked
                 beside the frigid platform, 8am, in his freshly converted van. We'll drive up into the Fournel
                  Valley. An icy carpark at 1500m, skirted by a two-meter bank of ploughed snow. Beyond, a corridor
                   of 3000m snowy tops. They tower above a winding path of packed neve - to be tackled on foot.
                    Either side of the path, indistinguishable white stuff: in fact, a thin crust hiding thigh deep 
                    powder, and answering with an exhausting clamber back onto the elusive trail.`}/>
            <ArticleImgs folder={FOLDER} imgs={['walkIn','me.jpg']}/>
            <ArticleImgs folder={FOLDER} imgs={['bootsOn2','bootOn1','elinFaceUp']}/>
            
        </div>
    )
}

export default EcrinsIceScreen