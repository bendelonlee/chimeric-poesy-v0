import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home.js"
import ChimericPoesy from "./ChimericPoesy"
import WombEnvy from "./ChimericPoesy/WombEnvy"
import Qomolangma from "./ChimericPoesy/Qomolangma"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="chimeric-poesy" element={<Outlet/> }>
          <Route index element={<ChimericPoesy/> }/>
          <Route path="womb-envy" element={<WombEnvy/>}/>
          <Route path="qomolangma" element={<Qomolangma/>}/>
          <Route path="*" element={<div>not found</div> }/>
        </Route>
        <Route path="*" element={<div>not found</div> }/>
      </Routes>

    </BrowserRouter>
  );
}
