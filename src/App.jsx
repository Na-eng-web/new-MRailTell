import { use, useState } from 'react'
import './App.css'
import { Box, Button, Menu, Typography } from '@mui/material'
import { MenuOutlined, Report, Reviews, Settings } from '@mui/icons-material';
import { train, trainVideo } from './assets';

function App() {
  const [activeButton, setActiveButton] = useState("Home");
  const [ham, setHam] = useState(false);
  return (
    <Box sx={{
      backgroundImage: `url(${train})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "2px solid black",
      height: "100vh",

    }} >
      <Box sx={{ position: "absolute", bottom: 60, left: 50 }} width={"25rem"}>
        <Typography sx={{ fontSize: "36px", fontWeight: 600, color: "white" }}> Welcome to the world's largest railfan community!
        </Typography>
        <Button sx={{ borderRadius: "50px", bgcolor: "#b3d7d9", color: "#153134" }} variant='contained'>Try for free</Button>
      </Box>
      <Box sx={{ py: "20px", minHeight: "100vh", width: ham ? "10rem" : "0", transition: "width 1s", display: "flex", flexDirection: "column", gap: 1, }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* <MenuOutlined onClick={() => setHam(!ham)} sx={{ color: "white" }} /> */}
          <Box sx={{ display: "flex", gap: 5, paddingLeft: ham ? "10rem" : "0", transition: "All 1s" }}>
            {navButtons.map((button) => (
              <Button
                color='warning'
                variant={activeButton == button ? "text" : "outlined "}
                onClick={() => setActiveButton(button)}>
                <Typography
                  sx={{
                    fontSize: "18px", fontWeight: 600,
                    color: activeButton == button ? "auto" : "white"
                  }}>
                  {button}
                </Typography>
              </Button>))}
          </Box>
        </Box>

        <Box sx={{
          minHeight: "100vh",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(2px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: " 0 25px 25px 0",
        }} >
          <Box p={1} >
            {hamMenus.map((button) => (
              <Box sx={{ display: !ham ? "none" : "flex", alignItems: "center", gap: 2, py: 0.5 }} key={button.title}>
                {<button.icon sx={{ color: "white" }} />}
                <Typography fontSize={"14px"} color='white'>{button.title}</Typography>
              </Box>))
            }</Box>
        </Box>

      </Box >
      <iframe src={trainVideo} />
    </Box>
  )
}

export default App


const navButtons = ["Home", "Atlas", "About", "Contact", "login"]
const hamMenus = [
  {
    title: "Setting",
    icon: Settings,
  }, {
    title: "Rate us",
    icon: Reviews
  }, {
    title: "Report issue",
    icon: Report
  }
]
