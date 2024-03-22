import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChimericPoesy from "./ChimericPoesy"
import WombEnvy from "./ChimericPoesy/WombEnvy"
import Qomolangma from "./ChimericPoesy/Qomolangma"
import Hashtag from "./ChimericPoesy/Hashtag"
import Header from "./Header"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<ChimericPoesy/> }/>
          <Route path="womb-envy" 
                 element={
                  <PoesyContainer 
                    poesy={<WombEnvy/>}
                  />}
          />
          <Route path="qomolangma"
                  element={
                  <PoesyContainer 
                    poesy={<Qomolangma/>}
                  />}
          />
          <Route path="hashtag"
                  element={
                  <PoesyContainer 
                    poesy={<Hashtag/>}
                  />}
          />
          <Route path="*" element={<div>not found</div> }/>
      </Routes>

    </BrowserRouter>
  );
}

function PoesyContainer({poesy}){
  return <>
    <Header/>
    {poesy}
  </>
}