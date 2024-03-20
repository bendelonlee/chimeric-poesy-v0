import "./styles.css";
import MetaText from "../MetaText.js";

export default function WombEnvy() {
  const interval = 3000; // Transition interval in milliseconds

  // TODO add warning:
  // WARNING: if you've ever suffered even the basic trauma of human birth, this may be triggering
  // If you've never heard of Kate Hornoy, founder of the American Journal of Psychoanalysis
  // Though now you've heard of her
  // Enter Poesy

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

      <MetaText interval={interval} texts={["womb envy"]} />
      <MetaText interval={interval} texts={[""]} />
      <MetaText interval={interval} texts={[""]} />
      <MetaText
        interval={interval}
        texts={[">", ">", ">", ">", ">", "V", "<", "^"]}
      />
      <MetaText interval={interval} texts={["fo mo", "femme"]} />
      <MetaText
        interval={interval}
        texts={[
          "fear of missing  our",
          "feat of missing  out",
          "fear of missing  our",
          "feat of missing  out",
          "fear of missing  our",
          "feat of missing  out",
          "fear of missing  our",
          "feat of missing  out",
          "he re f  is in / out",
          "feat of kissing  out",
          "feat of lissing  out",
          "feat of lisping  out",
          "feat of lipsing  out",
          "feat of lpising  out",
          "feat of plising  out",
          "feat of blising  out",
          "feat of bissing  out",
          "fear of pissing hour",
        ]}
      />
      <MetaText
        interval={interval}
        texts={[
          "      horney feminine psycholodgy     ",
          "      hornoy feminine psycholepgy     ",
          "      horney feminine psycholoqgy     ",
          "      hornoy feminine psycholeggy     ",
          "      horney feminine psycholoqgy     ",
          "      hornoy feminine psycholedgy     ",
          "      horney feminine psycholobgy     ",
          "      hornoy feminine psycholegibility",
          "      horney femin9ne psycholodgy     ",
          "      hornoy femini9e psycholepgy     ",
          "      horney feminin9 psycholoqgy     ",
          "      hornoy feminine9psycholeggy     ",
          "      horney feminine 9sycholoqgy     ",
          "      hornoy feminine p9ycholedgy     ",
          "      horney feminine ps9cholobgy     ",
          "      hornoy feminine psy9holegibility",
          "      horney feminine psy9holarchy    ",
          "      hornoy feminine psy9hol    y g  ",
          "      horney feminine ps9 hol    y g  ",
          "      hornoy feminine p9s holo   yg   ",
          "      horney feminine 9sy holo   gy   ",
          "      hornoy feminine9sys holo  gay   ",
          "      horney feminin9sys cholo  gey   ",
          "      hornoy femini9sts  chold grey   ",
          "      horney femin9ists  child gray   ",
          "      hornoy feminist's  chilo gry    ",
          "      horney feminist s  child gy     ",
          "      hornoy feminists   prodogy     ",
          "      horney feminins  prodigy     ",
          "      hornoy feminine  ychild guy     ",
          "      horney feminine sychold gy      ",
          "      hornoy feminine psycholdgy      ",
          "      horney feminine psychol ggy     ",
          "      hornoy feminine psychol qgy     ",
          "      horney feminine psycholiqgy     ",
          "      hornoy feminine psycholobottlemy",
        ]}
      />
    </div>
  );
}
