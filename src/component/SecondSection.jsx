import { Box, Typography } from "@mui/material";
import { logo, second } from "../assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Configuration data for the three main platform features
const infoData = [{
  image: logo, 
  heading: "Platform For Railway creators",
  subheading: "Promote Yourself as a railway creator and Display You profile in Creators Option"
}, {
  image: logo, 
  heading: "Upcoming Railway Lines",
  subheading: "See the info of under construction Railway Lines Like progess, How much work complete Deadline etc"
}, {
  image: logo, 
  heading: "Explore Railway",
  subheading: "Explore Railway by using Atlas Option and see the Railway Lines on Map"
}];

// Reusable component for displaying feature information
// eslint-disable-next-line react/prop-types
const InfoElement = ({ image, heading, subheading }) => (
  <Box sx={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
    <Box component="img" src={image} alt="Logo" sx={{ height: 40, width: 40 }} />
    <Typography sx={{ fontSize: "24px", color: "white", fontWeight: 600 }}>{heading}</Typography>
    <Typography sx={{ fontSize: "18px", color: "white" }}>{subheading}</Typography>
  </Box>
);

const SecondSection = () => {
  // Motion-enhanced MUI components
  const MotionBox = motion(Box), MotionTypography = motion(Typography);
  
  // Viewport intersection detection for scroll-triggered animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <MotionBox 
      ref={ref} 
      initial={{ opacity: 0 }} 
      animate={isInView ? { opacity: 1 } : { opacity: 0 }} 
      transition={{ duration: 1 }} 
      sx={{
        backgroundImage: `url(${second})`, 
        height: '100vh', 
        backgroundSize: "cover"
      }}>
      
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100vh" }}>
        {/* Section title with slide-in animation from right */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 20, pt: 5 }}>
          <MotionTypography 
            initial={{ x: 100, opacity: 0 }} 
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            sx={{ fontSize: "60px", color: "white" }}>
            What is RailTell ?
          </MotionTypography>
        </Box>
        
        {/* Feature cards with staggered animation */}
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
          {infoData.map((d, index) => (
            <motion.div 
              key={index} 
              initial={{ y: 50, opacity: 0 }} 
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 + 1 }} // Staggered delay for each card
            >
              <InfoElement {...d} />
            </motion.div>
          ))}
        </Box>
        
        {/* Bottom description section */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: 20, pb: 5 }}>
          <Typography sx={{ fontSize: "24px", color: "white", fontWeight: 700 }}>
            Information Of Under Construction Railway Lines
          </Typography>
          <Typography sx={{ fontSize: "18px", color: "white" }}>
            See the info of under construction Railway Lines Like progess, How much work complete Deadline etc by using Upcoming Railway lines Options
          </Typography>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default SecondSection;
