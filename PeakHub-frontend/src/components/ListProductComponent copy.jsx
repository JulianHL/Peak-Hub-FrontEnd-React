import React, { useEffect, useState } from 'react'
import ProductCardComponent from './ProductCardComponent';
import { listProducts } from '../services/ProductService';


const ListProductComponent = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        listProducts({page:0, size:5}).then((response) => {
            setProducts(response.data.content);
        }).catch(error => {
            console.error(error);
        });
    }, []);

  return (
    <div className='elements-container container'>
    <h1>Top products, Montreal</h1>
    <br/>
    <div className='d-flex'>
        {products.map((product)=>
        <ProductCardComponent key={product.id} id={product.id} title={product.name} quantity={product.quantity} price={product.price} image={product.imageUrl} redirect={'/view-product/'}/>
        )}
    
    </div>
    </div>
  )
}

export default ListProductComponent