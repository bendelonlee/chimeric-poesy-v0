import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="*" element={<div>not found</div> }/>
      </Routes>

    </BrowserRouter>
  );
}
