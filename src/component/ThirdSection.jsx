import { Button, Grid, Typography } from '@mui/material';
// VideoBox component (already added above)S
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BlobVideo } from '../assets';
const VideoBox = ({ children }) => (
  <Box
    sx={{
      width: 647,
      height: 364,
      borderTopLeftRadius: '189px',
      borderBottomRightRadius: '182px',
      overflow: 'hidden',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </Box>
);

const ThirdSection = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: "50px 20px", }}>
      <Typography sx={{ fontSize: "64px", fontWeight: "bold", color: "#0D5A60", paddingBottom: 5 }} align="center" gutterBottom>Atlas</Typography>
      <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ bgcolor: '#E7EAEE', py: { xs: 4, md: 8 } }}>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <VideoBox>
            <video
              src={BlobVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </VideoBox>
        </Grid>
        <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }} justifyContent="center">
          <Typography variant="h4" fontWeight={700} gutterBottom textAlign={{ xs: 'center', md: 'left' }}>
            Discover the Best Atlas
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mb={3} textAlign={{ xs: 'center', md: 'left' }}>
            Explore railway lines, under-construction projects, station details, and more—all in one interactive map.
          </Typography>
          <Button variant="contained" size="large" onClick={() => navigate('/atlas')} sx={{ borderRadius: 8, px: 4, fontWeight: 600, bgcolor: '#0D5A60', '&:hover': { bgcolor: '#0075C1' } }}>
            Explore Atlas
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThirdSection;