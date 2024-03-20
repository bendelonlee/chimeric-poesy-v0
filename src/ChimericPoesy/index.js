import CenteredText from "../CenteredText"
import { Link } from "react-router-dom";

export default function ChimericPoesy({ children }){
  return (
    <div>

      <CenteredText>
          <h1>Chimeric Poesy</h1>
          <h6>we(l|b)(e)come(well...)</h6>
          <Author 
            name={"li jacobsyn"}
            poesies={[
              {
                path: "womb-envy",
                name: "womb envy",
              },
              {
                path: "qomolangma",
                name: "qomolangma"
              },
              {
                path: "hashtag",
                name: "hashtag"
              }
            ]}
          />

          <Author 
            name={"bogscary"}
            poesies={[
              {
                path: "https://www.instagram.com/reel/C4qD0u7rMFu/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
                name: "saboteurcity",
              },
            ]}
          />

      </CenteredText>
    </div>
  );
};


function Author({name, poesies}){
  const listStyles = {
    display: "flex",
    flexDirection: "column",
  }

  return (
      <div>
        <h2>poesy by {name}</h2>
          <div style={listStyles} >
            {poesies.map((poesy, i) => {
              return <Link key={poesy.path} to={poesy.path}>{i}. {poesy.name}</Link>
            })}
          </div>
      </div>
    )


}