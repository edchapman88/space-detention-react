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
        indent={true}
        text={`Classic rock is Ken Wilson's compilation of eighty timeless 
        rock climbs on the proudest mountain cliffs across Britain. Improbably lower grade routes 
        teasing their way up cracks and ledges to the summits of the most remote peaks in Snowdonia,
         the Lakes, the Highlands and the Isle of Skye. Classic rock sits on my coffee table, 
         gnawing at my patience with the City with it's double-spreads of crisp granite and 
         rhyolite. The golden grain of colour-film photos from the 70s evokes such a painful 
         nostalgia! For a moment I'm coiling ropes in the quietening evening sun with my brother, 
         watching the sun graze over the clumpy slopes of Moel Cynghorion from atop Clogwyn Du'r 
         Arddu.`}
      />

      <ArticleText
        text={`Page 264 is breath-taking. There are four specks of clashing primary 
        colour lost to a face so engulfing that even the sky has not escaped. The climbers are 
        charting a line up a slab of two football fields. Above, cracks and roofs stack up to 
        the top of the page. The 900ft line in question takes in three routes: Cioch Direct, 
        Arrow Route and Integrity. So where is this mighty cliff? In the remote South Westerly 
        corner of the Isle of Skye, and in the shadow of the Black Cuillin Ridge.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["silouette"]} />

      <ArticleText
        text={`According to Ken the traverse of this ridge gives the best mountaineering
         excursion in Britain, in either winter or summer. It was not the first I'd heard of 
         the ridge. It's been on my winter hit list for a couple of years - good winter conditions 
         being hard to come by so far West in the North West. Mads and I came up with a wild
          plan. Integrity tops out on the ridge, so why not do the first section of the ridge, 
          nip down to the base of Cioch Direct, regain the ridge via 900ft of other-worldly
           gabbro (the grippiest of black rock), and continue the famous scramble back to the 
           Sligachan Hotel.`}
      />

      <ArticleText
        text={`The rest of this link-up was a train from London to Inverness, a 
        train from Inverness to Kyle of Lochalsh, a bus to Elgol and then a fishing boat to 
        the Coruisk Memorial Hut on Skye where our adventure would continue on foot. One night 
        above the route, another night along the ridge, back to hotel for a pint, then catch a 
        bus at 4pm.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["boarding"]} />

      <ArticleText
        text={`To say that we underestimated this itinerary would be a gross 
        understatement.`}
      />

      <ArticleText
        text={`The bus it seems wasn't running. A taxi driver came to the rescue - 
        for the first time when he picked us up, for the second time when he got us a last 
        minute slot on another fishing boat. Our fishing boat it seems, wasn't running. The 
        taxi driver upon hearing our itinerary told us about his cousin Danny, who had ridden 
        the ridge on his bike. On the boat the seal gazing day trippers had as little of an 
        idea about what we were in for as we did.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["boatheadshot", "seal"]} />

      <ArticleText text={``} />

      <ArticleImgs folder={FOLDER} imgs={[""]} />
    </div>
  );
};

export default ScrambledScreen;
