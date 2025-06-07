
import { Box, Button, Typography } from '@mui/material';
import { train } from '../assets';
import { motion } from 'framer-motion';

const NavImage = () => {
  const MotionBox = motion(Box), MotionTypography = motion(Typography), MotionButton = motion(Button);
  
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} sx={{
      backgroundImage: `url(${train})`, backgroundSize: "cover", backgroundPosition: "center",
      height: "100vh", width: "100%", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", overflow: "hidden", position: "relative",
      '&::before': {
        content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1
      }
    }}>
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px", maxWidth: "800px" }}>
        <MotionTypography 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          sx={{ fontSize: { xs: "28px", md: "48px" }, fontWeight: 700, color: "white", marginBottom: "2rem", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          Welcome to the world's largest railfan community!
        </MotionTypography>
        <MotionButton
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          sx={{ borderRadius: "50px", bgcolor: "#b3d7d9", color: "#153134", fontSize: "18px", padding: "12px 40px", '&:hover': { bgcolor: "#8fb5b7" } }}
          variant="contained"
        >
          Try for free
        </MotionButton>
      </Box>
    </MotionBox>
  );
}

export default NavImage;
