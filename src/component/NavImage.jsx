
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { heroVideo } from '../assets';

const NavVideo = () => {
  const MotionBox = motion(Box), MotionTypography = motion(Typography), MotionButton = motion(Button);

  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} sx={{
      height: "100vh", width: "100%", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", overflow: "hidden", position: "relative"
    }}>
      {/* Background Video */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <video
          src={heroVideo} autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1 }} />
      </Box>
      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px", maxWidth: "800px" }}>
        <MotionTypography
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          sx={{ fontSize: { xs: "28px", md: "48px" }, fontWeight: 700, color: "white", marginBottom: "2rem", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Welcome to the world's largest railfan community!
        </MotionTypography>
      </Box>
    </MotionBox>
  );
}

export default NavVideo;
