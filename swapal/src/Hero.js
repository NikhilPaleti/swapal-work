import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

var w = window.innerWidth;


const Hero = () => {
  return (
    <div style={{ background:'black'}}>
    <div style={{ paddingTop:(w>420)?'20vh':'5vh',paddingBottom:(w>420)?'20vh':'5vh',marginLeft:'2vw', marginRight:'2vw'}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ color: "white", fontSize: "4vmax", display:'flex', alignItems:'center'}}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Grid>
          <Grid item xs={12} md={6} sx={{ color: "#1976d2",  }}>
            <img
              src={require("./assets/hero.jpeg")}
              style={{ height:"25vmax", display:'block',marginLeft:'auto',marginRight:'auto' }}
            ></img>
          </Grid>
        </Grid>
      </Box>
    </div>
    </div>
  );
};

export default Hero;
