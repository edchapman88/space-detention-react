import ArticleText from "../../components/articleText.component";
import ArticleImgs from "../../components/articleImgs.component";
import ArticleHeader from "../../components/articleHeader.component";

const NorwayScreen = (props) => {
  const FOLDER = "2403Norway";

  const screen = {};

  return (
    <div style={screen}>
      <ArticleHeader text="Norway" date="02.03.24" />
      <ArticleImgs folder={FOLDER} imgs={["watersunset"]} />

      <ArticleText
        text={`On the return flight from Tromso the plane was really hot. My legs were wet inside my trousers, I felt claustrophobic and the irrefutable hours before landing were bringing on a low-level panic. After a week of ski-touring it felt eerily similar to quietly shuffling across the middle of a vaste icy slope, muttering to yourself to stay calm and stay on your edges.`}
      />

      <ArticleText
        indent={true} text={`This stressful recital on skinned skis was a lot like tiptoeing out onto a bold traverse of a rock climb. Balancing on a few millimetres along the edge of each ski, 
      untethered and stranded on a windswept slip-and-slide to the valley floor. It felt just like 
      creeping further and further onto a blank slab of rock, glimpsing behind you the rope swaying limply between you and an anxious belayer.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["windswept"]} />

      <ArticleText
        text={`Tromso is in the Arctic Circle. It's further North than the whole of 
      Iceland. Our destination was two hours and two Fjord crossings East of Tromso, on the Lyngen Peninsula. The area is known as the Lygen Alps - a serious winter mountain-scape 
      stepping right out of the Arctic Ocean, promising sea to summit to sea skiing without a chairlift in sight.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["reflection"]} />

      <ArticleText
        text={`It was sort of my first time ski-touring, besides putting skins on my skis once before at the scene of a broken drag lift in Chamonix. I had always imagined zig-zagging up snow slopes in a pair of flat tracks, each the width of a ski, cut into the snow by those who had gone before. Tracks looking like two tiny roads cut into the side of a mountain pass. I thought that if you were breaking trail in fresh snow then making the tracks would come naturally - the skis would do the work. I found out pretty quickly that this was not the case.`}
      />

      <ArticleText
        text={`In hindsight I had enough experience winter climbing to know that this wasn't 
       to be. Kicking up snow slopes in mountaineering boots sometimes only makes a small divot in hard snow, hence why you need spikey crampons to cut deeper for grip. So the same 
       weight spread over two big skis would only compress the very softest of 
       snow into a pair of cleanly cut flat tracks. What I would never have guessed is that hard snow doesn't stop play, it just makes it really scary.`}/>

       <ArticleText
        text={`Skins are synthetic or partially synthetic strips of 
       fabric that are fixed to the bottom of each ski to allow the ski to slide forwards but not 
       backwards - so called because seal skin was originally used. I bought a set of skins from 
       Pomoca. You cut them down from an oversized rectangle by fixing them to the ski and running 
       a specially designed razor along the edges. It was an intoxicating experience - the skins 
       were other-worldly, super-soft on one side, the other coated in a wildly sticky glue that 
       never goes off. The skin is like a big fury Post-it-Note, so you can stick it and 
       re-stick it to the bottom of the skis again and again. The best part was an overwhelmingly 
       potent perfume, doused on the skins leaving the factory.`}
      />

      <ArticleImgs folder={FOLDER} imgs={["olfun"]} />

      <ArticleText text={`On Sunday, March 3rd, we parked right in the centre of a very icy car park on the first day of trip. We were still living out of our suitcases after an overnight stop in Tromso. It felt like all the locals were watching us, all stood near their cars at the edge of the car park, near the snow.`}/>

      <ArticleImgs folder={FOLDER} imgs={["carpark"]} />

      <ArticleText text={`Having just spent some weeks in Scotland walking into climbing routes in trainers with axes and boots in my backpack, I remember a sense of relief and overflowing excitement as we started to see skiable slopes all around Tromso and beyond. With plenty of snow, a big warm cabin, a car, companions to ski with - time surely to just relax and enjoy the week! But it's never quite that simple. There was some pretty rough flu lined up for us along with an unaviodable dose of snowpack anxiety.`}/>

      <ArticleImgs folder={FOLDER} imgs={["ollydistance"]} />
      <ArticleImgs folder={FOLDER} imgs={["axe"]} />
      <ArticleImgs folder={FOLDER} imgs={["belay"]} />
      <ArticleImgs folder={FOLDER} imgs={["bluesky"]} />
      <ArticleImgs folder={FOLDER} imgs={["bootpack"]} />
      <ArticleImgs folder={FOLDER} imgs={["boots"]} />
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
      <ArticleImgs folder={FOLDER} imgs={["ridge"]} />
      <ArticleImgs folder={FOLDER} imgs={["ridgeview"]} />
      <ArticleImgs folder={FOLDER} imgs={["transition"]} />
      <ArticleImgs folder={FOLDER} imgs={["trees"]} />
      <ArticleImgs folder={FOLDER} imgs={["trol"]} />
      <ArticleImgs folder={FOLDER} imgs={["trolsummit"]} />
      <ArticleImgs folder={FOLDER} imgs={["window"]} />
      <ArticleImgs folder={FOLDER} imgs={["windscreen"]} />
    </div>
  );
};

export default NorwayScreen;
