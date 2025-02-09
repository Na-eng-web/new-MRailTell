import { Close, MenuOutlined, Report, Reviews, Settings } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';
import { logo, train } from './assets'; // Import logo

const navButtons = [
  { label: "Atlas", hasDropdown: false, },
  { label: "Explore", hasDropdown: true, dropdownItems: ["Locomotives", "Train Cars", "Rail Signals", "Luxury Rides", "Rail Zones", "New Routes", "Maps", "IR History"] },
  { label: "Services", hasDropdown: true, dropdownItems: ["Train Routes", "Find Train", "Live Status", "PNR Check", "Tickets"] },
  { label: "Train Hub", hasDropdown: true, dropdownItems: ["Discuss", "View", "News", "Quiz", "Trip Experience"] },
  { label: "Fav creators", hasDropdown: false },
  { label: "Stocks" }
];


const hamMenus = [
  { title: "Settings", icon: Settings },
  { title: "Rate Us", icon: Reviews },
  { title: "Report Issue", icon: Report },
];

function App() {
  const [activeButton, setActiveButton] = useState("Home");
  const [ham, setHam] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown

  return (
    <Box
      sx={{
        backgroundImage: `url(${train})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: "rgba(0, 0, 0, 0.5)",
          position: "relative",
        }}
      >
        <Box display={"flex"} gap={4}>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 40, width: 40 }} />
          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {navButtons.map(({ label, hasDropdown, dropdownItems }) => (
              <Box
                key={label}
                sx={{ position: "relative" }}
                onMouseEnter={() => hasDropdown && setOpenDropdown(label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                <Button
                  color="warning"
                  variant={activeButton === label ? "contained" : "text"}
                  onClick={() => !hasDropdown && setActiveButton(label)}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "white" }}>
                    {label}
                  </Typography>
                </Button>

                {hasDropdown && openDropdown === label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{
                      position: "absolute",
                      top: "120%",
                      left: 0,
                      minWidth: "120px",
                      background: "rgba(0, 0, 0, 0.8)",
                      borderRadius: "5px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      padding: "10px 0",
                      zIndex: 10,
                    }}
                  >
                    {dropdownItems.map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          padding: "8px 16px",
                          color: "white",
                          fontSize: "14px",
                          cursor: "pointer",
                          "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
                          whiteSpace: "nowrap"
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </motion.div>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Hamburger Menu */}
        <IconButton onClick={() => setHam(!ham)} sx={{ color: "white" }}>
          <MenuOutlined />
        </IconButton>
      </Box>

      {/* Sidebar Menu */}
      {ham && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "12rem",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(5px)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            boxShadow: "-4px 0px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setHam(false)} sx={{ color: "white" }}>
              <Close />
            </IconButton>
          </Box>
          {hamMenus.map(({ title, icon: Icon }) => (
            <Box key={title} sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
              <Icon sx={{ color: "white" }} />
              <Typography fontSize={"14px"} color="white">
                {title}
              </Typography>
            </Box>
          ))}
        </motion.div>
      )}

      {/* Welcome Message */}
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
  );
}

export default App;
