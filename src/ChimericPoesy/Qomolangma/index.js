import "./styles.css";
import MetaText from "../MetaText.js";
import CountdownTimer from "./CountdownTimer";

export default function Qomolangma() {
  const interval = 15000; // Transition interval in milliseconds
  // console.log("search", window.location.search);
  // const searchParams = new URLSearchParams(window.location.search);
  // console.log(searchParams.get("annotate"));
  return (
    <div
      className="poesy-container"
      style={{
        paddingTop: "80px",
        display: "grid",
        gridTemplateRows: `repeat(3, 1fr)`,
        gap: "54px",
      }}
    >
      <MetaText isRepeating={false} interval={(interval / 5)} texts={
        [
          "name  the tallest mountain", 
          "name  the tallest mountain", 
          "name  the tallest mountain",
          "name  the tallest mountain",
          "babel the tallest mountain",
          "name  the tallest mountain",
          "name  the tallest mountain",
          "name  the tallest mountain",
          "oxfordthe tallest mountain",
          "name  the tallest mountain",
          "name  the tallest mountain",
          "name  the tallest mountain",
          "name  the tallest mountain",
          "Nyigmathe tallest mountain",
          "name  the tallest mountain",
          "east  the tallest mountain",
          "name  the tallest mountain",
          "name: the tallest mountain",
        ]} />
      <MetaText isRepeating={false} interval={interval} texts={[""]} />
      <MetaText isRepeating={false} interval={interval} texts={["", "", "", "Q"]} />
      <MetaText isRepeating={false} interval={interval} texts={["", "", "Q", "OM"]} />
      <MetaText isRepeating={false} interval={interval} texts={["", "Q", "OM", "OLA"]} />
      <MetaText
        isRepeating={false} 
        interval={interval}
        texts={["NOGOQLMMAA", "NOGOLMMAA", "NOGLMAA", "NGMA"]}
      />
      <MetaText isRepeating={false} interval={interval} texts={[""]} />
      <CountdownTimer />
      {/* <MetaText
        interval={3000}
        texts={[
          "",
          "",
          "magma",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "sorry for mumbling",
          "sorry for magmaing",
          "sorry for magaling",
          "sorry for mumbling",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "look ma, no google",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "this is some strange elevator chatter",
          "magmacumme laudely",
          "softly, please",
          "sh!!!",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "magma",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "softly for mumbling",
          "softly for magmaing",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "look ma, no google",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "this is some strange elevator chatter",
          "magmacumme laudely",
          "softly, please",
          "sh!!!",
          "",
          "",
          "",
          "",
          "",
          "never: say you're sorry",
          "always say you're softly",
          // "my ultimately goal:",
          // "to convince the world",
          // "that I wrote the radio sketches",
          // "for sim copter (1996) by maxis",
        ]}
      /> */}
    </div>
  );
}
