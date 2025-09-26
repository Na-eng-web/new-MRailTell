import { Box, Grid, Typography } from "@mui/material";
import { motion } from 'framer-motion';

const data = [
  { title: "Connect With Other Railfans", description: "Connect or Chat With another RailfanBy using Discuss option" },
  { title: "Platform For Railway creators", description: "Promote Yourself as a railway creator and Display Your profile in Creators Option" },
  { title: "Explore Indian Railway", description: "You can access all Indian Railway information on RailTell by using Explore Option" },
];
const SecondSection = () => {
  return (
    <Box sx={{ padding: "50px 20px" }}>
      <Typography sx={{ fontSize: "64px", fontWeight: "bold", color: "#0D5A60" }} align="center" gutterBottom>
        What is RailTell ?
      </Typography>
      <Grid container spacing={6} justifyContent="center" sx={{ marginTop: 2, marginBottom: 2 }}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: "0 12px 36px 0 rgba(31, 38, 135, 0.30)",
                background: '#005a99',
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 18, duration: 0.7 }}
              style={{
                padding: 24,
                background: '#0075C1',
                borderRadius: 16,
                boxShadow: '0 4px 20px 0 rgba(31, 38, 135, 0.18)',
                height: '100%',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: '#fff',
                  fontWeight: 700,
                  letterSpacing: 1,
                  textShadow: '0 2px 8px rgba(13,90,96,0.10)',
                  mb: 1.5,
                  fontSize: { xs: 20, md: 24 },
                  transition: 'color 0.3s',
                }}
              >
                {item.title}
              </Typography>
              <Box sx={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #fff 0%, #b2ebf2 100%)', borderRadius: 2, mb: 1.5 }} />
              <Typography variant="body2" sx={{ color: '#e0f7fa', textAlign: 'center', fontSize: 15, lineHeight: 1.6 }}>{item.description}</Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SecondSection;
