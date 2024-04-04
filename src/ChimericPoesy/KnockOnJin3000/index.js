import "./kojstyles.css";
import MetaText from "../MetaText.js";
import {useState} from "react"
import {useSession} from "../../hooks/useSession.js"

export default function KnockOnJin() {
  useSession("knockonjin")

  const [replayCount, setReplayCount] = useState(0);

  function presenter(){
    if (replayCount === 0){
        return "I"
    } else if (replayCount === 1) {
        return "you"
    } else {
        return "3e"
    } 
  }

  function verb(){
    return presenter() === "I" ? "am" : "are"
  }

  const [presentationIndex, setPresentationIndex] = useState(1);

  const interval1 = 1500; // Transition interval in milliseconds
  const interval2 = 800; // Transition interval in milliseconds
// Copyright 2024 Benjamin Delon Lee / Li Delon Jacobsyn

  const thePremise = replayCount === 0 ? "one" : "the premise"
  const theSetup = replayCount === 0 ? "two" : "the setup"
  const thePunchline = ["three", "the punchline", "the synthesis", "the sin thesis", "the little death"][replayCount % 5]

  return (
    <div
    className="KnockOnJin poesy-container"
    style={{
        display: "flex",
        justifyContent: "center"
    }}
    >
        <div
           style={{
            display: "flex",
            width: "600px",
            textAlign: "left",
            flexDirection: "column"
          }}
        >
            <div style={{height:"55px",  marginTop: "40px",  textAlign: "center"}}>

                <MetaText isRepeating={false} interval={interval1} texts={["-3-"]} />
            </div>
            <div style={{height:"55px"}}>

                <MetaText isRepeating={false} interval={interval1} texts={[""]} />
            </div>
            <div style={{height:"55px"}}>

            <MetaText
                isFrozen={presentationIndex !== 1}
                interval={interval1}
                isPlaying={presentationIndex === 1}
                repeatTimes={8}
                texts={[
                `the education ${presenter()} received from      `,
                `the education ${presenter()} received from knock`
            ]} />
            </div>
            <div style={{height:"55px"}}>

                <MetaText
                    onFinish={() => setPresentationIndex((i) => i === 1 ? 2 : i)}
                    isRepeating={false}
                    isPlaying={presentationIndex === 1}
                    isFrozen={presentationIndex !== 1}
                    interval={interval1} texts={[
                        "knock was superlative",
                        "      was superlative",
                        "knock was invaluable",
                        "      was invaluable",
                        "knock was hard to value",
                        "      was hard to value",
                        "knock was akin to Harvard",
                        "      was akin to Harvard",
                        "knock was not poor",
                        "      was not poor",
                        "knock was a real knee slapper",
                        "      was a real knee slapper",
                        "knock was a real knee slapper",
                        "      was a setup",
                        "knock was no second city",
                        "      was no second city",
                        "knock was about the connections",
                        "      was about the connections",
                        "knock was all in the timing",
                        "      was all in the timing",
                        "knock was second to none",
                        "      was second to none",
                        "knot  was about the connections",
                        "      was about our connections",
                        "knot  was about the connections",
                        "      was about our connections",
                        "knot  was about her connections",
                        "      was about his connections",
                        "knot  was about zir connections",
                        "      was about     connections",
                        "knot  was about     connecting across",
                        "      was about     connections across identity",
                        "knot  was about     connections across class",
                        "      was about     connections across race",
                        "bug   was about     connections across conditions",
                        "      was about     time",
                        "knot  was about     time to be over",
                        "      was abad  joke",
                        "knock was abad choke",
                        "          a dark jedi",
                        "knock was a lukewarm response",
                        "      was about finished",
                        "knock was a lost chance",
                        "      was an old dance",
                        "knock was unfinished",
                        "      was unfinished",
                        `knock was unfinished and still ${presenter() === "I" ? "i" : "u"}s`,
                        `      was unfinished and still ${presenter() === "I" ? "i" : "u"}`,

                ]} />
            </div>
            <div style={{height:"55px", marginTop: "40px"}}>
            {presentationIndex > 2 && <MetaText
                    isFrozen={presentationIndex > 3}
                    isRepeating={true} 
                    interval={interval2} texts={[
                       "",
                       "道",
                       "生",
                       "一",
                       "",
                       "一",
                       "生",
                       "二",
                       "",
                       "二",
                       "生",
                       "三",
                       "",
                       "三",
                       "生",
                       "万",
                       "物",
                       ""
                ]} />}
                 {presentationIndex === 2 && <MetaText isRepeating={false} interval={interval2} texts={["ask", "askiss", "asterisk", "asquery", "asq", "ask"]} />}
            </div>
            <div style={{height:"55px", marginLeft: "200px",  marginTop: "40px"}}>

                 {presentationIndex === 2 && <MetaText
                    onFinish={() => setPresentationIndex(3)}
                    isRepeating={false} 
                    interval={interval2} texts={[
                        "who's there?",
                        presenter() === "I" ? "who am I?" : "who are you?",
                        "what's there?",
                        "what what?",
                        "what's out there?",
                        presenter() === "I" ? "what's form?" : "what's forum?",
                        presenter() === "I" ? "what's for me?" : "what's for u?",
                        "for more",
                        "for more",
                        "like",
                        "3ore",
                        "3ore",
                        "3ore",

                ]} />}
                {presentationIndex > 2 && <MetaText
                    onFinish={() => setPresentationIndex(4)}
                    isRepeating={false}
                    endElement={
                        <button 
                            className="imposing-button"
                            onClick={() => {
                                setReplayCount(c => c + 1)
                                setPresentationIndex(1);
                                
                        }}>
                             again
                        </button>
                    }
                    interval={interval2} texts={[
                       "again",
                       "the way",
                       "gave birth to",
                       thePremise,
                       "",
                       thePremise,
                       "gave birth to",
                       theSetup,
                       "",
                       theSetup,
                       "gave birth to",
                       thePunchline,
                       "",
                       thePunchline,
                       "gave birth to",
                       "ten thousand",
                       "things",
                       replayCount === 0 ? "" : "laughing",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "again",
                       "the dao",
                       "gave birth to",
                       "one",
                       "",
                       "one",
                       "student",
                       "two",
                       "",
                       "two",
                       "gave birth to",
                       "three",
                       "",
                       "three",
                       "shēng",
                       "t(h)en thousand",
                       "things",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       `l${presenter() === "I" ? "i" : "u"}'s education`,
                       ` ${presenter() === "I" ? "i" : "u"}'s education`,
                       "lost and found",
                       "in translation",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                       "",
                ]} />}
            </div>

            <div style={{height:"55px", marginLeft: "360px",  marginTop: "40px"}}>

                {presentationIndex === 3 && <MetaText
                    isRepeating={true} 
                    isFrozen={presentationIndex > 3}
                    interval={4200} texts={[
                        `${verb()} given  42`,
                        `${verb()} giving 42`,
                        `${verb()} given 42 much`,
                        `${verb()} giving 42 much`,
                        `${verb()} still the 'golden student'`,
                        "feel as a shēng don't understand",
                        "fort knox makes you rich",
                        `42 much makes you 6 to the tum`,
                        `but not ${replayCount < 3 ? "lousy" : "Lao Tzu"}`,
                        replayCount < 3 ? "" : `f(l)our students read dao de ch 42`,
                ]} />}
            </div>
        </div>

       
     </div>
  );
}
