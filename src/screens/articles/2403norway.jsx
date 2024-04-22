import ArticleText from "../../components/articleText.component";
import ArticleImgs from "../../components/articleImgs.component";
import ArticleHeader from "../../components/articleHeader.component";

const NorwayScreen = (props) => {
  const FOLDER = "2403Norway";

  const screen = {};

  return (
    <div style={screen}>
      <ArticleHeader text="norway" date="02.03.24" />
      <ArticleImgs folder={FOLDER} imgs={["watersunset"]} />

      <ArticleText
        indent={true}
        text={`What might you find claustrophobic about being sealed in a 
      pressurised cabin, 38,000ft of air beneath you, 400 miles from where you left the ground and 
      400 miles from a spot to safely land? Is the claustrophobia the cabin? Is it the seatbelt, or 
      the impossibility of landing sooner? Is it the distinct lack of alternatives to the inevitable
       option that's unbearably never-ending`}
      />
      <ArticleText
        text={`What it is exactly that makes it claustrophobic? I think it's the dreadful
       realisation and acceptance that there is no alternative. Still the best option is to continue
        forwards, to persevere. Maybe this frightening isolation from alternatives isn't actually 
        claustrophobia, but it's how I’ve always felt it.`}
      />

      <ArticleText
        text={`On the flight back from Tromso in Northern Norway the plane was hot. The 
      air-jets were blowing warm, my thick jeans weren't getting any thinner and the doors weren't 
      going to open any sooner than our planned landing at Luton. That's what got me thinking about 
      claustrophobia on planes, and about uncanny moments of fear and focus in the days prior.`}
      />

      <ArticleText
        text={`To avoid losing any readers right away with such an abstract start!: 
      Inching across steep icy slopes on skinned skis felt eerily like tiptoeing out across a bold 
      traverse on a rock climb. Balancing on a few millimetres along the edge of each ski, 
      untethered and stranded on a windswept slip-and-slide to the valley floor. It felt just like 
      shuffling further onto a blank slab of rock, glimpsing behind you the rope swaying limply in 
      the breeze.`}
      />

      <ArticleText
        text={`Tromso is in the Arctic Circle. It's further North than the whole of 
      Iceland. Our destination was two hours and two Fjord crossings East of Tromso, near a small 
      town called Lyngseidet. The area is known as the Lygen Alps - a serious winter mountain-scape 
      stepping right out of the Arctic Ocean. My camera bag is made by Sea To Summit.`}
      />

      <ArticleText
        text={`I was with my Dad and my Brother, and the plan was to go ski-touring. It 
      was sort of my first time besides putting skins on my skis once before to skin up a piste next
       to a broken drag lift. I had always imagined zig-zagging up snow slopes in a pair of flat 
       tracks, each the width of a ski, cut into the snow by those who had gone before. Tracks 
       looking like two tiny roads cut into the side of a mountain pass. I thought if you were the 
       first people since fresh snow making the tracks would come naturally - the skis would do the 
       work. I found out pretty quickly that this was not the case.`}
      />

      <ArticleText
        text={`In hindsight I had enough experience winter climbing to know this wasn't 
       to be. I know from kicking up snow slopes in mountaineering boots that more often than not 
       the weight of you and your rucksack make only a small divot in the hard snow. So the same 
       weight spread over the surface area of two big skis would only compress the very softest of 
       snow into a pair of cleanly cut flat tracks. What I would never have guessed is that this 
       isn't actually a barrier to progress. Skins are synthetic or partially synthetic strips of 
       fabric that are fixed to the bottom of each ski to allow the ski to slide forwards but not 
       backwards - so called because seal skin was originally used. I bought a set of skins from 
       Pomoca. You cut them down from an oversized rectangle by fixing them to the ski and running 
       a specially designed razor along the edges. It was an intoxicating experience - the skins 
       were other-worldly, super-soft on one side, the other coated in a wildly sticky glue that 
       never goes off. The skin is like a big fury Post-it Note on steroids so you can stick it and 
       re-stick it to the bottom of the skis again and again. The best part: an overwhelmingly 
       potent perfume, the skins smelt incredible - an ace up the sleeve of the Swiss manufacturer 
       that is sure to guarantee repeat customers.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["ollydistance"]} />
      <ArticleImgs folder={FOLDER} imgs={["axe"]} />
      <ArticleImgs folder={FOLDER} imgs={["belay"]} />
      <ArticleImgs folder={FOLDER} imgs={["bluesky"]} />
      <ArticleImgs folder={FOLDER} imgs={["bootpack"]} />
      <ArticleImgs folder={FOLDER} imgs={["boots"]} />
      <ArticleImgs folder={FOLDER} imgs={["carpark"]} />
      <ArticleImgs folder={FOLDER} imgs={["cloudinversion"]} />
      <ArticleImgs folder={FOLDER} imgs={["dadbackdrop", "dadbehind"]} />
      <ArticleImgs folder={FOLDER} imgs={["dunes"]} />
      <ArticleImgs folder={FOLDER} imgs={["edcol"]} />
      <ArticleImgs folder={FOLDER} imgs={["ferry"]} />
      <ArticleImgs folder={FOLDER} imgs={["firstsummit"]} />
      <ArticleImgs folder={FOLDER} imgs={["goodsnow"]} />
      <ArticleImgs folder={FOLDER} imgs={["lastsummit"]} />
      <ArticleImgs folder={FOLDER} imgs={["me"]} />
      <ArticleImgs folder={FOLDER} imgs={["northernlights", "outback"]} />
      <ArticleImgs folder={FOLDER} imgs={["olcol"]} />
      <ArticleImgs folder={FOLDER} imgs={["reflection"]} />
      <ArticleImgs folder={FOLDER} imgs={["ridge"]} />
      <ArticleImgs folder={FOLDER} imgs={["ridgeview"]} />
      <ArticleImgs folder={FOLDER} imgs={["transition"]} />
      <ArticleImgs folder={FOLDER} imgs={["trees"]} />
      <ArticleImgs folder={FOLDER} imgs={["trol"]} />
      <ArticleImgs folder={FOLDER} imgs={["trolsummit"]} />
      <ArticleImgs folder={FOLDER} imgs={["window"]} />
      <ArticleImgs folder={FOLDER} imgs={["windscreen"]} />
      <ArticleImgs folder={FOLDER} imgs={["windswept"]} />
    </div>
  );
};

export default NorwayScreen;
