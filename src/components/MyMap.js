import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import geoJson from "./location.json";

// import mapboxgl from "mapbox-gl";
const mapboxgl = require('../../node_modules/mapbox-gl/dist/mapbox-gl.js');
const Map = mapboxgl.Map

mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Marker = ({ onClick, children, feature }) => {
    const _onClick = () => {
        // onClick(feature.properties.description);
    };

    return (
        <button onClick={_onClick} className="marker">
            {children}
        </button>
    );
};

const MyMap = () => {
    const mapContainerRef = useRef(null);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [175.1204876566958, -41.10068180598062],
            zoom: 12,
        });

        // Render custom marker components
        geoJson.features.forEach((feature) => {
            // Create a React ref
            const ref = React.createRef();
            // Create a new DOM node and save it to the React ref
            ref.current = document.createElement("div");
            // Render a Marker Component on our new DOM node
            ReactDOM.render(
                <Marker onClick={markerClicked} feature={feature} />,
                ref.current
            );

            // Create a Mapbox Marker at our new DOM node
            new mapboxgl.Marker(ref.current)
                .setLngLat(feature.geometry.coordinates)
                .addTo(map);
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "top-right");

        // Clean up on unmount
        return () => map.remove();
    }, []);

    const markerClicked = (title) => {
        window.alert(title);
    };

    return <div className="map-container" ref={mapContainerRef} />;
};

export default MyMap;