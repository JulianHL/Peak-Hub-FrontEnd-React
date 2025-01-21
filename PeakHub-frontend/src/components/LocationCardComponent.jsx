import React from 'react'

const LocationCardComponent = ({id, title, details, image, redirect}) => {
  return (
    <div className="element-card container">
            <a href={`${redirect}${id}`}>
                <div>
                    <img src={image} alt="Card image cap"/>
                </div>
                <div className="element-card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text">{details}</p>
                </div>
            </a>
    </div>
  )
}

export default LocationCardComponent