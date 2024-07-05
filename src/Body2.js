import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AgricultureIcon from "@mui/icons-material/Agriculture";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";

import Engineering from "@mui/icons-material/Engineering";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

var w = window.innerWidth;


const Body2 = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("section");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const classes = w > 420 ? "lefthome" : "centered";
  return (
    <>
      <div
        style={{
          position: "relative",
          marginTop: "0vh",
          marginBottom: w < 420 && "5vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel
          autoPlay={true}
          interval={3000}
          //dynamicHeight={"100vh"}
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
            <img src={require("./assets/image_scope.jpg")} />
          </div>
        </Carousel>
        <div
          className={classes}
          style={{
            fontSize: w > 420 ? "4rem" : "1rem",
            color: "white",
            fontWeight: "bold",
            height: "auto",
            padding: "2vmax",
            textAlign: w > 420 ? "left" : "center",
          }}
        >
          A company providing solutions on multiple fronts. <br />
          {w > 420 && (
            <>
              <Button
                variant="contained"
                sx={{
                  height: "8vh",
                  width: "40vh",
                  fontFamily: "Poppins",
                  background: "##A7B6BB",
                  color: "white",
                  borderRadius: "15px",
                }}
                onClick={handleClickScroll}
              >
                See how we can help{" "}
                <span style={{ display: "flex", justifyContent: "center" }}>
                  <ArrowDownwardIcon />
                </span>
              </Button>
            </>
          )}
        </div>
      </div>
      <div id="section">
        <div
          style={{
            paddingTop: w > 420 ? "10vh" : "1vh",
            paddingBottom: w > 420 ? "5vh" : "1vh",
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
                  src={require("./assets/image_nurseworking.jpg")}
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: w < 420 && "center",
                  marginTop: w < 420 && "2vh",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: w > 420 ? "1.5rem" : "1rem",
                  }}
                >
                  Overseas Recruitment Of Healthcare Professionals
                </span>
                <br />
                The need for Indian Nurses in the western countries has
                increased tremendously post COVID. India, because of its vast
                population and availability of skilled professionals, has been
                able to meet this requirement of the developed countries.
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
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: w < 420 && "center",
                  marginTop: w < 420 && "2vh",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: w > 420 ? "1.5rem" : "1rem",
                  }}
                >
                  
                </span>
                <br />
                We, at Swapal Facilitators and Promoters pvt.Ltd, understand
                what a dream of overseas career means to any individual and so
                put our heart and soul to give you the best possible service.
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: w < 420 && "2vh",
                }}
              >
                <img
                  className="imgshadow"
                  src={require("./assets/image_nursepose.jpg")}
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
          <div className="under">Services</div>
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
              margin: w > 420 ? "1vw" : "2vmax",
              marginBottom: w < 420 && "2vh",
              borderRadius: "1rem",
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
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/facilitation`}
              >
                Nursing
              </Link>
            </div>
            We act like a bridge between the aspiring candidates and the
            vacancies available at the hospitals. With the help of our German
            counterparts, we facilitate the process of Language Learning and
            Employment.
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
              margin: w > 420 ? "1vw" : "2vmax",
              marginBottom: w < 420 && "2vh",
              borderRadius: "1rem",
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
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/study`}
              >
                {" "}
                Study{" "}
              </Link>
            </div>
            Europe, renowned as a multicultural hub and a blend of diverse cultures and nationalities, has consistently ranked among the top study destinations worldwide. 
            Europe is also vastly different from East to West, consisting of 50 countries and 5 major time zones. 
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
              margin: w > 420 ? "1vw" : "2vmax",
              marginBottom: w < 420 && "2vh",
              borderRadius: "1rem",
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
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/training`}
              >
                Training
              </Link>
            </div>
            In order to get your career off to a good start in another country,
            it is important to learn local language, for example German. As a
            trusted policy holder, SWAPAL can help you with this.
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
              margin: w > 420 ? "1vw" : "2vmax",
              marginBottom: w < 420 && "2vh",
              borderRadius: "1rem",
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
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/study`}
              >
                Work Permits
              </Link>
            </div>
            Do you already have detailed career plans? Do you want to work, gain international experience, and receive a European salary?
            We assist in recruiting skilled and unskilled workers in various sectors. 
            Whether you are just starting your career, or you simply want to change your place of work in search of better perspectives abroad, we can offer you interesting development opportunities.
            
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
          "It was always my dream to work in Germany and when I met Ms. Swarna,
          I knew I came to the right place. She constantly helped me to pursue
          my dream by motivating me whenever I felt I would not be able to learn
          the language. She also coordinated with the German team and arranged
          for mock interviews and prepared me well for the interviews. But for
          her it would have been difficult for me to achieve my dream. Now, I am
          happily working in Germany."
        </div>
        <div
          style={{
            paddingTop: "2vh",
            fontWeight: "500",
            paddingBottom: "2vh",
            textAlign: "center",
          }}
        >
          - Triveni Modugu
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
                 <span style={{ fontWeight:'bold',fontSize: w > 420 ? "1.5rem" : "1rem" }}> Swarna Paleti - Director </span>
            <br/>Swarna Paleti has 20+ Years of corporate experience. 
            She excels in communication and soft skill training, and has a track 
            of training people from the elite sections of the society including
            IIMs, IITs and IAS aspirants. Her rich expertise in various fields
            drove her towards Entrepreneurship.
            
            A Strategic thinker with a vast experience and a talent for
            fostering cooperation and communication between members of
            management, clients and other team members, She is adept in
            taking company policies and turning them into effective and
            workable business strategies. She is an expert in Man-Management 
            with special focus on skill development. 
            <ul>
              <li> Strong leader, with excellent communication and resource management abilities </li>
              <li> Clear and effective communicator with strong delegation and presentation skills </li>
              <li> Sharp business sense with a commitment to financial responsibility and diligent planning </li>
              <li> Outstanding leadership skills </li>
              <li> Excellent organisational skills </li>
              <li> Strong communicator </li>
            </ul>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "center", marginTop:w<420 &&"2vh" }}
              >
                <img
                  className="imgshadow"
                  src={require("./assets/image_swarna.jpeg")}
                  style={{
                    height: "15vmax",
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
        id="contact"
        style={{
          paddingTop: w > 420 ? "15vh" : "5vh",
          paddingBottom: w > 420 ? "10vh" : "5vh",
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
            borderRadius: "2vmax",
          }}
        >
          <h2> Get started today</h2>
          <h4>Be a part of our journey</h4>
          <Button
            variant="contained"
            sx={{ fontFamily: "Poppins", background: "#537FE7" }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/contact`}
            >
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Body2;
