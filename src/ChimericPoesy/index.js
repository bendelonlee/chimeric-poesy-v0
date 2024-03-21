import CenteredText from "../CenteredText"
import { Link, useSearchParams } from "react-router-dom";

export default function ChimericPoesy({ children }){
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      
      <CenteredText>
          <h1>Chimeric Poesy</h1>
          <h6>we(l|b)(e)come((2)well...)</h6>
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
                path: "",
                name: "unwritten yet(i(am(willing(to(work(this(ha(za)rd)))))))"
              },
              {
                onClick: () => {
                  console.log('ran')
                  setSearchParams({"carryBogs": "youBet"})
                },
                path: "",
                name: "unwritten still((budd(ha(y)))ing)"
              },
              {
                path: "hashtag",
                name: "hashtag"
              }
            ]}
          />

          {searchParams.get("carryBogs") && <Author 
            name={"bogscary"}
            poesies={[
              {
                path: "https://www.instagram.com/reel/C4qD0u7rMFu/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
                name: "saboteurcity",
              },
            ]}
          />}

          {/* <Author 
            name={"william t hazard"}
            poesies={[
              {
                path: "https://gifrenga.co/",
                name: "the living debt",
              },
            ]}
          /> */}

      </CenteredText>
    </div>
  );
};


function Author({name, poesies}){
  const listStyles = {
    display: "flex",
    flexDirection: "column",
  }
  const linkStyles = {
    padding: "9px",
  }
  


  return (
      <div>
        <h2>poesy by {name}</h2>
          <div style={listStyles} >
            {poesies.map((poesy, i) => {
              return <Link style={linkStyles}key={poesy.name} onClick={poesy.onClick} to={poesy.path}>{i}. {poesy.name}</Link>
            })}
          </div>
      </div>
    )


}