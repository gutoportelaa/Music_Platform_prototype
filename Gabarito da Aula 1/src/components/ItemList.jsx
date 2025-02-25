import React from 'react'
import SingleItem from './SingleItem'
import { Link, useLocation} from 'react-router-dom'

const ItemList = ({title, items, itemsArray, path, idPath}) => {
    //  const pathname = useLocation()
    //  console.log(location)
    //  console.log(title, items)
    const pathname = useLocation().pathname
    // console.log(pathname)
    const isHome = pathname === '/'
    const finalItems = isHome ? items :  Infinity


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
            .filter((currentValue, index) => index < finalItems)
            .map((currentObj, index) => (<SingleItem idPath = {idPath} {...currentObj} key={`${title}-${index}`}/>
            ))}

            

            </div>
          </div>

    
  )
}

export default ItemList