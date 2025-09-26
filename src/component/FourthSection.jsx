
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import one from '../assets/one.jpg';
import three from '../assets/three.jpg';
import two from '../assets/two.jpg';

const images = [
  { src: one, label: 'Locomotive' },
  { src: two, label: 'Maps' },
  { src: three, label: 'History' },
];


const ImageCard = ({ src, label }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      style={{
        width: 380,
        height: 551,
        margin: 16,
        borderRadius: 24,
        overflow: 'hidden',
        position: 'relative',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 24px 64px 0 rgba(0,0,0,0.65), 0 4px 16px 0 rgba(0,0,0,0.22)',
      }}
    >
      <img
        src={src}
        alt={label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: 24,
        }}
      />
      <motion.div
        variants={{
          rest: { scale: 1, y: 0 },
          hover: { scale: 1.13, y: 0 },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: 0,
          width: '100%',
          color: '#fff',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 1 }}>{label}</Typography>
      </motion.div>
    </motion.div>
  );
};

const FourthSection = () => (
  <Box sx={{ padding: "50px 20px" }}>
    <Typography sx={{ fontSize: "64px", fontWeight: "bold", color: "#0D5A60" }} align="center" gutterBottom>Lifeline of the Nation</Typography>
    <Typography sx={{ fontSize: "30px" }} align="center" gutterBottom>A Deep Dive into Locomotives, Rolling Stock, Signalling, Luxury Trains, Railway Zones, New Routes, Maps, and a Storied Past</Typography>
    <Box display="flex" justifyContent="space-around" alignItems="center" sx={{ py: 6, px: 2 }}>
      {images.map(img => (
        <ImageCard key={img.label} src={img.src} label={img.label} />
      ))}
    </Box>
  </Box>
);

export default FourthSection;
