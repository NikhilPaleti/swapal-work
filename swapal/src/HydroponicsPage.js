import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import HydroCard from "./HydroCard";
import { Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
var w = window.innerWidth;




const HydroponicsPage = () => {
 
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const classes=w>420?"left":"centered"

  return (
    <>
    <div
        style={{
          position: "relative",
          marginTop: w > 420 ? "0vh" : "10vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            maxWidth: w > 420 ? "100%" : "90vw",
            maxHeight: "80%",
           
           
          }}
          src={require("./assets/image10.jpg")}
        />
        <div
          className={classes}
          style={{
            fontSize: w > 420 ? "4rem" : "1rem",
            color:'white',
            fontWeight:'bold',
            height: "auto",
            padding: "2vmax",
            textAlign:w>420?"left": "center",
          }}
        >
          Substainable Hydroponics <br />
          {w > 420 && (
            <>
            <span style={{ fontSize: w > 420 ? "1.5rem" : "0.75rem" }}>Want To Launch Your Own Local Farming Business?</span>
            <br/>
            <Button variant="contained"
                  sx={{
                    height:'8vh',
                    width:'40vh',
                    fontFamily: "Poppins",
                    background: "##A7B6BB",
                    color: "white",
                    borderRadius:'15px'
                    
                  }}
                  onClick={handleClickScroll}
                   >
             See how we can help <span style={{display:'flex',justifyContent:'center'}}><ArrowDownwardIcon/></span></Button>
          </>
          )}
        </div>
      </div>
      <div style={{backgroundColor: "#E9F8F9"}} id="section-1">
      <HydroCard/>
      </div>
    
      <Grid container spacing={0} justifyContent="center" sx={{backgroundColor: "#E9F8F9", paddingTop:w>420?"5vh":"2vh"}}>
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              height: "auto",
              
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
              display: "flex", alignItems: "center",textAlign:w<420 && "center", marginTop:w<420 && "2vh"
            }}
          >
               <Typography>
               <span style={{ fontSize: "2vmax", fontWeight: "bold" }}> Fresh Produce, directly from our farm </span> <br/><br/>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
               </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4.5}
            sx={{
              height: "auto",
              
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
            }}
          >
               <img style={{
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: "0.8",
            borderRadius: "1rem",
          }} src={require("./assets/image13.jpg")}/>
          </Grid>
          </Grid>

          
          <Grid container spacing={0} justifyContent="center" sx={{backgroundColor: "#E9F8F9"}}>
          <Grid
            item
            xs={12}
            md={4.5}
            sx={{
              height: "auto",
              
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
            }}
          >
               <img style={{
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: "0.8",
            borderRadius: "1rem",
          }} src={require("./assets/image10.jpg")}/>
          </Grid>
          <Grid
            item
            xs={12}
            md={5.5}
            sx={{
              height: "auto",
              
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
              display: "flex", alignItems: "center",textAlign:w<420 && "center", marginTop:w<420 && "2vh"
            }}
          >
               <Typography sx={{}}>
               <span style={{ fontSize: "2vmax", fontWeight: "bold" }}> Fresh Produce, directly from our farm </span> <br/><br/>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
               </Typography>
          </Grid>
          
          </Grid>

    
      </>
  )
}

export default HydroponicsPage