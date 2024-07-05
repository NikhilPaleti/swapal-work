import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
var w = window.innerWidth;
const SkillDevelopment = () => {

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
          Skill Enhancement Program <br />
          {w > 420 && (
            <>
            <span style={{ fontSize: w > 420 ? "1.5rem" : "0.75rem" }}> Join us to help grow your skillset </span>
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
            {/* <span  style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              {" "}
              Working in Europe – How to get an EU Visa / Work Permit{" "}
              
            </span> */}
            {/* <br/> <br/> */}

            <span  style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              ADVANCED SKILL ENHANCEMENT PROGRAMME IN NURSING
              {" "}
              
            </span>
            <br />
            ASEP- Nursing aims to train nurses to meet the increasing demands of hospital industry/health care sector in India and abroad, where opportunities are more for experienced and trained nurses rather than fresher nurses. Moreover, most of the institutions are keen to select nurses based on their performance in skill along with qualifying examinations.
            <br />
            ASEP-Nursing aims to update and upskill qualified nurses from the State. The course facilitates career development and employability and it is designed as a six month programme with training in Soft skills & IT skills to enable them for efficient and smooth delivery across cultural barriers.
            <br />
            SWAPAL introduced a comprehensive finishing programme for GNM/Graduate /Post graduate in Nurses aspiring to have a career abroad.
            <br /> <br />
            OBJECTIVES OF ASEP-N
            <ul>
            <li>To develop essential advanced nursing skills of the graduates to suit the global standards.</li>
            <li>To facilitate the participants in seeking a career abroad.</li>
            </ul> 
            <br/>
            <hr />
            <br/> <br/>{" "}
            <span  style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            BENEFICIARIES

              
            </span>{" "}
            <br />
            <ul>
            <li>GNM/ Graduate/Post Graduate certified nurses</li>
            <li>Hospitals/Health Care Authorities in India, Middle East, UK, Australia, U.S.A., other European Union Countries.</li>
            </ul> <br/>
            <span  style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            ELIGIBILITY CRITERIA FOR ADMISSION
            </span>{" "}
            <ul>
            <li>Age: No bar</li>
            <li>Should possess Bsc./Msc. Post in Nursing/ GNM approved by Indian Nursing Council</li> 
            </ul>
            <br /> <br /> 
            <hr />
            <br/> <br/>
          
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            ADMISSION PROCESS
            </span>{" "}
      <ul>      
      <li>Selection will be conducted through an interview conducted by SWAPAL</li>
      <li>Batch size – 8 Trainees </li>
      </ul>
    <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
         DURATION OF COURSES
            </span>{" "}
            <br />
            The course is planned in Four modules with a total duration of One Year
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
                <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
                    Venue
                </span>
                <br />
                Online Training will be conducted by Leading Doctors & Nurses.
                <br /> <br />
                <hr />
                <br />

                <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
                    Faculty
                </span>
                <br />
                Online based interaction led by Doctors/ Faculty in Nursing/Languages/Management /IT having ample experience in the relevant area. Training delivery also by veterans who have industry & academic experience.
                <br /> <br />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
};

export default SkillDevelopment;
