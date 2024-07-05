import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
var w = window.innerWidth;

const TRP = () => {
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
          src={require("./assets/image9.jpg")}
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
          Temporary Residence Permit in Lithuania – A Guide <br />
          {w > 420 && (
            <span style={{ fontSize: w > 420 ? "1rem" : "0.75rem" }}></span>
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
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              How to obtain Residency in Lithuania{" "}
            </span>
            <br />
            Foreigners who want to move to Lithuania can apply from their country of origin for a temporary residence permit in Lithuania or TRP as it is known. 
            The necessary documents can be submitted either to the Lithuanian Embassy or to the Migration Department, but you can also do these in Lithuania, with the help of our immigration lawyers. 
            Here's what you need to know about temporary residence permit formalities in Lithuania:
            <ul>
            <li> Lithuanian Migration Information System accepts the application for residency in Lithuania on a scheduled basis.</li>
            <li> It is then up to the applicant to bring the rest of the documents, such as copies of the passport and marriage and birth certificates, accompanied by the original ons.</li>
            <li> The fee of approximately EUR 120 must be paid.</li>
            <li> The financial situation for living in Lithuania will be proved.</li>
            <li> Authorities also require health insurance with coverage of at least EUR 6,000.</li>
            </ul>
            Although a temporary residence permit in Lithuania is issued in 2-4 months, there is a possibility that this document will come into your possession much faster. 
            We remind you that our Lithuanian lawyers are at your disposal with legal advice for the formalities imposed by the authorities in 2024. 
            This way you will be sure that you will have the necessary support to obtain residency in Lithuania. Moreover, we can help you with the formalities if you want to relocate to Lithuania. 
            Persons who were granted asylum do not need to apply for a residence permit. The same thing is available for citizens under the age of 16 or for those who cannot leave the country due to a medical condition. 
            More details on this topic can be provided by our local specialists.
            Having a Lithuanian residence permit allows you to travel to non-EU countries for a short period, of no more than 6 months and not exceeding 10 months within 5 years. 
            You can discuss further details with our local lawyers about how to obtain a residence permit in Lithuania in a fast and reliable manner. 
            
            <br /> <br /> 
            <hr />
            <br /> 
            
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              What documents do I need to submit?
{" "}
            </span>
            
            <br />
            What documents do I need to submit?
            <ol>
            <li> Application to issue/change the residence permit (electronically through the Lithuanian Migration Information System MIGRIS);</li>
            <li> Valid travel document (passport);</li>
            <li> A temporary residence permit (when it is being replaced);</li>
            <li> Documents confirming the ground for issuance of temporary residence permit;</li>
            <li> A document proving sufficient amount of funds for subsistence and return (a bank account statement, a work contract, or proof of their ability to support themselves financially. Sufficient amount for a month is equal of minimal wage in Lithuania. In 2023 it is 840 EUR. There should be enough funds for the whole time of validity of a TRP or at least for one year;</li>
            <li> The undertaking that foreigner will declare her/his place of residence in Lithuania;</li>
            <li> Certificate regarding (the absence of) a criminal record. NOTE: criminal record is valid for 6 months. Foreigners who come to work as highly qualified employees can submit a statement written by themselves confirming that they do not have a criminal record; </li>
            <li> Health insurance;</li>
            <li> Documents confirming legal stay (f.e. visa) if application is submitted in Lithuania.</li>
            </ol>
            More information about the required documents can be found on the website of the Migration department.


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
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              How long will the document be valid for?{" "}
            </span>
            <br />
            Temporary residence permit is usually issued for 1 or 2 years. However, it might be issued for a shorter period. For the persons of Lithuanian origin and foreigners who have retained the right for the Lithuanian citizenship, temporary residence permit is granted for 5 years.

            <br /> <br />
            <hr />
            <br />
            
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              How much will it cost to apply for a temporary residence permit?
              {" "}
            </span>
            <br/>
            Before submission of an application to issue/replace the temporary residence permit, foreigner must pay 160 EUR state fee (320 EUR for urgent processing), except when applicant is exempt from payment of state fees. 

            <br /> <br />
            <hr />
            <br />
            
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
            How long will it take to process my application?
              {" "}
            </span>
            <br/>
            A foreigner’s application for the issuance of the temporary residence permit must be considered not later than within 3 months from the lodging of the application, and if applied on an urgent basis – not later than within 45 calendar days from the date of submission of the application. On some grounds temporary residence permits are issued faster.


          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TRP;
