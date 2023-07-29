import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AgricultureIcon from "@mui/icons-material/Agriculture";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from "@mui/material/Button";


import Engineering from "@mui/icons-material/Engineering";
import { Link } from "react-router-dom";


var w = window.innerWidth;

const Body = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
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
              A company that is considered to be one of the leading consultation firms in the industry.<br/>
              <Button variant="contained"
                  sx={{
                    height:w>420?'8vh':'6vh',
                    width:w>420?'40vh':'30vh',
                    fontFamily: "Poppins",
                    background: "##A7B6BB",
                    color: "white",
                    borderRadius:'15px',
                    marginTop:"2vh"
                    
                  }}
                  onClick={handleClickScroll}
                   >
             See how we can help <span style={{display:'flex',justifyContent:'center'}}><ArrowDownwardIcon/></span></Button>
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
      <div>
        <div
          style={{
            paddingTop: w > 420 ? "10vh" : "1vh",
            paddingBottom: w>420?"5vh":"1vh",
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
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img
                  className="imgshadow"
                  src={require("./assets/image5.jpg")}
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
                sx={{ display: "flex",justifyContent:'center',flexDirection:'column',alignItems: "center",textAlign:w<420 && "center", marginTop:w<420 && "2vh" }}
              >
                 <span style={{ fontWeight:'bold',fontSize: w > 420 ? "1.5rem" : "1rem" }}>Avail our business facilitation services</span>
            <br/>
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
            paddingTop: w > 420 ? "10vh" : "1vh",
            paddingBottom: "5vh",
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
                sx={{ display: "flex",justifyContent:'center',flexDirection:'column',alignItems: "center",textAlign:w<420 && "center", marginTop:w<420 && "2vh" }}
              >
                 <span style={{ fontWeight:'bold',fontSize: w > 420 ? "1.5rem" : "1rem" }}>Avail our business facilitation services</span>
            <br/>
                As one of the leading employment agencies for overseas jobs,
                Swapal offers contingent and permanent job opportunities as well
                as support with international relocation. Get in touch to book a
                meeting
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "center", marginTop:w<420 &&"2vh" }}
              >
                <img
                  className="imgshadow"
                  src={require("./assets/image6.jpg")}
                  style={{
                    height: "25vmax",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></img>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div
        style={{
          paddingTop: w > 420 ? "10vh" : "1vh",
          paddingBottom: w > 420 ? "10vh" : "1vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        <Typography
          sx={{
            fontSize: "4vmax",
            textAlign: "center",
            paddingBottom: w > 420 ? "10vh" : "5vh",
            fontFamily: "Poppins",
          }}
        >
          <div className="under" id="section">Services</div>
        </Typography>

        <Grid container alignItems="center" justifyContent="center">
          <Grid
          className="imgshadow"
            item
            xs={12}
            md={2.5}
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
              background: "white",
              paddingBottom: "5vh",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              margin: w > 420 ?"1vw":'2vmax',
              marginBottom: w < 420 && "2vh",
              borderRadius:'1rem'
            }}
          >
            <Grid item xs={12} md={12}>
              <VpnKeyIcon
                sx={{ color: "#537FE7", fontSize: "4vmax", paddingTop: "3vh" }}
              />
            </Grid>
            <div
              style={{
                fontWeight: "600",
                textAlign: "center",
                paddingBottom: "2vh",
              }}
            >
              <Link style={{textDecoration: 'none',color: "black"}} to={`/facilitation`}>Facilitation</Link>
            </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Grid>
          <Grid
            item
            className="imgshadow"
            xs={12}
            md={2.5}
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
              background: "white",
              paddingBottom: "5vh",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              margin: w > 420 ?"1vw":'2vmax',
              marginBottom: w < 420 && "2vh",
              borderRadius:'1rem'
            }}
          >
            <Grid item xs={12} md={12}>
              <Engineering
                sx={{ color: "#537FE7", fontSize: "4vmax", paddingTop: "3vh" }}
              />
            </Grid>
            <div
              style={{
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "2vh",
                
              }}
            >
              <Link style={{textDecoration: 'none',color: "black"}} to={`/construction`}>Construction Consultancy</Link>
            </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Grid>
          <Grid
            item
            
            className="imgshadow"
            xs={12}
            md={2.5}
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
              background: "white",
              paddingBottom: "5vh",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              margin: w > 420 ?"1vw":'2vmax',
              marginBottom: w < 420 && "2vh",
              borderRadius:'1rem'
            }}
          >
            <Grid item xs={12} md={12}>
              <CastForEducationIcon
                sx={{ color: "#537FE7", fontSize: "4vmax", paddingTop: "3vh" }}
              />
            </Grid>
            <div
              style={{
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "2vh",
              }}
            >
              <Link style={{textDecoration: 'none',color: "black"}} to={`/training`}>Training</Link>
            </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Grid>
          <Grid
            item
            className="imgshadow"
            xs={12}
            md={2.5}
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
              background: "white",
              paddingBottom: "5vh",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              margin: w > 420 ?"1vw":'2vmax',
              marginBottom: w < 420 && "2vh",
              borderRadius:'1rem'
            }}
          >
            <Grid item xs={12} md={12}>
              <AgricultureIcon
                sx={{ color: "#537FE7", fontSize: "4vmax", paddingTop: "3vh" }}
              />
            </Grid>
            <div
              style={{
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "2vh",
              }}
            >
               <Link style={{textDecoration: 'none',color: "black"}} to={`/hydroponics`}>Hydroponics</Link>
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
          color: "#E9F8F9",
          flexDirection: "column",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          marginTop: "10vh",
          background: "#537FE7",
          height: "auto",

          alignItems: "center",
          fontSize: w > 420 ? "1.25rem" : "1rem",
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
          paddingTop: w > 420 ? "15vh" : "5vh",
          paddingBottom:w>420 ?"10vh":"5vh",
        }}
      >
        <div
        className="imgshadow"
          style={{
            color: "white",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            background: "#181823",
            height: w > 420 ? "25vh" : "25vh",
            width: w > 420 ? "50vw" : "80vw",
            paddingTop: "1vh",
            paddingBottom: "1vh",
            borderRadius:'2vmax'
          }}
        >
          <h2> Get started today</h2>
          <h4>Be a part of our journey</h4>
          <Button
            variant="contained"
            sx={{ fontFamily: "Poppins", background: "#537FE7" }}
          >
            <Link style={{textDecoration: 'none',color: "black"}} to={`/contact`}>
            Contact
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Body;
