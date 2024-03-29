import CenteredText from "../CenteredText"
import { Link, useSearchParams } from "react-router-dom";
import Markdown from 'https://esm.sh/react-markdown@9'

import { useEffect, useState } from "react"

export default function ChimericPoesy({ children }){
  const [searchParams, ] = useSearchParams();

  useEffect(() => {
    fetchLiDescription("wombenvy")
    fetchLiDescription("qomolangma")
    fetchLiDescription("hashtag")

  }, []);

  const [descriptions, setDescriptions] = useState({})


  function fetchLiDescription(textName){
    fetch(`text/descriptions/li/${textName}.md`)
      .then((f) => f.text())
      .then((t) => setDescriptions(d => ({...d, ...{[textName]:t}})))
      .catch(console.error);
  }
  
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
                description: descriptions["wombenvy"],
              },
              {
                path: "qomolangma",
                name: "qomolangma",
                description: descriptions["qomolangma"],
              },
              {
                path: "hashtag",
                name: "hashtag",
                search: "p=you%27re%20it",
                description: descriptions["hashtag"],
              }
            ]}
          />

          {searchParams.get("carryBogs") && <Author 
            name={"bogscary"}
            poesies={[
              {
                path: "https://www.instagram.com/reel/C4qD0u7rMFu/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
                name: "saboteurcity",
                // description: description
              },
              {
                path: "https://www.instagram.com/reel/C4vfJyPMoC4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                name: "newstory",
              },
              {
                path: "https://www.instagram.com/reel/C41IL1ast1F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                name: "notcypress"
              }
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
  return (
      <div>
        <h2>poesy by {name}</h2>
          <div style={listStyles} >
            {poesies.map((poesy, i) => {
              return <Poesy poesy={poesy} i={i}/>
            })}
          </div>
      </div>
    )


}


function Poesy({poesy, i}){
  const linkStyles = {
    padding: "9px",
  }
  const [descriptionCssClass, setDescriptionCssClass] = useState("closed-description")

  const toggleDescriptionCssClass = () => {
    setDescriptionCssClass((d) => {
      console.log('d', d)
      if(d === "closed-description"){
        return "open-description"
      } else {
        return "closed-description"
      }
    })
  }
  // console.log("description", poesy.description)
  return <div className="poesy-in-index">
    <Link
      style={linkStyles}
      key={poesy.name}
      onClick={poesy.onClick}
      to={{
        pathname: poesy.path,
        search: poesy.search,
      }}
      >
      {i}. {poesy.name}
    </Link>

    {poesy.description && <button onClick={toggleDescriptionCssClass} className="poesy-description">description</button>}
    
    <div className={descriptionCssClass} style={{maxWidth: "500px"}}>
      <Markdown>
        {poesy.description}
      </Markdown>
      <div style={{height: "40px"}}/>
      <div className="gradient"></div>
    </div>
  </div>
}