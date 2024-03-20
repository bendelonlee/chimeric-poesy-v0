import CenteredText from "../CenteredText"
import { Link } from "react-router-dom";

export default function ChimericPoesy({ children }){
  return (
    <div>
      <CenteredText>
          <Author name={"li jacobsyn"}/>

      </CenteredText>
    </div>
  );
};


function Author({name}){
  const listStyles = {
    display: "flex",
    flexDirection: "column",
  }

  return (
      <div>
        <h2>poesy by {name}</h2>
          <div style={listStyles} >
            <Link to="womb-envy">womb envy</Link>
            <Link>qomolangma</Link>      
            <Link>hashtag</Link>          
          </div>
      </div>
    )


}