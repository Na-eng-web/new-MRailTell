import { Box, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON, ZoomControl, LayersControl, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from '@mui/icons-material';

const Legend = () => (
  <Box sx={{
    position: 'absolute',
    bottom: 20,
    left: 20,
    zIndex: 1000,
    background: 'white',
    padding: 2,
    borderRadius: 1,
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  }}>
    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>Legend</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
      <Box sx={{ width: 20, height: 3, background: '#d35400' }} />
      <Typography variant="caption">Main Lines</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
      <Box sx={{ width: 20, height: 3, background: '#2980b9' }} />
      <Typography variant="caption">Branch Lines</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ width: 20, height: 3, background: '#27ae60' }} />
      <Typography variant="caption">Under Construction</Typography>
    </Box>
  </Box>
);

const LoadingOverlay = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CircularProgress />
    </motion.div>
  </Box>
);

const Atlas = () => {
  const [indiaBoundary, setIndiaBoundary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://raw.githubusercontent.com/datameet/maps/master/Country/india-land-simplified.geojson")
      .then(response => response.json())
      .then(data => {
        setIndiaBoundary(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error loading India boundary:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box style={{ height: '100vh', padding: 10, position: 'relative' }}>
        {!mapLoaded && <LoadingOverlay />}
        
        <Box sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1000, display: 'flex', gap: 1, background: 'white', padding: 1, borderRadius: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
          <TextField
            size="small"
            placeholder="Search railway stations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            sx={{ width: 200 }}
          />
          <IconButton size="small" onClick={handleSearch} disabled={isSearching}>
            {isSearching ? <CircularProgress size={20} /> : <Search />}
          </IconButton>
        </Box>

        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%", background: "#f5f5f5" }}
          maxBounds={[[6, 68], [36, 98]]}
          zoomControl={false}
          whenReady={() => setMapLoaded(true)}
        >
          <ZoomControl position="bottomright" />
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
            opacity={0.5}
          />

          {indiaBoundary && (
            <GeoJSON
              data={indiaBoundary}
              style={() => ({
                color: "#2c3e50",
                weight: 2,
                fillOpacity: 0.1,
                fillColor: "#ecf0f1"
              })}
            />
          )}

          <LayersControl position="topright">
            <LayersControl.Overlay checked name="Railway Network">
              <TileLayer
                attribution='&copy; <a href="https://www.openrailwaymap.org/">OpenRailwayMap</a> contributors'
                url="https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png"
                opacity={0.9}
              />
            </LayersControl.Overlay>
          </LayersControl>

          <Legend />
        </MapContainer>
      </Box>
    </motion.div>
  );
};

export default Atlas;
