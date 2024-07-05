import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
var w = window.innerWidth;
const WorkPermit = () => {

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
          European Work Permit<br />
          {w > 420 && (
            <>
            <span style={{ fontSize: w > 420 ? "1.5rem" : "0.75rem" }}>Avail our assistance to gain European Work Permit</span>
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
              Working in Europe – How to get an EU Visa / Work Permit{" "}
              
            </span>
            <br/> <br/>

            <span  style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Who can work in Europe?{" "}
              
            </span>
            <br />
            Anyone who meets the criteria and requirements set by the European countries can work in Europe. 
            Most European states have their programs, through which they tend to lure foreign professionals and fill job shortages in different fields in the country.

            <br/><br/><br />
            <hr />
            <br/> <br/>{" "}
            <span  style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            How can I get a Schengen work visa to Europe?
              
            </span>{" "}
            <br />
            The Schengen work visa does not exist. You can get a Schengen visa for other purposes, as Tourism, Visiting family and friends, business, medical purposes, etc. 
            However, you cannot get a Schengen visa to work in Europe. You are not permitted to work while holding a Schengen visa for other purposes, as well.
            Still, you can work in the Schengen Area if you hold a National (D) Visa for employment purposes issued by one of the 27 European countries part of the Schengen Zone.

            <br /> <br /> <br />
            <hr />
            <br/> <br/>
          
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
            What are the requirements for a European Work Visa?
            </span>{" "}
            
            <ul>
                <li>Application Form. Fully completed and printed twice. Do not forget to sign both copies at the end!</li>
                <li>Two identical photos. These photos should be taken within the last three months, according to the common Schengen visa photography criteria.</li>
                <li>Valid passport. Your passport should be no older than ten years and valid for at least three more months, on the date you plan to exit the Schengen territory. Make sure it has at least two blank pages for the visa sticker.</li>
                <li>Travel medical insurance. Covering any medical emergency with hospital care and travel back to one’s native country due to medical emergencies, up to 30,000 euros. Insurance must be valid in all Schengen countries and purchased before picking up the visa.</li>
                <li>Proof of Accommodation. A document that shows where you will be residing in the Schengen Area, i.e. rent agreement.</li>
                <li>Employment contract. An employment contract signed between you and your future employer, residing in the Schengen territory.</li>
                <li>Proof of Academic Qualifications. As diplomas, certificates, grades’ transcript etc.</li>
                <li>Proof of language knowledge. Most countries want you to fit in even if you are planning to work there only per one year. That is why many of them will ask you to meet a specific level of knowledge of their official language.</li>
            </ul>
            
            Please note that these are only the basic requirements that you will have to provide in order to get a work visa to Europe. Each of the Schengen member countries, as well as other European states outside of this zone, have their additional requirements.

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
                    When to Apply for a Visa to Work in Europe
                </span>
                <br />
                You are highly advised to apply for a work visa to Europe at least two months prior to your trip to the Schengen country where you plan to work in. The reason for that, is because the European embassies make take six weeks to process an employment visa application. In extraordinary cases, the processing time may be extended up to 12 weeks.
                
                <br /> <br />
                <hr />
                <br />

                <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
                    How long is a work visa valid
                </span>
                <br />
                Most European Work Visas are valid for one year. Still, in most countries, the visa holders have the chance to apply for a visa extension, upon the expiration of their visa.
                <br />
                The validity of your visa, as well as a few other details will be written in the visa sticker affixed in your passport. Read the visa sticker in your passport carefully for more information.
                <br /> <br />
                <hr />
                <br />

                <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
                    Can I extend an EU work permit?
                </span>                
                <br />
                You will be able to extend an EU work permit in most countries. There is an application process and some required documents, which you will have to collect and submit at the competent authorities in your European country of residence, prior to your visa / residence permit expiration.
                <br /> <br />
                <hr />
                <br />

                <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
                    What We Do & Our Services!
                </span>                
                <br />
                We will will guide you in every step in the process & hand-hold you till you reach the work palce.
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
};

export default WorkPermit;
