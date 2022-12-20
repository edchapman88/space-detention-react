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
            <ArticleText indent={true} text={`If you can read the topo, we’d made it to the top of the 3rd ladder
             without encountering a snake, which put us at “Dinner Ledge” for our first night 
             sleeping on the wall. The view in the morning was breath-taking. We
              had set ourselves up for failure on day 2 by not fixing ropes up the two pitches
               above camp the night before. This game of getting a head start on the next 
               day’s climbing is a valuable trick – but climbing into the night above and 
               away from a sleeping bag rolled out on the ledge below takes some motivation.
                Day 2 was tough. `}/>

            <ArticleImgs folder={FOLDER} imgs={['kor']}/>

            <ArticleText indent={true} text={`This style of climbing was pretty new to us. When you aim
             for bigger and steeper faces, it becomes unlikely that there is a continuous line from the
             bottom to the top without encountering a few really blank, really hard sections. If you’re 
             not a world-class climber these sections are impassable. Unless there’s another way? That 
             other way is ‘aid-climbing’ and it's a real incentive to get strong enough to avoid it.`} />

            <ArticleText text={`We’ve done lots of free-climbing, which involves fiddling bits of 
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
            to meet the leader because, suprise suprise, you can’t climb this bit of rock either. You ascend the rope – 
            easy enough – until you reach one of the pesky bits of gear that the leader left clipped to
             the rope to protect their fall. The rope is super tight because you’re hanging on it, the 
             gear is welded into the rock because your partner bounce-tested it to oblivion for fear of
              life while leading the pitch; and the pitch itself is so overhanging that down feels like up, 
              you’ve done 30 crunches just to stay upright and you’re beginning to feel a bit sick. 
              You’re pissed off about holding everyone up - all because your ascender is rammed right 
              up into a quickdraw and nothing short of a miracle or a 5-to-1 pulley system is going to 
              get you unstuck. `}/>

            <ArticleText indent={true} text={`It’s safe to say we weren’t very efficient on our first 
            outing. We turned round a few pitches from the top in favour of getting back down to base 
            camp in the valley at a reasonable time. Learning quickly had to involving hating moments 
            of it, but more importantly - not falling out of love with the romantic dream on day 2 of 23.
             During our descent, the East 
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
            
            <ArticleText indent={true} text={`We blasted up some shorter climbs out of base camp and
             came up with a game plan in the café. There were bigger objectives on our minds. Gus 
             the park ranger recommended the West Face of Leaning Tower. His sentences started and 
             ended with dude and we felt well informed. `}/>

            <ArticleText text={`It was the West Face of Learning Tower. I forgot a rope, and I don’t
             know who forgot the gas. Izzy, Alex and I got a 5am drop-off way a long way from camp. 
             The car slipped into the dark pines as we stood at the side of the road realising
              we were without a static. We couldn’t call Ollie back – and it would have ruined his plans
               if we could. I started to hitch-hike the two hours back to camp. It was light before I got 
               picked up and I'd covered half the distance on foot. I had better luck on my way out of 
               the campsite - rope in hand. I got dropped back to
                the start of the approach with a pack of ramen, a banana, and some Twizzlers. Somehow, I
                 caught up with Alex and Izzy, still coaxing our pig through the boulder fields beneath
                  the sickeningly steep wall above. We still didn’t know we had forgotten the gas.`}/>
            
            <ArticleImgs folder={FOLDER} imgs={['leaningTower','meLT']}/>

            <ArticleText text={`Warren Harding climbed the route in 1961 over a 10-month period. 
            On his first attempt he got hit by rockfall and had to take 6 months off. 
            It took us two days to climb, and a third to descend. We read sometime after our ascent 
            that the recommendation is to spend a day shuttling gear to the start of pitch one. So 
            in retrospect we were doing ok to get from the road to the Awahnee Ledge before sunset.`}/>

            <ArticleImgs folder={FOLDER} imgs={['LTIzzy','LTsunset']}/>

            <ArticleText text={`Graded V 5.7 C3 on a continuously overhung wall, the technically of 
            some of the aid-climbing combined with the unrelenting exposure wall made this climb felt 
            like a true introduction to big wall climbing. I placed my first skyhook on pitch one – an 
            inverted cloak hanger for the uninitiated. Working in an offset micro cam above your head 
            while hanging on this thing feels a bit like trying to diffuse a bomb underwater (or so I 
            imagine).`}/>

            <ArticleImgs folder={FOLDER} imgs={['airJug','air2Jug']}/>

            <ArticleText text={`Those unacquainted with the joys of big-wall climbing won’t know what
             a lower-out is. They are the bread and butter of making sidewards, downwards, or outwards 
             progress on a wall – any direction other than straight up. If a there is a free-hanging 
             rope between my partner above, and I below, and the rock is so steep it is overhung like 
             the walls of a cave; what lies ahead of me is a petrifying rope swing into the abyss. 
             Some tens of minutes later my swing would dimmish to a hang, plum-line below my partner, 
             tied to the end of a rope, hundreds of meters above the ground. The prospect of a swing 
             like this is nerve-wracking, and even the sight of a free hanging rope swaying in the 
             wind in the void behind you is sometimes a bit stomach turning. After a day on an 
             overhung wall like Leaning Tower, you can almost believe gravity has re-orientated 
             itself with the angle of the wall until the mind-bending moments that involve 
             free-hanging ropes - or God forbid someone drops something and it doesn’t go quite in 
             the direction you expect.`}/>

            <ArticleImgs folder={FOLDER} imgs={['darkRope','void']}/>

            <ArticleText text={`Remarkably, darkness brings a degree of surrealism that makes 
            climbing free-hanging ropes into the black void all just like a bit of a good joke. 
            Climbing, however, is scary. Alex flattened his phone blaring funk to fight the fear 
            on the final pitch of day 2.`}/>

            <ArticleImgs folder={FOLDER} imgs={['alexHero']}/>



        </div>
    )
}

export default YosemiteFirstTimeScreen