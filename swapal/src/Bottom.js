import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutline from "@mui/icons-material/MailOutline";
var w = window.innerWidth;
const Bottom = () => {
  return (
    <Box
      sx={{
        marginTop: "5vh",
        width: "100%",
        height: "auto",
        backgroundColor: "#537FE7",
        paddingTop: "5vh",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              color="#E9F8F9"
              sx={{
                fontSize: w > 420 ? "1.25rem" : "0.9rem",
                fontWeight: "bold",
                fontFamily: "Poppins",
              }}
            >
              Swapal Facilitators &amp; Promoters Pvt.Ltd | 2023
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#E9F8F9" sx={{ fontFamily: "Poppins" }}>
              We guide you to the land of possibilities.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "2vh" }}>
            <Typography>
              <a target="_blank" rel="noopener" href="https://instagram.com">
                <InstagramIcon sx={{ color: "#E9F8F9" }} />
              </a>{" "}
              <a target="_blank" rel="noopener" href="https://whatsapp.com">
              <WhatsAppIcon sx={{ color: "#E9F8F9" }} /></a>{" "}
              <a target="_blank" rel="noopener" href="mailto:someone@example.com">
              <MailOutline sx={{ color: "#E9F8F9" }} />
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Bottom;
