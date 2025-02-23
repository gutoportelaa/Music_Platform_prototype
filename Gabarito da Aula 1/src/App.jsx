import Header from "./components/Header";
import React from 'react'
import Main from './components/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import Song from "./pages/Song";
import Artist from "./pages/Artist";

export const App = () => {
return (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/artits" element= {<Artists />} />
      <Route path="/artist/:id" element= {<Artist />} />
      <Route path="/songs" element= {<Songs />} />
      <Route path="/song/:id" element= {<Song />} />

 

    </Routes>
  </BrowserRouter>
)
};

export default App;
