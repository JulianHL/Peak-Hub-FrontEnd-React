import React from 'react'


const AnnoncementComponent = ({title, details, image, button}) => {
  return (

<div className="container">
  <div className="annoncement container p-0">
    <img src={image} alt="Card image cap"/>
    <div className="annoncement-description">
      <h2 className="card-title">{title}</h2>
      <h5 className="card-text">{details}</h5>
      <a className='btn btn-outline-light'>{button}</a>
    </div>
    </div>
</div>

  )
}

export default AnnoncementComponent