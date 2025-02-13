import { Box, Stack, Typography } from "@mui/material"
import { logo, second, second1 } from "../assets"
import { image } from "framer-motion/client"

const SecondSection = () => {
  return <Box sx={{
    backgroundImage: `url(${second})`,
    height: '100Vh',
    backgroundSize: "cover",
  }}>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between", // Correct way for vertical spacing
      height: "100vh", // Ensure full height so space-between works
    }} >
      < Box sx={{ display: "flex", justifyContent: "flex-end", pr: 20, pt: 5 }}>
        <Typography sx={{ fontSize: "60px", color: "white" }} >What is RailTell ?</Typography>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
        {infoData.map(d => {
          return <InfoElement {...d} />
        })}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: 20, pb: 5 }}>
        <Typography sx={{ fontSize: "24px", color: "white", fontWeight: 700 }}>{"Information Of Under Construction Railway Lines"}</Typography>
        <Typography sx={{ fontSize: "18px", color: "white" }}>{"See the info of under construction Railway Lines Like progess, How much work complete Deadline etc by using Upcoming Railway lines Options"}</Typography>
      </Box>
    </Box>
  </Box >
}

export default SecondSection

const InfoElement = ({ image, heading, subheading }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
      <Box component="img" src={image} alt="Logo" sx={{ height: 40, width: 40 }} />
      <Typography sx={{ fontSize: "24px", color: "white", fontWeight: 600 }}>{heading}</Typography>
      <Typography sx={{ fontSize: "18px", color: "white" }}>{subheading}</Typography>
    </Box>
  )
}

const infoData = [
  {
    image: logo,
    heading: "Platform For Railway creators ",
    subheading: "Promote Yourself as a railway creator and Display You profile in Creators Option"
  }, {
    image: logo,
    heading: "Connect With Other Railfan.",
    subheading: "Connect or Chat With another Railfan By using Discuss option "
  }, {
    image: logo,
    heading: "Create Contain using RailTell.",
    subheading: "You can access all Indian Railway information on RailTell by using Explore Option."
  }
]
