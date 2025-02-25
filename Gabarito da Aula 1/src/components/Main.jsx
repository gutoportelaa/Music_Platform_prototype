import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";


const Main = ({type}) => {
  return (
    <div className="main"> 
      {/* Item List de Artistas */}
      {type === 'artistas' ||type === undefined ? <ItemList title="Artistas" 
      items={6} 
      itemsArray={artistArray} 
      path='/artistas' 
      idPath='/artist' /> : <></>}



      {/* Item List de Músicas */}
      {type === 'songs' || type === undefined ? <ItemList title="Musicas"
       items= {12} 
       itemsArray = {songsArray} 
       path='/songs'
       idPath= '/music' /> : <></>}


      
    </div>
  );
};

export default Main;
