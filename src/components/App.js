// import styles
import './../css/styles.min.css';
// import dependencies
import { HashRouter, Routes, Route } from "react-router-dom"

// import components
import Footer from './Footer'
import Navbar from './Navbar';
// import Map from './Map'
// import pages
import Home from './../pages/Home'
import Contact from './../pages/Contact'
import AboutUs from './../pages/AboutUs'
import Faq from './../pages/Faq'
import Services from './../pages/Services'
import StoreFront from '../pages/shop/StoreFront'
import Product from '../pages/shop/Product';
import SearchResults from '../pages/SearchResults';
import ServiceClicked from './ServiceClicked';


// required for mapbox
import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax 
const mapboxgl = require('../../node_modules/mapbox-gl/dist/mapbox-gl.js');
const Map = mapboxgl.Map

mapboxgl.accessToken = 'pk.eyJ1IjoibW9sbHl0eG94IiwiYSI6ImNsM3J3bnh0ODAzbWgzaWw4bmpzaTdxOHEifQ.TSBVHJEKeygThQeJuFEUhA';


const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service/:id" element={<ServiceClicked />} />
                {/* shop routes  */}
                <Route path="/shop" element={<StoreFront />} />
                <Route path="/product/:id" element={<Product />} />
                {/* search route  */}
                <Route path="/search-results/:searchString" element={<SearchResults />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
