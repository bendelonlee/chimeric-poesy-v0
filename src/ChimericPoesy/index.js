import CenteredText from "../CenteredText"

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
  <div styles={listStyles}>
    <h2>poesy by {name}</h2>
      <div>
        <a>womb envy</a>
        <a>qomolangma</a>      
        <a>hashtag</a>          
      </div>
  </div>
    )


}