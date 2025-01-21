import React, { useEffect, useState } from 'react'
import { listLocations } from '../services/LocationService';
import LocationCardComponent from './LocationCardComponent';


const ListLocationComponent = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() =>{
        listLocations({page:0, size:5}).then((response) => {
            setLocations(response.data.content);
        }).catch(error => {
            console.error(error);
        });
    }, []);

  return (
    <div className='elements-container container'>
    <h1>Top Locations, Quebec</h1>
    <br/>
    <div className='d-flex'>
        {locations.map((location)=>
        <LocationCardComponent key={location.id} id={location.id} title={location.name} details={location.rockType} image={location.imageUrl} redirect={'/view-location/'}/>
        )}
        
    </div>
    </div>
  )
}

export default ListLocationComponent