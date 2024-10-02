import { Response } from 'miragejs';
import React, { useEffect, useState } from 'react'
import { NavLink , Link} from 'react-router-dom';

const Hostvans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/host/vans");
      const data = await response.json();
      setVans(data.vans)
    } 
    fetchData();
    
  }, [])
  const HostvanElements = vans.map( van => (

      <div className='van-tile'>
        <Link className="host-van-link-wrapper" 
          to={`/host/vans/${van.id}`}
          aria-label={  `View details for ${van.name}, 
          priced at $${van.price} per day
          `}
          >
        <div key={van.id} className="host-van-single">
          <img className='img' src={van.imageUrl} alt={`Photo of ${van.name}`}/>

          <div className="host-van-info, img1-schema">
            <h3 className=''>{van.name}</h3>

            <p>${van.price}<span>/day</span></p>

          </div>

          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>

      </Link>

      </div>
  ))
  return (
    <section>
      <h1 className='host-vans-title'> Your Listed Vans</h1>
      <div className='host-vans-list'>
          { 
            vans.length > 0 ? (
              <section>
                {HostvanElements}
              </section>
            )
            : (<h2> Loading......</h2>)
          }
      </div>    
    </section>
  )
}

export default Hostvans;
