import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";

var w = window.innerWidth;
const FacilitationPage = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('section');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const [youtubeID] = useState('20krEkHfJtU') //YouTube Link
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
            maxHeight: "100%",
           
          }}
          src={require("./assets/image_airport.jpeg")}
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
              Opportunities in Germany for Nurses{" "}
              
            </span>
            <br/> <br/>
            It's a full time Job in a German Hospital.

            Salary - € 2700 to 3000 per month 8 Hours duty for 5 Days a week.
            If you work over time, work on a  Holiday, Saturday & Sunday you have a scope to earn upto € 3500 per month.

            Do you want to settle in Germany?

            German speaking is a must in Germany.
            <br/><br/><br />
            <hr />
            <br/> <br/>{" "}
            <span  style={{ fontSize: "2vmax", fontWeight: "bold" }}>
            SERVICES OFFERED BY OUR COMPANY
              
            </span>{" "}
            
            <br /><br/>
            
            <ul>
            <li> We provide complete German language training by German Faculty online through zoom classes. </li>

            <li> Language Training from A1 to B1 Level. </li>

            <li> Translation of  all the Educational Documents to German Language & endorsing in Embassy. </li>

            <li> Resume Preparation in German Language. </li>

            <li> Visa Guidance, Documents checking. </li>

            <li> Provide guidance for obtaining Germany state license for working as a Physiotherapist. </li>

            <li> Arranging Interviews (skype / zoom) with Hospitals in Germany. </li>

            <li> Offer Letter will be provided from the recognized Hospitals in Germany. </li>

            <li> Visa assistance, Flight Ticket </li>

            <li> Airport pick up in Germany </li>

            <li> 30 Days food & Accomodation will be provided by us. </li>

            <li> Accommodation Guidance in Germany </li>

            <li> Visa Extension Process Guidance. </li>
            
            </ul>

            <span  style={{ fontSize: "1vmax", fontWeight: "bold" }}>
            OUR FEE:
              
            </span>{" "}
            <br />
            
            WE CHARGE ONLY AFTER VISA APPROVAL. INITIALLY YOU NEED TO SPEND ON TRANSLATION OF YOUR DOCUMENTS, GERMAN LANGUAGE EXAM FEES, VISA VFS FEE, POLICE CLEARANCE, ABORAD TRAVEL MEDICAL INSURANCE, ETC.,
 
            <br/><br/><br />
            <hr />
            <br/> <br/>
          
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
            WHY GERMANY?
            </span>{" "}
           
            
            <br/>
            <br/>
            


          Germany has one of the world’s most well organized and fastest immigration processes. The best way to migrate to Germany is through the Job Seeker Visa.

          You will be allowed to bring your dependents after securing employment and converting the Job Seeker visa to work permit.

          You can take your family after 4 Months of service in Germany.

          Low Unemployment Rate.

          Social Security in Germany.

          Free Healthcare and Insurances to all Family members

          Sickness and Disability Leaves to employees.

          You will get PR after completing 24 months service.

          Great life style & Secure life.
          You can pursue free higher studies while doing job  (MS, PhD, etc.,);

          Through German social security scheme Life time pension who is retired in Germany.

          Life time  free health insurance to all family members.

          Kids  education is free till PG in Govt. in Govt. Universities.

          For every Child in your family (up to 4 kids)  Govt. Of Germany is giving Child Allowance of € 200 to € 500 per kid every month till they turn 18.
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
              <iframe
  className='video'
  title='Youtube player'
  sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
  src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
  style={{
    width: '500px',
    height: '500px',
    borderRadius: '10px', // or any desired value for curved corners
    margin: 'auto',
    display: 'block'
  }}
></iframe>
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
                Why opt SFPPL for Facilitation Services?
              </span>
              <br />
              <br />
              <ul>
              <li>We provide complete Support – right from teaching German Language to C.V preparation, getting a job and arranging for your flight tickets.
              </li>
              <br />
              <li>We handhold you even after reaching Germany. Our counterparts will assist you in settling down in Germany.
              </li>
              <br />
              <li>For U.S, we help you clear your IELTS and R.N exams.
              </li>
              <br />
              <li>We believe in strong relationships because we know that your success is our success, hence offer a service that is absolutely trustworthy.
              </li>
              </ul>
              
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
                Basic Requirements 
                <br />
                (For Nurses)
              </span>
              <br />
              <br />
              <ul>

<li> age below 39 Years </li>

<li> Qualified GNM OR BSc. NURSE </li>

<li> Proof of NURSE Registration Document. </li>

<li> Medical certificate confirming your good health status  (Only after clearing interview) </li>

<li> German B1 language Certificate (We assist candidates in achieving this). </li>

<li> Experience Certificates (if applicable) </li>

<li> Passport </li>

<li> PAN Card </li>

<li> Last 1 year bank statement. </li>

<li> Police Clearance Certirficate  (Only after clearing interview) </li>

<li> Good Standing Certificate by Nursing Coucil (Only after clearing interview) </li>

<li> All Education Qualification Certificates </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
};

export default FacilitationPage;
