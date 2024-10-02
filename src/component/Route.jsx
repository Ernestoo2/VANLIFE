import React from 'react'
import { Route, Routes } from 'react-router';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Vans from './pages/Vans/vans';
import VansDetails from "./pages/vanDetails/VansDetails";
import "../server"
import JokesApp from './pages/jokes/jokesApp';
import ProductDetail from './pages/ProductDetail';
import Layout from './Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './pages/Host/HostLayout';
import Hostvans from './pages/Host/HostVans';
import HostvansDetails from './pages/Host/HostvansDetails';
import Hostvanslayout from './pages/Host/Hostvanslayout';
import HostvanInfo from './pages/Host/HostvanInfo';
import HostvanPricing from "./pages/Host/HostvanPricing";
import HostvanPhoto from "./pages/Host/HostvanPhotos"

// import StarWars from './component/pages/starWars';

const Router = () => {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VansDetails />} />

        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="jokes" element={<JokesApp />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vans" element={<Hostvans />} />
          <Route path="vans/:id" element={<HostvansDetails />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          
        
        
        <Route path=' :id/info ' element={<Hostvanslayout/>} >
            <Route path=":id/info"  element={<HostvanInfo/>} />
            <Route path=":id/pricing" element={<HostvanPricing />} />
            <Route path=":id/photo" element={<HostvanPhoto />} />
        </Route>
        </Route>
        
        

                {/* <Route path="stars" element={<StarWars/>}></Route> */}

      </Route>
    </Routes>

  )
}

export default Router;