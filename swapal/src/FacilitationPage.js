import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
var w = window.innerWidth;
const FacilitationPage = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
 
  const classes=w>420?"left1":"centered"
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
            maxHeight: "60%",
           
           
          }}
          src={require("./assets/image6.jpg")}
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
          Facilitation Services<br />
          {w > 420 && (
            <>
            <span style={{ fontSize: w > 420 ? "1.5rem" : "0.75rem" }}>Avail our business facilitation services</span>
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
      <div id="section"></div>
      <Box 
        sx={{
          flexGrow: 1,
          marginTop: w > 420 ? "10vh" : "5vh",
          marginLeft: "4vw",
          marginRight: "4vw",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={0} justifyContent="center">
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              height: "auto",
              background:'white',
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
            }}
          >
            <span  style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              {" "}
              We’re With You Every Step of The Way{" "}
              
            </span>
            <br/> <br/>
            Since X, we have assisted thousands of entrepreneurs through the
            life cycle of a business, from incorporation to closure. Our
            fundamental desire to ensure customer satisfaction stems from having
            set up and run multiple businesses and the pain points that come
            along with such journeys.
            <br /> <br /> Sit amet consectetur adipiscing elit pellentesque
            habitant. Ultricies lacus sed turpis tincidunt id aliquet. Magna
            eget est lorem ipsum dolor sit amet consectetur adipiscing. In
            tellus integer
            <br/><br/><br />
            <hr />
            <br/> <br/>{" "}
            <span  style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              RESULT ORIENTED PROGRAMS, DELIVERED
              
            </span>{" "}
            
            <br /><br/>
            In fact, we design programs customized to each company’s
            needs based on in-depth diagnosis as part of our 100 days program
            model, We ensure every client’s quality and integrity of the
            solution.
            <br /> <br /> Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Sit amet volutpat consequat mauris nunc congue nisi
            vitae. Tortor consequat id porta nibh venenatis cras sed. Facilisi
            nullam vehicula ipsum a arcu. Sit amet commodo nulla facilisi nullam
            vehicula.
            <br/><br/><br />
            <hr />
            <br/> <br/>
          
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              SMART PLANNING AND EXECUTION AROUND CHANGE
            </span>{" "}
           
            
            <br/>
            <br/>
            
           
            We take a broader, more holistic view of all of the factors that
            influence the desired changes, and help clients develop and execute
            the strategies and processes needed to implement sales effectiveness
            changes and ensure lasting results.
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              height: "100%",

              borderRadius: "1rem",
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                height: "100%",
                backgroundColor: "white",
                borderRadius: "1rem",
                margin: "1vmax",
                padding: "2vmax",
              }}
            >
              <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
                Why Facilitation with us?
              </span>
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim. Faucibus et molestie ac feugiat sed
              lectus
              <br />
              <br />
              
              <br />
              <br />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                height: "100%",
                backgroundColor: "white",
                borderRadius: "1rem",
                margin: "1vmax",
                padding: "2vmax",
              }}
            >
              <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
                Required Documents
              </span>
              <br />
              <br />
              <ul>
                <li>Document 1</li>
                <li>Document 2</li>
                <li>Document 3</li>
                <li>Document 4</li>
                <li>Document 5</li>
                <li>Document 6</li>
                <li>Document 7</li>
                <li>Document 8</li>
                <li>Document 9</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
};

export default FacilitationPage;
