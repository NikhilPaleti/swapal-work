import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Engineering from "@mui/icons-material/Engineering";

var w = window.innerWidth;

const Body = () => {
  return (
    <>
      <div>
        <div
          style={{
            paddingTop: w > 420 ? "20vh" : "5vh",
            paddingBottom: "5vh",
            marginLeft: "2vw",
            marginRight: "2vw",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={require("./assets/place1.jpg")}
                  style={{
                    height: "25vmax",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                From making strategic decisions to delivering your requirements,
                we are here to help. Using our expertise and deep understanding
                of the industry, you’ll receive real solutions and experience
                true results. Get in touch to book a meeting
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div>
        <div
          style={{
            paddingTop: "5vh",
            paddingBottom: "5vh",
            marginLeft: "2vw",
            marginRight: "2vw",
          }}
        >
          <Typography
            sx={{
              fontSize: "4vmax",
              textAlign: "center",
              paddingBottom: "5vh",
            }}
          >
            Services
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3} sx={{ display: "flex", alignItems: "center" , flexDirection:'column'}}>
              <Grid item xs={12} md={12}>
                <VpnKeyIcon sx={{color:'#1976d2'}} />
              </Grid>
              Facilitation
            </Grid>
            <Grid item xs={6} md={3} sx={{ display: "flex", alignItems: "center", flexDirection:'column' }}>
              <Grid item xs={12} md={12}>
                <Engineering  sx={{color:'#1976d2'}}/>
              </Grid>
              Civil Consultation
            </Grid>
            <Grid item xs={6} md={3} sx={{ display: "flex", alignItems: "center", flexDirection:'column' }}>
              <Grid item xs={12} md={12}>
                <CastForEducationIcon  sx={{color:'#1976d2'}}/>
              </Grid>
              Training
            </Grid>
            <Grid item xs={6} md={3} sx={{ display: "flex", alignItems: "center", flexDirection:'column' }}>
              <Grid item xs={12} md={12}>
              <AgricultureIcon  sx={{color:'#1976d2'}}/>
              </Grid>
              Hydroponics
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Body;
