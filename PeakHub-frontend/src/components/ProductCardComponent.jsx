import React from 'react'

const ProductCardComponent = ({id, title, quantity, price, image, redirect}) => {
  return (
    <div className="element-card container">
            <a href={`${redirect}${id}`}>
                <div>
                    <img src={image} alt="Card image cap"/>
                </div>
                <div className="element-card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">{price} CAD</p>
                </div>
            </a>
    </div>
  )
}

export default ProductCardComponent