import ArticleText from "../../components/articleText.component";
import ArticleImgs from "../../components/articleImgs.component";
import ArticleHeader from "../../components/articleHeader.component";

const ScrambledScreen = (props) => {
  const FOLDER = "2405CuillinRidge";

  const screen = {};

  return (
    <div style={screen}>
      <ArticleHeader text="Scrambled" date="25.05.24" />
      <ArticleImgs folder={FOLDER} imgs={["thumbnail"]} />

      <ArticleText
        text={`Classic Rock is Ken Wilson's compilation of eighty timeless 
        rock climbs on the proudest mountain cliffs across Britain. Improbably lower grade routes 
        teasing their way up cracks and ledges to the summits of the most remote peaks in Snowdonia,
         the Lakes, the Highlands and on the Isle of Skye. Classic Rock sits on my coffee table, 
         gnawing at my patience with the City with it's double-spreads of crisp granite and 
         rhyolite. The golden grain of colour-film photos from the 70s evokes such a painful 
         nostalgia. For a moment I'm with my brother, coiling ropes in the quietening evening sun and  
         watching the sun graze over the clumpy slopes of Moel Cynghorion.`}
      />

      <ArticleText
        text={`Page 264 is breath-taking. There are four specks of clashing primary 
        colour lost to a face so engulfing that neither the ground nor the sky are in frame. The climbers are 
        charting a line up a slab of two football fields. Above, cracks and roofs stack up and 
        off the page. The 900ft line in question takes in three routes: Cioch Direct, 
        Arrow Route and Integrity. So where is this mighty cliff? In the remote south-westerly 
        corner of the Isle of Skye, and in the shadow of the Black Cuillin Ridge.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["silouette"]} />

      <ArticleText
        text={`According to Ken the traverse of this ridge gives the best mountaineering
         excursion in Britain, in either winter or summer. It was not the first I'd heard of 
         the ridge. It's been on my winter hit list for a few years - good winter conditions 
         being hard to come by so far west in the North West. Mads and I came up with a wild
          plan. The route Integrity tops out on the Cuillin Ridge, so why not do the first section of the ridge, 
          nip down to the base of Cioch Direct, regain the ridge via 900ft of other-worldly
           gabbro (the grippiest of black rock), and continue the famous scramble to the 
           Sligachan Hotel.`}
      />

      <ArticleText
        text={`The rest of this link-up was a train from London to Inverness, a 
        train from Inverness to Kyle of Lochalsh, a bus to Elgol and then a fishing boat to 
        the Coruisk Memorial Hut on Skye where our adventure would continue on foot. One night 
        above the route, another night on the ridge, back to hotel for a pint, then catch a 
        bus at 4pm.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["ramp","boarding"]} />

      <ArticleText
        text={`To say that we underestimated this itinerary would be a gross 
        understatement.`}
      />

      <ArticleText
        text={`The bus wasn't running and a taxi driver came to the rescue. He got us to Elgol and 
          sorted a discounted crossing on his friends boat. Our booked crossing had 
          broken down. Upon hearing our itinerary the 
        taxi driver told us about his cousin Danny, who had ridden 
        the ridge on his bike. It was in fact not a pub tale, but a real account from Danny MacAskills cousin.`}
      />

      <ArticleText text={`On the boat the seal gazing day trippers had as little of an 
        idea about what we were in for as we did.`}/>

      <ArticleImgs folder={FOLDER} imgs={["boatheadshot", "seal"]} />

      <ArticleText
        text={`In the early afternoon we set off from the shore and soon scrambled ourselves into difficulty with an overly ambitious 
        route-finding decision. Needless to day we hadn't even reached Gars-bheinn - the first summit and the 
        start of the ridge. We roped up: Mads was frustrated and that alarmed me. Unplanned tying in should be a decision that always feels right, sort of bringing you together as a team. It's a question of safety, and when those questions are on the table, nothing else 
        matters and safer feels better. The other things come back onto 
        the table later and you can feel frustrated about them then. When we untied I was annoyed with myself for making the route finding error which had lead to us feeling a bit incompetent so early on in the trip. That being said I'm pleased about 
        every time I got nervous and reached for the rope over those three days on Skye.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["3", "firstlookout"]} />

      <ArticleText
        text={`At the top of Gars-bheinn there was Soay, Egg and Rum. We were stunned and smiling and we were 
        worried about chewing what we had bitten off. Over our shoulders the whole of dragons back was squashed into our single perspective. And though it didn't look that far, our legs felt 895m above the beach and far from the boat meandering back to Elgol.`}
      />
      <ArticleImgs folder={FOLDER} imgs={["dragonsback"]} />
      
      <ArticleText text={``} />
      <ArticleText text={``} />
      <ArticleText text={``} />

      <ArticleImgs folder={FOLDER} imgs={[""]} />
      <ArticleImgs folder={FOLDER} imgs={[""]} />
      <ArticleImgs folder={FOLDER} imgs={[""]} />
      <ArticleImgs folder={FOLDER} imgs={[""]} />
    </div>
  );
};

export default ScrambledScreen;
