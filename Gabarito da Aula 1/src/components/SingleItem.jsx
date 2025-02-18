import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const SingleItem = () => {
  return (
    <div className="single-item">
    <div className="single-item__div-image-button ">
        <div className="single-item__div-image">
        <img
            className="single-item__image"
            src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1"
            alt="Imagem do Artista X"
        />
        </div>

        <FontAwesomeIcon
        className="single-item__icon"
        icon={faCirclePlay}
        />
    </div>

    <div className="single-item__texts">
        <div className="single-item__2lines">

        <p className="single-item__title">Grupo Menos é Mais</p>
        <p className="single-item__sub">Artista</p>
        </div>
    </div>
    </div>


  )
}

export default SingleItem