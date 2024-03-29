import "./styles.css";
import MetaText from "../MetaText.js";
import {useSearchParams} from "react-router-dom";
import {reverseString} from "../../helpers.js"

export default function WombEnvy() {
  const [searchParams, ] = useSearchParams();

  const interval = 3000; // Transition interval in milliseconds
// Copyright 2024 Benjamin Delon Lee / Li Delon Jacobsyn
  return (
      <div
        className="WombEnvy poesy-container"
        style={{
          display: "grid",
          gridTemplateRows: `repeat(3, 1fr)`,
          gap: "54px",
        }}
      >
        <MetaText interval={interval} texts={[""]} />
        <MetaText interval={interval} texts={[""]} />
        {searchParams.get("yt") && <MetaText
          isRepeating={false}
          interval={308000}
          texts={[
          "",
          `thank you, ${reverseString(searchParams.get("yt"))}, for say yes to`
          ]}
        />}
        {!searchParams.get("nobreathe") && <MetaText
          isRepeating={false}
          interval={3500}
          texts={[
          "",
          "",
          "",
          "",
          "breathe",
          "breathe",
          "focus",
          "focus",
          "just breathe",
          "just breathe",
          "and let the mind",
          "and let the mind",
          "be",
          "be",
          "",
          "as it is",
          "as it is",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "fear or fomo are not",
          "no, don't try to pretend",
          "you can eliminate",
          "pretend you can eliminate",
          "eliminate fear",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "do you feel",
          "do you feel",
          "like it was",
          "like it was",
          "when your",
          "when your",
          "when your",
          "birth",
          "birth",
          "occurred",
          "occurred",
          "your m",
          "your m",
          "other",
          "other",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "",
          
      ]}
        />}
        {searchParams.get("yt") && <MetaText
          isRepeating={false}
          interval={304000}
          texts={[
          "",
          "birth & poesy"
          ]}
        />}
        <MetaText interval={interval} texts={[""]} />
        
        {searchParams.get("pride") && <MetaText
          isRepeating={false}
          interval={interval}
          texts={[
            "  five minutes                 ",
            "  five minutes please          ",
            "                                      to contemplate",
            "your origins                   to contemplate",
            "your origins                                           ",
            "your origins                                           ",
            "        origins                                           ",
            "        origins                                           ",
            "        o                                                    ",
            "                               ",

          ]}
        />}
        <MetaText interval={interval} texts={[""]} />
        <MetaText
        isRepeating={false} 
        interval={interval} 
        texts={[
          "    fomo is   ", 
          "    fomo is   ",
          "ill fomo is   ", 
          "    fomo      ",
          "    femme     ",
          "la femme      ",
          "la femme      ",
          "était ta maman",
          "était ta maman",
          "la femme was your mother",
          "la femme was your mother",
          "fomo was not your mother, silly", 
          "fomo was not your mother, silly", 
          "la femme was your mother",
          "la femme was your mother",
          "    fomo was  ",
          "    fomo was  ", 
          "    fomo was  ",
          "ill fomo was  ", 
          "    fomo was  ",
          "   the maze   ",
          "   the maze   ",
          "   fomo was looking for more   ",
          "   fomo was looking for more   ",
          "   just breathe like   ",
          "   just breathe like   ",
          "lamaze        ",
          "lamaze        ",
          " amaze        ",
          " amaze        ",
          "                                         ujjayi",
          "                                         ujjayi",
          "    fomo was  ", 
          "    fomo was  ",
          "     a maze   ",
          "     a maze   ",
          "    fear was  ",
          "    fear was  ",
          "         now  ",
          "         now  ",
          "         now  ",
          "  as it is    ",
          "  as it is    ",
          "you are anti-fragile",
          "you are anti-fragile",
          "",
          "",
          "",
          "",
          "",

          ]} />
        <MetaText

          interval={interval}
          texts={
            [
            "fear of missing our",
            "fear of missing out",
            "fear of missing our",
            "fear of missing our",
            ]
          }
          closingText=""
        />
        <MetaText
          isRepeating={false}
          interval={interval}
          texts={[
            "                  mom                   ",
            "                  mom                   ",
            "                  mom                   ",
            "                  mom                   ",
            "                  mom                   ",
            "                  mom                   ",
            "                  mother                ",
            "                  mother                ",
            "                  mother                ",
            "                  mother                ",
            "                   other                ",
            "                   other                ",
            "                   other                ",
            "                   other                ",
            "             first other                ",
            "             first other                ",
            "             first other                ",
            "             first other                ",
            "                  mother                ",
            "                  mother                ",
            "                  mother                ",
            ...(
              searchParams.get("horney") ? [
                "        horney feminine psychology      ",
                "        horney feminine psychology      ",
                "        horney feminine psychology      ",
                "        horney feminine psychology      ",
                "            horney who created amjpa.org",
                "  brilliant horney who created amjpa.org",
                "      under horney who created amjpa.org",
                "appreciated horney who created amjpa.org",
                "       kate horney who created amjpa.org",
                "if you're interested in rediscovering   ",
                "if you're interested in psychoanalysis  ",
                "                amjpa.org               ",  
              ] : [
                "mmmm",
                "mmmmmmm",
                "mmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmm",
                "mmmmmmm",
                "mmmm",
                "mmmmmmm",
                "mmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmm",
                "mmmmmmm",
                "mmmm",
                "mmmm",
                "mmmmmmm",
                "mmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmm",
                "mmmmmmm",
                "mmmm",
                "mmmmmmm",
                "mmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmm",
                "mmmmmmm",
                "mmmm",
                "mmmm",
                "mmmmmmm",
                "mmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmm",
                "mmmmmmm",
                "mmmm",
                "mmmmmmm",
                "mmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmm",
                "mmmmmmm",
                "mmmm",
                "mmmm",
                "mmmmmmm",
                "mmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmmm",
                "mmmmmmmmm",
                "mmmmmmm",
                "mmmm",
                "we are complete"
              ]
            )        
          ]}
        />
        <MetaText
          isRepeating={false}
          interval={1000}
          texts={[
            ""
    
            
          ]}
        />

        {!searchParams.get("nomathrequired") && <MetaText
          isRepeating={false}
          interval={4000}
          texts={[
            ...Array.from(Array(41).keys()).reverse().map(n => (n * 7).toString()),
            "  you thought it would last forever  ",
            "      it lasted     only   280 days  ",
            "      it lasted     only   280 days  ",
            "      it lasted     only   280 days  ",
            "      it lasted     only   280 days  ",
            "      it lasted     only   280 days  ",

            ...searchParams.get("extramath") ? ["  a            pregnancy is 280 days ",
              "  a human      is made in   280 days ",
              "  on average                     ",
              "  a perfect ten lunar cycles     ",
              "  exactly 40 weeks               ",
              "  thank you for your 280 seconds ",

              ...(searchParams.get("iching") ? [
                  "https://divination.com/iching/lookup/40",                 
                ] : [
                  "       thank you for your 280 seconds"
              ]),
            ] : ["  thank you for your 280 seconds "],
          ]}
        />}
      </div>
  );
}
