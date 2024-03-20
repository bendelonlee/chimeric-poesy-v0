import CenteredText from "../CenteredText"
import { Link } from "react-router-dom";

export default function ChimericPoesy({ children }){
  return (
    <div>
      <CenteredText>
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
              }
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