import { Box } from '@mui/material';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';

const Atlas = () => {
  const [indiaBoundary, setIndiaBoundary] = useState(null);

  useEffect(() => {
    // Fetch India's GeoJSON boundary
    fetch("https://raw.githubusercontent.com/datameet/maps/master/Country/india-land-simplified.geojson")
      .then(response => response.json())
      .then(data => setIndiaBoundary(data))
      .catch(error => console.error("Error loading India boundary:", error));
  }, []); // Empty dependency array to run only once on mount

  return (
    <Box style={{ height: '100vh', padding: 10 }}>
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        maxBounds={[[6, 68], [36, 98]]}
      >

        {/* Base Map - Cyclosm for better transport visibility */}
        <TileLayer
          attribution='&copy; <a href="https://www.cyclosm.org/">Cyclosm</a> contributors'
          url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
        />

        {/* Indian Railways Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openrailwaymap.org/">OpenRailwayMap</a> contributors'
          url="https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"
        />

        {/* India's Boundary as GeoJSON */}
        {indiaBoundary && (
          <GeoJSON
            data={indiaBoundary}
            style={() => ({
              color: "black",
              weight: 1,
              fillOpacity: 0,
            })}
          />
        )}

      </MapContainer>
    </Box>
  );
};

export default Atlas;
