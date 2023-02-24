import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

var w = window.innerWidth;

const Hero = () => {
  return (
    <div>
      <div
        style={{
          paddingTop: w > 420 ? "20vh" : "5vh",
          paddingBottom: w > 420 ? "10vh" : "5vh",
          marginLeft: "4vw",
          marginRight: "4vw",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                color: "black",
                fontSize: w > 420 ? "3vmax" : "3vmax",
                display: "flex",
                alignItems: "center",
                textAlign:w<420 && 'center'
              }}
            >
              <div className="under" style={{paddingRight:'1vw', paddingTop:w<420&& '3vh',paddingBottom:w<420 && "3vh"}}>
              A company that is considered to be one of the leading consultation firms in the industry.
                  </div>
                
            </Grid>
            <Grid item xs={12} md={6} sx={{ color: "#1976d2" }}>
              <Carousel
                autoPlay={true}
                interval={3000}
                dynamicHeight={"100vh"}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoFocus={true}
                style={{
                  display: "block",
                  paddingTop: "10vh",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div>
                  <img src={require("./assets/image7.jpg")} />
                </div>
                
                <div>
                  <img src={require("./assets/image3.jpg")} />
                </div>
                <div>
                  <img src={require("./assets/image4.jpg")} />
                </div>
                <div>
                  <img src={require("./assets/image1.jpg")} />
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Hero;
