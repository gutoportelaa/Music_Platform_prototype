import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";


const Main = () => {
  return (
    <div className="main">
      {/* Item List de Artistas */}
      <ItemList title="Artistas"
       items= {6} 
       itemsArray = {artistArray} 
       path='/artistas'
       idPath = '/artist'
       />

      {/* Item List de Músicas */}
      <ItemList title="Musicas"
       items= {12} 
       itemsArray = {songsArray} 
       path='/musicas'
       idPath= '/music'

       />

      
    </div>
  );
};

export default Main;
