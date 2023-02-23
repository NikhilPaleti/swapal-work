import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import Button from "@mui/material/Button";

import Engineering from "@mui/icons-material/Engineering";

var w = window.innerWidth;

const Body = () => {
  return (
    <>
      <div>
        <div
          style={{
            paddingTop: w > 420 ? "10vh" : "1vh",
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
                  src={require("./assets/image4.jpg")}
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
      <div
        style={{
          paddingTop: w > 420 ? "10vh" : "1vh",
          paddingBottom: w > 420 ? "10vh" : "1vh",
          paddingLeft:'5vw',
          paddingRight:'5vw'
        }}
      >
       
          <Typography
            sx={{
              fontSize: "4vmax",
              textAlign: "center",
              paddingBottom: "5vh",
              fontFamily:'Poppins'
            }}
          >
            <div className="under">Services</div>
            
           
            
          </Typography>

          <Grid container>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                background: "#ebebeb",
                paddingBottom: "5vh",
                paddingLeft:'1vw',
                paddingRight:'1vw',
                
                
              }}
            >
              <Grid item xs={12} md={12}>
                <VpnKeyIcon sx={{ color: "#1976d2", fontSize: "4vmax" ,paddingTop:'2vh'}} />
              </Grid>
              <div
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  paddingBottom: "2vh",
                  
                }}
              >
                Facilitation
              </div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                background: "#ebebeb",
                paddingBottom: "5vh",
                paddingLeft:'1vw',
                paddingRight:'1vw',
               
              }}
            >
              <Grid item xs={12} md={12}>
                <Engineering sx={{ color: "#1976d2", fontSize: "4vmax", paddingTop:'2vh' }} />
              </Grid>
              <div
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "2vh",
                  background: "#ebebeb",
                }}
              >
                Construction Consultancy
              </div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                background: "#ebebeb",
                paddingBottom: "5vh",
                paddingLeft:'1vw',
                paddingRight:'1vw',
                
              }}
            >
              <Grid item xs={12} md={12}>
                <CastForEducationIcon
                  sx={{ color: "#1976d2", fontSize: "4vmax",paddingTop:'2vh' }}
                />
              </Grid>
              <div
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "2vh",
                }}
              >
                Training
              </div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",

                background: "#ebebeb",
                paddingBottom: "5vh",
                paddingLeft:'1vw',
                paddingRight:'1vw',
                
              }}
            >
              <Grid item xs={12} md={12}>
                <AgricultureIcon sx={{ color: "#1976d2", fontSize: "4vmax",paddingTop:'2vh' }} />
              </Grid>
              <div
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "2vh",
                }}
              >
                Hydroponics
              </div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Grid>
          </Grid>
        </div>
      
      <div
        id="testimonial"
        style={{
          display: "flex",

          flexDirection: "column",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          marginTop: "10vh",
          background: "#1976d2",
          height: "auto",

          alignItems: "center",
          fontSize: w > 420 ? "1.5rem" : "1rem",
        }}
      >
        <div
          style={{
            paddingTop: "5vh",

            textAlign: "center",
          }}
        >
          "X has been a wealth of knowledge, extremely approachable and
          simplified a somewhat daunting task. He's been able to provide us with
          clarity so that we can focus on the priorities of our safety
          management system to ensure that we can provide our workers with a
          compliant, safe workplace."
        </div>
        <div
          style={{
            paddingTop: "2vh",
            fontWeight: "500",
            paddingBottom: "2vh",
            textAlign: "center",
          }}
        >
          - James
        </div>
      </div>
      <div
        id="contact"
        style={{
          background: "white",
          paddingTop: w > 420 ? "15vh" : "5vh",
          paddingBottom: "5vh",
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            background: "black",
            height: w > 420 ? "25vh" : "30vh",
            width: w > 420 ? "50vw" : "80vw",
            paddingTop: "3vh",
          }}
        >
          <h2> Get started today</h2>
          <h4>Be a part of our journey</h4>
          <Button variant="contained" sx={{fontFamily:'Poppins'}}>Contact</Button>
        </div>
      </div>
    </>
  );
};

export default Body;
