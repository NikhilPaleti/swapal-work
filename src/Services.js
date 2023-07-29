import React from 'react'
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import Engineering from "@mui/icons-material/Engineering";
import { Link } from "react-router-dom";

var w = window.innerWidth;


const Services = () => {

    
  return (
    <>
    <div
        style={{
          position: "relative",
          marginTop: w > 420 ? "20vh" : "10vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
                background: "white",
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
               <Link style={{textDecoration: 'none',color: "black"}} to={`/hydroponics`}>hydroponics</Link>
            </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Grid>
        </Grid>
      </div>

        </div></>
  )
}

export default Services