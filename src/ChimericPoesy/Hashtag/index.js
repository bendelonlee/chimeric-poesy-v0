import "./hashtag.css";
import MetaText from "../MetaText.js";
import four from "./hashtag-4.png"
import fUpper from "./hashtag-F.png"
import hUpper from "./hashtag-H-upper.png"
import hLower from "./hashtag-h-lower.png"
import hashTag from "./hash1.png"
import ttLower from "./hashtag-tt.png"
import { useSearchParams } from "react-router-dom";


export default function Hashtag() {
  const interval = 1000; // Transition interval in milliseconds
  const [searchParams, ] = useSearchParams();
  searchParams.get("p")

  const replaceRule = (char) => {
    if(char === "h"){
      return <img className="hashtag-letter" src={hLower}/>
    } else if(char === "4"){
      return <img className="hashtag-letter" src={four}/>
    } else if(char === "#"){
      return <img className="hashtag-letter" src={hashTag}/>
    } else if(char === "f"){
      return <img className="hashtag-letter" src={fUpper}/>
    } else if(char === "T"){
      return <img className="hashtag-letter" src={ttLower}/>
    } else if(char === "H"){
      return <img className="hashtag-letter" src={hUpper}/>
    } else {
      return char
    }
  }
  return (
    <div
      className="hashtag-poesy-container"
      style={{
        display: "grid",
        gridTemplateRows: `repeat(3, 1fr)`,
        gap: "54px",
      }}
    >
      <MetaText interval={interval} texts={[""]} />
      <MetaText interval={interval} texts={[""]} />
      <MetaText replaceRule={replaceRule}
              isRepeating={false}
              interval={4000}
              texts={[
                "hash tag, you're rich", 
                "what do you itch for?",
                "pitch me, aTune me or",
                "what are you rich for?",
                "what are you rich for?",
                "what are you rich for?",
                "what are you rich for?",
                // // "4as4 tag, you're ric44",
                // "hash tag, you're itch4",
                // "hash tag, you're it  4",
                // // "hash tag, you'rehatt-y",
                // // "hash tag, you'rehaH-y",
                // // "hash tag, you'reHabby",
                // "hash tag, you'reHabit",
                // // "4as4 tag, you  Habitu",
                // // "4as4 tag, you Habitua",
                // "hash tag, youHabitual",
                // "hash tag, youHabitual",
                // "hash tag,youHabituali",
                // "hash tagyouHabitualize",
                // "hash tagyouHabitualize",
                // "the warsyouHabitualize",
                // "the warsyouHabitualize",
                // "thewardsyouHabitualize",
                // "thewardsyouHabitualize",
                // "thewordsyouHabitualize",
                // "thewordsyouHabitualize",
                // "thswordsyouHabitualize",
                // "thswordsyouHabitualize",
                // "hw orldsyouHabitualize",
                // "or you Habitualize war",
                // "or you Habitualize end",
                // "or y u Habitualize e d",
                // "or y u Ha itualize e d",
                // "or y u Ha itch iye e d",
                // "or y u Ha itch eye e d",
              ]} />
      <MetaText interval={interval} texts={[""]} />
      <MetaText
        isRepeating={!searchParams.get("p")}
        replaceRule={replaceRule}
        interval={800}
        texts={[
          "#",
          "#",
          "4",
          "#",
          "#",
          "h",
          "#",
          "#",
          "H",
          "#",
          "#",
          "#",
          "#",
          "ha",
          "ha",
          "haha",
          "Haha",
          "hahaha",
          "haHahaHaha",
          "haHahaHahaHaha",
          "hahahaHahahahahahaha",
          "haha",
          "haha",
          "ha",
          "aH",
          "H",
          "H",
          "h",
          "h",
          "#",
          "aha",
          "",
          "",
          "",
          `#${searchParams.get("p")}`,
        ]}
      />
      <MetaText interval={interval} texts={[""]} />

      <MetaText
        isRepeating={false}
        replaceRule={replaceRule}
        interval={20000}
        texts={["goof", "go"]}
      />
      <MetaText
        isRepeating={false}
        replaceRule={replaceRule}
        interval={1000}
        texts={[
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          "off        ",
          // "oof        ",
          // "off        ",
          // "oof        ",
          // "off        ",
          // "oof        ",
          // "off        ",
          "oHf        ",
          "oHH        ",
          "HHo        ",
          "HoH        ",
          "oHH        ",
          "HHo        ",
          "H2o        ",
          "H2o        ",
          "H2o        ",
          "H2o        ",
          // "HoH        ",
          // "oHH        ",
          // "HHo        ",
          // "HoH        ",
          // "oHH        ",
          // "HHo        ",
          // "HoH        ",
          // "oHH        ",
          // "HHo        ",
          // "HoH        ",
          // "oHH        ",
          // "HHo        ",
          // "Ho2        ",
          // "o2H        ",
          // "2Ho        ",
          // "Ho2        ",
          // "2Ho        ",
          // "H2o        ",
          // "Ho2        ",
          // "2Ho        ",
          // "o2H        ",
          // "oH2        ",
          // "H2O        ",
          // "H2O        ",
          // "H2O        ",
          // "H2O        ",
          // "H2O        ",
          // "H2O        ",
          // "2HO        ",
          // "oHH        ",
          // "HHo        ",
          // "HoH        ",
          // "oFH        ",
          // "HFo        ",
          // "HoH        ",
          // "oFH        ",
          // "HFo        ",
          // "HoH        ",
          // "oFH        ",
          // "FFo        ",
          // "FoH        ",
          // "oFH        ",
          // "FFo        ",
          // "FoH        ",
          // "oFH        ",
          // "FFo        ",
          // "FoF        ",
          // "oFF        ",
          // "FFo        ",
          // "FoF        ",
          "off & on   ",
          "off &hon   ",
          "off & on   ",
          "off &hon   ",
          "off &hone  ",
          "off& honey ",
          // "off0 honey ",
          // "off& honey ",
          // "off0 honey ",
          // "of10 honey ",
          // "off0 honey ",
          // "of10 honey ",
          // "of10nhoney ",
          // "of10 honey ",
          // "of1enhoney ",
          // "of10nhoney ",
          // "of1enhoney ",
          // "ofte,honey ",
          // "Of1enhoney ",
          // "ofte,honey ",
          // "oftenhoney ",
          // "ofte,honey ",
          // "Oftenhoney ",
          // "oft ,honey ",
          // "oft, honey ",
          // "of,  honey ",
          // "o,f  honey ",
          // "o,f  honey ",
          // ",ff  honey ",
          // "off  honey ",
          // "off  haney ",
          // "off  handy ",
          "off  switch",
          "",
          "",
          "",
          "",
          "",
          "",
          "switch off &gain  ",
        ]}
      />
      <MetaText
        isRepeating={false}
        interval={2000}
        texts={[
          "grid",
          "grid",
          "grid",
          "grid",
          "grid",
          "grid",
          "grid",
          "grid",
          "agrip",
          "&grip",
          // "gidr",
          // "gid ",
          // "gdi ",
          // "gd  ",
          // "g-d ",
          // "gd- ",
          // "gd  ",
          // "g d ",
          // "g   ",
          // "G   ",
          // "G-  ",
          // "G-r ",
          // "Gr  ",
          // "Gr- ",
          // // "Gr-p",
          // "#Grep",
          // "Grip",
          // "grip",
          // "grib",
        ]}
      />
    </div>
  );
}
