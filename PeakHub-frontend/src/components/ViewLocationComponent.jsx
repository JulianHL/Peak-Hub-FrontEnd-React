import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getLocation } from '../services/LocationService';



const ViewLocationComponent = () => {
    const {id} = useParams();
    const [location, setProduct] = useState([]);
    useEffect(() =>{
        getLocation(id).then((response) => {
            setProduct(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);
  return (
    <div className='container'>
        <h1>{location.name}</h1>
        <div className='row view-product'>
            <img src={location.imageUrl} alt="Card image cap"/>
            <div>
                <h2>{location.description}</h2>
                <br/>
                <h4>Difficulty: {location.difficulty}</h4>
                <h4>{location.rockType}</h4>
                <br></br>
                <h3>{location.accessInfo}</h3>
                <br></br>
                <a href='/' className='btn btn-danger'>Go to home</a>
            </div>
        </div>
    </div>
  )
}

export default ViewLocationComponent