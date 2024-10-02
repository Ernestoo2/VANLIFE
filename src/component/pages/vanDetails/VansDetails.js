import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./VanDetails.css"
const VansDetails = () => {
  const params = useParams()
  const [van, setVan] = useState(null)
useEffect(() => {
  fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
}, [params.id]

)
  return (
    <div className='van-details-container'>
     {van ? (
      <div className="van-detail">
      <img className="imgDetail" src={van.imageUrl} alt="" />
      <i className={`van-type ${van.type} selected`}> {van.type} </i>
       <h2>{van.name}</h2>
       <p className='van-price'><span>${van.price}</span>/day</p> 
       <p> {van.description} </p>
       <button className="link-button">Rent this van</button>
       </div>
     ) 

    : <h2> Loading.....</h2> 
    }
    </div> 
  );
};

export default VansDetails;
