import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
// import image1 from "./vans_img/image1.png"
// import image2 from "./vans_img/image2.png"
// import image3 from "./vans_img/image3.jpeg"
// import image4 from "./vans_img/image4.png"
// import image5 from "./vans_img/image5.png"
// import image6 from "../vans_img/image6.png"


import "./vans.css"
import DropdownMenu from '../Dropdown/Dropdown';
const Vans = () => {
  const [vans, setVans] = useState([]);
  // useEffect(() => {
  //   fetch("/api/vans")
  //     .then(res => res.json(),)

  //     .then(data => setVans(data.vans));
  // }, [])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/vans');
      const data = await response.json();
      setVans(data.vans);
    };

    fetchData();
  }, []);
  const vanElements = vans.map(van => (


    <div className='van-tile'>
      <NavLink className="vans-id" 
          to={`/vans/${van.id}`}
          aria-label={  `View details for ${van.name}, 
          priced at $${van.price} per day
          `}
          >
        <div key={van.id} className="van-tile">
          <img className='img' src={van.imageUrl} alt={`Image of ${van.name}`}/>

          <div className="van-info, img1-schema">
            <h3 className=''>{van.name}</h3>

            <p>${van.price}<span>/day</span></p>

          </div>

          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>

      </NavLink>

    </div>


  ))
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <DropdownMenu />
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
};
export default Vans;
//   return (
//     <div className='vans-container'>
//       <h2 className='vans-h2'>Explore our van options</h2>
//       <div className='vans-button-area'>
//         <div className='vans-buttons'>
//           <button className='vans-btn'> Simple</button>
//           <button className='vans-btn'>Luxury</button>
//           <button className='vans-btn'>Rugged</button>
//         </div>
//         <NavLink className="navlink"> Clear filters</NavLink>
//       </div>
//       <div className='vans-itself'>
//         <div className='img1-schema'>
//           <div className='image1'>
//             <img className='img' src={image1} alt='image1' />
//             <div className='row-container'>

//               <div className='row-left'>
//                 <h4 className="h4">Modest Explorer</h4>
//                 <button className='btn-cl1'>Single</button>
//               </div>
//               <div className='row-right'>
//               <p className='cl-p'> $60</p>
//               <p  className='cl-p1'>/day</p>
//               </div>
//             </div>
//           </div>
//           <div className='image2'>
//             <img className='img' src={image2} alt='image2' />
//             <div className='row-container'>

//               <div className='row-left'>
//                 <h4 className="h4">Beach Bum </h4>
//                 <button className='btn-cl2'>Luxury</button>
//               </div>
//               <div className='row-right'>
//                 <p className='cl-p'> $80</p>
//                 <p className='cl-p1'>/day</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='img1-schema'>
//           <div className='image3'>
//             <img className='img' src={image3} alt='image3' />
//             <div className='row-container'>
//               <div className='row-left'>
//                 <h4 className="h4">Reliable Red</h4>
//                 <button className='btn-cl3'>Luxury</button>
//               </div>
//               <div className='row-right'>
//                 <p  className='cl-p'> $100</p>
//                 <p  className='cl-p1'>/day</p>
//               </div>
//             </div>
//           </div>
//           <div className='image4'>
//             <img className='img' src={image4} alt='image4' />
//             <div className='row-container'>
//               <div className='row-left'>
//                 <h4 className="h4">Dreamfinder</h4>
//                 <button className='btn-cl4'>Single</button>
//               </div>
//               <div className='row-right'>
//               <p  className='cl-p'> $65</p>
//                <p  className='cl-p1'>/day</p>
//                </div>
//             </div>
//           </div>
//         </div>
//         <div className='img1-schema'>
//           <div className='image5'>
//             <img className='img' src={image5} alt='image5' />
//             <div className='row-container'>
//               <div className='row-left'>
//                 <h4 className="h4">The Cruiser</h4>
//                 <button className='btn-cl5'>Luxury</button>
//               </div>
//               <div className='row-right'>
//               <p  className='cl-p'> $120</p>
//               <p  className='cl-p1'>/day</p>
//               </div>
//             </div>
//           </div>
//           <div className='image6'>
//             <img className='img' src={image6} alt='image6' />
//             <div className='row-container'>
//               <div className='row-left'>
//                 <h4 className="h4">Green Wonder</h4>
//                 <button className='btn-cl6'>Rugged</button>
//               </div>
//               <div className='row-right'>
//               <p  className='cl-p'> $70</p>
//                <p  className='cl-p1'>/day</p>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

//  export default Vans;
