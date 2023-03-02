import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

var w = window.innerWidth;

const TrainingPage = () => {
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
        <img
          style={{
            maxWidth: w > 420 ? "80vw" : "90vw",
            maxHeight: "50vh",
            opacity: "0.8",
            borderRadius: "1rem",
          }}
          src={require("./assets/training.jpg")}
        />
        <div
          className="centered glass"
          style={{
            fontSize: w > 420 ? "2rem" : "1rem",
            height: "auto",
            padding: "2vmax",
            textAlign: "center",
          }}
        >
          OVERSEAS SERVICES <br />
          {w > 420 && (
            <span style={{ fontSize: w > 420 ? "1rem" : "0.75rem" }}>
              Earn while you Learn - Vocational Courses in Germany
            </span>
          )}
        </div>
      </div>
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
            md={6.5}
            sx={{
              height: "auto",
              backgroundColor: "white",
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
            }}
          >
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              {" "}
              EARN WHILE YOU LEARN & SETTLE IN GERMANY{" "}
            </span>
            <br />
            <br />
            Hi +2 Students,
            <br />
            <br />
            Did you complete your Schooling & Intermediate with 75%-80% & above
            marks?
            <br />
            <br />
            Do you want to Study in Germany that too{" "}
            <span style={{ fontWeight: "bold" }}>FREE?</span> <br />
            <br />& Also do you want to{" "}
            <span style={{ fontWeight: "bold" }}>EARN</span> while Studying?
            <br />
            <br />
            Is it possible??
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>YES</span>, it is possible in
            Germany!
            <br />
            <br />
            Germany needs 5,00,000 skilled expats in 2023 year! Are you one of
            them?
            <br />
            <br />
            2/3/4 YEARS VOCATIONAL COURSES WITH{" "}
            <span style={{ fontWeight: "bold" }}>CONFIRMED PLACEMENT</span>{" "}
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>
              Following are the Courses which you can choose & Build a Career
              from:
            </span>
            <br />
            <br />
            * Nursing : * Physiotherapy : * Air Traffic Controller : * Ship
            Mechanic :<br />
            * IT specialist : * Bank clerk : * Aircraft Mechanic : * Specialist
            in Mechatronics
            <br />
            * Electronics Technician : * Electrician : * Fitness Trainer : * IT
            Technician <br />
            * Hospitality Management : * Dietician Hotel Expert : * Baker : *
            Cook or Chef <br />
            * Metal & Electrical Profession : * Electrician / Industrial
            Electrician : * Gardener
            <br />
            * Warehouse Logistic Specialist : * Automobile Profession : *
            Cosmetics :<br />
            * Salesmen/Women : * Industrial Clerk : * Spa & Wellness Specialist
            <br />
            <br />
            <br />
            <hr /> <br /> <br />{" "}
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              DIPLOMA VOCATIONAL TRAINING GERMANY
            </span>{" "}
            <br />
            <br></br> The student gains both theoretical and practical knowledge
            at the same time. It is a profession-related education which is
            leading you towards a certain job. You can find Ausbildung for
            almost anything. It’s a really good deal for people who finish their
            basic education (12th Class) and want to go straight towards working
            life, instead of studying at university.
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}> ELIGIBILITY:</span>
           
            <br /><br />
            A) 10+2 with Minimum 80% Marks.<br />
B) Education up to 10+2 level in English Medium<br />
C) Minimum B-1 Level of German Language before applying for Ausbuilding.<br />
D) Minimum Age 18 Years up to 25 Years.<br />
E) Students should have good English level for Learning.<br />
 <br />{" "}
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
            PROGRAM ADVANTAGE:
            </span>{" "}
            <br /><br/>
            1)  Training of Students in specifically Job Oriented fields.<br/>
2)  Combination of Classroom and Practical Training.<br/>
3)  Suitable for students who want to start work directly after School<br/>
4)  Training has no Cost.<br/>
5)  Students start earning during the Ausbildung.<br/>
6) After completion of training students are employed in their respective area of training.<br/>


            <br></br>
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
            EARNING POTENTIAL OF THE COURSES
            </span>{" "}
            <br /><br/>All training Programs are Job oriented and students work during their study in our partner Companies.<br/><br/>

Students receive Euros 750 per month during training.<br/><br/>

After successful completion of course the Students start working with minimum approximate salary of Euros 2500 per month. 
<br/><br/><hr/>
                <h3> APPLY NOW</h3>

                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Poppins",
                    background: "##A7B6BB",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                   <Link style={{textDecoration: 'none',color: "white"}} to={`/contact`}>
                  Contact
                  </Link>
                </Button>
             
          </Grid>
          <Grid
            item
            xs={12}
            md={4.5}
            sx={{
              height: "100%",
              backgroundColor: "white",
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
            }}
          >
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
            WHAT WE DO:
            </span>
            <br />
            <br />
            <ul>
              <li>
            Candidate Eligibility Verification</li>
            <li>We teach you German Language through online & offline classes.</li>
            <li>Resume Preparation.</li>
            <li>	Admission arrangements in Germany.</li>
            <li>	All Documents Translation to German Language. </li>
            <li>	Attestation of all Translated Documents at German Embassy.</li>
            <li>VISA Documentation & Interview Preparation.</li>
            <li>Processing the admission formalities with concerned University.</li>
            <li>	Travel Insurance Cover.</li>
            <li>	Guide you in Flight Ticket Booking</li>
            <li>	Pre Departure & Post Arrival Support, Accommodation Arrangement in Germany.</li>
            <li>	Handhold till you are settled in Germany.</li>
</ul>

          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TrainingPage;
