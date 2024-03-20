import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home.js"
import ChimericPoesy from "./ChimericPoesy"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="chimeric-poesy" element={<ChimericPoesy/> }/>
        <Route path="*" element={<div>not found</div> }/>
      </Routes>

    </BrowserRouter>
  );
}
