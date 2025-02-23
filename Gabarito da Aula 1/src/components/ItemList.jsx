import React from 'react'
import { artistArray } from '../assets/database/artists'
import SingleItem from './SingleItem'
import { songsArray } from '../assets/database/songs'
import { Link } from 'react-router-dom'

const ItemList = ({title, items, itemsArray, path, idPath}) => {

//  console.log(title, items)
  return (
          <div className="item-list">
            <div className="item-list__header">
              <h2>{title} do Gruto</h2>
              <Link to={path} className="item-list__link" href={path}>
                Mostrar tudo
              </Link>
            </div>
    
            <div className="item-list__container">
            {itemsArray
            .filter((currentValue, index) => index < items)
            .map((currentObj, index) => (<SingleItem idPath = {idPath} {...currentObj} key={`${title}-${index}`}/>
            ))}

            

            </div>
          </div>

    
  )
}

export default ItemList