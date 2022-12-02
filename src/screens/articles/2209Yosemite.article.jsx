import ArticleText from "../../components/articleText.component"
import ArticleImgs from "../../components/articleImgs.component"
import ArticleHeader from "../../components/articleHeader.component"

const YosemiteFirstTimeScreen = props => {
    const FOLDER = '2209Yosemite'

    const screen = {

    }

    return(
        <div style={screen}>
            <ArticleHeader text='articleName' date='29.09.22'/>
            <ArticleImgs folder={FOLDER} imgs={['thumbnail']}/>

            <ArticleText indent={true} text={`To head to the iconic Yosemite Valley is a romantic dream. The names of the routes
             and the names of the walls are known by climbers and non-climbers alike. 
             Long routes, days and nights spent hanging above hundreds of meters of thin air. Towering blank walls of coarse 
             granite. `}/>
            
            <ArticleText containerStyle={{paddingLeft:'15%',paddingRight:'15%', paddingTop:'0'}}
             text={`“Did you sleep on the wall in one of those hanging tents?”	Yes`}/>
            <ArticleText containerStyle={{paddingLeft:'15%',paddingRight:'15%', paddingTop:'0'}}
             text={`“How do you go to the toilet when you’re up there?” You poo in a bag, put that
              bag in several other bags and carry it to the top with you.`}/>
            <ArticleText containerStyle={{paddingLeft:'15%',paddingRight:'15%', paddingTop:'0'}}
             text={`“Did you climb The Nose on El Cap?” Yes`}/>
            <ArticleText containerStyle={{paddingLeft:'15%',paddingRight:'15%', paddingTop:'0'}}
             text={`“Didn’t someone climb The Nose in under two hours?” Yes. It took us 6 days.`}/>
            <ArticleText containerStyle={{paddingLeft:'15%',paddingRight:'15%', paddingTop:'0'}}
             text={`“Did you free-solo it?” No, what Alex Honnold did on Freerider is more 
             inconceivable to me now than it ever was.`}/>
            <ArticleText containerStyle={{paddingLeft:'15%',paddingRight:'15%', paddingTop:'0'}}
             text={`“Did you have a good time?" Can you be more specific?`}/>

            <ArticleImgs folder={FOLDER} imgs={['fun']}/>

            <ArticleText indent={true} text={`We didn’t see much when we drove into the valley at 
            1am, 25 hours or so after my alarm went off in London. I was keen to get on a big wall.
             I figured since 7am would feel like 3pm we’d be desperate to get going by 8am and 
             should aim to be on the first pitch of Washington Column by 2pm. I thought we 
             should ignore the fact that 2pm would feel like 10pm, and we ought to get used to 
             it anyway. `} />

            <ArticleText text={`2pm came and went and we were still hauling the bags up to our 
            bivy ledge at around 10pm, which did feel like 6am as it transpired. In the morning 
            we looked really tired. And yet the wonders of coffee transformed us.`}/>

            <ArticleImgs folder={FOLDER} imgs={['tiredAlex','teamWashington']}/>

            <ArticleText text={`So where were we and what were we doing? Washington Column is a
             550m tall column of rock beneath North Dome. The route we were on is a classic 
             introduction to big wall climbing in the valley – 11 or so pitches of C1 graded 
             cracks and bolt ladders winding up the exposed South Face. Alex and Stu posed for
              a photo in front of it.`} />

            <ArticleImgs folder={FOLDER} imgs={['washingtonTopo','theColumn']}/>

            <ArticleText text={`It turns out climbing big walls is a bit like playing pin the
             tail on the donkey. It looks straightforward from the valley floor – go there, 
             climb up that bit, go left a bit, find that triangular yellowy bit, then follow
              the crack to the top. Hanging in the middle of the face 24 hours later, there’s
               not a triangular bit in sight and all you’ve got for direction 
               is a hand drawn topo that looks more like a pre-metrication game of snakes 
               and ladders. It’s useful to know 1 meter is about 3 feet - though when you’re 
               jet lagged and you’ve got sun cream in your mouth, dividing 135 by 3 feels like
                the end of the world.  `}/>

            <ArticleImgs folder={FOLDER} imgs={['misty']}/>
            <ArticleText indent={true} text={`If you can follow, we’d made it to the top of the 3rd ladder
             without encountering a snake, which put us at “Dinner Ledge” for our first night 
             sleeping on the wall. The view in the morning was breath-taking. To a degree we
              had set ourselves up for failure on day 2 by not fixing ropes up the two pitches
               above camp the night before. This game of getting a head start on the next 
               day’s climbing is a valuable trick – but climbing into the night above and 
               away from your sleeping bag that is rolled out on a ledge below takes some motivation.
                Day 2 was tough. `}/>

            <ArticleImgs folder={FOLDER} imgs={['kor']}/>

            <ArticleText indent={true} text={`This style of climbing was pretty new to us. When you aim
             for bigger and steeper faces, it becomes unlikely that there is a continuous line from the
             bottom to the top without encountering a few really blank, really hard sections. If you’re 
             not a world-class climber these sections are impassable. Unless there’s another way? That 
             other way is ‘aid-climbing’ and it's a real incentive to get strong enough to avoid it.`} />

            <ArticleText text={`We’ve done lots of ‘free-climbing’, which involves fiddling bits of 
            equipment into cracks and other features of the rock every few meters as you climb. The rope
             is clipped into these bits of gear and it catches you if you fall. When aid-climbing you 
             fix gear to the rock as usual, then attach a little rope ladder to that fixed piece. Now 
             you can climb a few steps up the rope ladder. Precariously balanced in the top steps and
              reaching as high as you can, you place another piece of gear into the rock above. Progress 
              is SLOW. You’re aid-climbing because the rock is too blank and steep to use your hands and
               feet – naturally it’s fiddly work trying to get any of your bits of gear to leverage the 
               tiny features in the rock enough to support your body weight. `}/>
            
            <ArticleImgs folder={FOLDER} imgs={['aiderView1','aiderView2']}/>

            <ArticleText text={`The fun doesn’t end there. If you are the second, you can’t climb up 
            to meet the leader because you can’t climb this bit of rock either. You ascend the rope – 
            easy enough – until you reach one of the pesky bits of gear that the leader left clipped to
             the rope to protect their fall. The rope is super tight because you’re hanging on it, the 
             gear is welded into the rock because your partner bounce-tested it to oblivion for fear of
              life while leading the pitch, and the pitch is so overhanging that down feels like up, 
              you’ve done 30 crunches just to stay upright and you’re beginning to feel a bit sick. 
              You’re pissed off about holding everyone up - all because your ascender is rammed right 
              up into a quickdraw and nothing short of a miracle or a 5-to-1 pulley system is going to 
              get you unstuck. `}/>

            <ArticleText indent={true} text={`It’s safe to say we weren’t very efficient on our first 
            outing. We turned round a few pitches from the top in favour of getting back down to base 
            camp in the valley at a reasonable time. Learning quickly had to involving hating moments 
            of it but not falling out of love with the romantic dream. During our descent, the East 
            Buttress of El Capitan split the final rays of relenting California sunshine, 
            pressing its immense shadow over the valley. `}/>

            <ArticleImgs folder={FOLDER} imgs={['darkAbseil','noseSil']}/>

            <ArticleText indent={true} text={`Time on the ground is time to recharge in the wonderful
             squalor of abundance that we called home for three weeks. A grimy paradise with running 
             water, toilets and bears. Hundred-foot pines shade the shuttle bus, swinging through the 
             campgrounds to the café. Hikers and Gazers with iced coffees - a sight to see gawping at 
             the vast walls. Some of the team had US sim cards, but in my case the Wi-Fi at the café 
             was my only connection with the world beyond. Three weeks was a long time.`}/>

            <ArticleImgs folder={FOLDER} imgs={['darkDinner','squalor']}/>
            



        </div>
    )
}

export default YosemiteFirstTimeScreen