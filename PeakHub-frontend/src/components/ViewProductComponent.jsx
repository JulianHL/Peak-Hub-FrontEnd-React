import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getProduct } from '../services/ProductService';



const ViewProductComponent = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        getProduct(id).then((response) => {
            setProduct(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);
  return (
    <div className='container'>
        <h1>{product.name}</h1>
        <div className='row view-product'>
            <img src={product.imageUrl} alt="Card image cap"/>
            <div>
                <h2>{product.description}</h2>
                <br/>
                <h4>Stock: {product.quantity}</h4>
                <br/>
                <h4>{product.price} CAD</h4>
                <br/>
                <button className='btn btn-info'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default ViewProductComponent