import "./styles.css";
import MetaText from "../MetaText.js";
import CountdownTimer from "./CountdownTimer";
import cloud from './cloud.gif'

export default function Qomolangma() {
  const interval = 15000; // Transition interval in milliseconds
  // console.log("search", window.location.search);
  // const searchParams = new URLSearchParams(window.location.search);
  // console.log(searchParams.get("annotate"));
  return (
    <div
      className="q-poesy-container"
      style={{
        paddingTop: "80px",
        display: "grid",
        gridTemplateRows: `repeat(3, 1fr)`,
        gap: "54px",
      }}
    >
      <div className="halo-container">
        <div className="halo-container-inner">
          <img className="cloud left" src={cloud} alt="cloud halo"/>
          <img className="cloud right" src={cloud} alt="cloud halo"/>
        </div>

      </div>
      <MetaText isRepeating={false} interval={(interval / 5)} texts={
        [
          "name   the tallest mountain", 
          "name   the tallest mountain", 
          "name   the tallest mountain",
          "name   the tallest mountain",
          "babel  the tallest mountain",
          "name   the tallest mountain",
          "name   the tallest mountain",
          "name   the tallest mountain",
          "oxford the tallest mountain",
          "name   the tallest mountain",
          "name   the tallest mountain",
          "name   the tallest mountain",
          "name   the tallest mountain",
          "Nyigma the tallest mountain",
          "name   the tallest mountain",
          "east   the tallest mountain",
          "name   the tallest mountain",
          "name:  the tallest mountain",
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
    </div>
  );
}
