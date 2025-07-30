import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';

const Atlas = () => {
  // State to store India's geographical boundary data for map overlay
  const [indiaBoundary, setIndiaBoundary] = useState(null);

  useEffect(() => {
    // Fetch India's GeoJSON boundary data from DataMeet's open-source repository
    // This provides the country outline to overlay on the map
    fetch("https://raw.githubusercontent.com/datameet/maps/master/Country/india-land-simplified.geojson")
      .then(response => response.json())
      .then(data => setIndiaBoundary(data))
      .catch(error => console.error("Error loading India boundary:", error));
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <Box style={{ height: '100vh', padding: 10 }}>
      <MapContainer
        center={[20.5937, 78.9629]} // Geographic center of India
        zoom={5} // Country-level zoom for full India view
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        maxBounds={[[6, 68], [36, 98]]} // Restrict map bounds to Indian subcontinent
      >

        {/* Base Map Layer - CyclOSM provides better visibility for transportation networks */}
        <TileLayer
          attribution='&copy; <a href="https://www.cyclosm.org/">Cyclosm</a> contributors'
          url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
        />

        {/* Railway Infrastructure Layer - Shows actual railway lines and stations */}
        <TileLayer
          attribution='&copy; <a href="https://www.openrailwaymap.org/">OpenRailwayMap</a> contributors'
          url="https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"
        />

        {/* India's Political Boundary - Renders only when GeoJSON data is loaded */}
        {indiaBoundary && (
          <GeoJSON
            data={indiaBoundary}
            style={() => ({
              color: "black",      // Border color
              weight: 1,           // Border thickness
              fillOpacity: 0,      // Transparent fill to show underlying map
            })}
          />
        )}

      </MapContainer>
    </Box>
  );
};

export default Atlas;
