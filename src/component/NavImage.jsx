
import { Box, Button, Typography } from '@mui/material';
import { train } from '../assets'; // Import logo
const NavImage = () => {
  return <Box
    sx={{
      backgroundImage: `url(${train})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      position: "relative"
    }}
  >
    <Box sx={{ position: "absolute", bottom: 60, left: 50, width: "25rem" }}>
      <Typography sx={{ fontSize: "36px", fontWeight: 600, color: "white" }}>
        Welcome to the world's largest railfan community!
      </Typography>
      <Button
        sx={{ borderRadius: "50px", bgcolor: "#b3d7d9", color: "#153134" }}
        variant="contained"
      >
        Try for free
      </Button>
    </Box>
  </Box>
}

export default NavImage;
