import React, { useEffect, useState } from 'react'
import VansDetails from '../vanDetails/VansDetails';
import { Outlet, useParams } from 'react-router-dom';

const VanDetails = () => {
  const [van, setVans] =  useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/host/vans/${params.id}`)
    .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [params.id])


    return (
    <div className=''>
     { van ? (
        <div className=''>
            <img className='' src={van.imageUrl} alt="" />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className=''> <span>${van.price}</span>/day</p>
            <p></p>
        </div>
     )
      
        : <h2>Loading.......</h2>
     }
    </div>
  )
}

export default VanDetails;
