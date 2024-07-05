import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
var w = window.innerWidth;

const OpportunityCard = () => {
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
            maxHeight: "60vh",
            opacity: "0.9",
            borderRadius: "1rem",
          }}
          src={require("./assets/banner-op-card.png")}
        />
        
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
            md={9}
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
              Requirements and Eligibility{" "}
            </span>
            <br />Germany, one of the best places to work in the world, is planning to introduce a new point-based system named “Opportunity Card” as a part of their efforts to enhance the number of skilled immigrants to Germany to contribute to their workforce and economy. 
            As the German Opportunity Card is a new implementation, it is necessary for us to understand its fundamental details, such as the benefits, requirements, and eligibility, how it is different from other immigration pathways that already exist, etc.
            <br /> <br /> 
            <hr />
            <br /> 
            
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            What is the Germany Opportunity Card?
            {" "}
            </span>
            
            <br />
            Germany Opportunity Card or “Chancenkarte” is a new initiative taken by the Government of Germany to attract a more skilled global force into Germany, as a part of satisfying the ever-increasing demand for skilled workers in Germany. As a new point-based immigration program, it allows skilled professionals from various parts of the world to come to Germany even without a job offer and explore the various professional opportunities available.
            At the beginning of 2023, the draft of the new Immigration law was accepted by the Federal cabinet of Germany. Later, the Government of Germany announced the implementation of a new immigration law in Germany in the latter part of 2023. As a part of this law reform, the Opportunity Card will be implemented to attract more skilled workers to Germany, especially from non-European countries.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            The New Immigration Law Reform in Germany
            {" "}
            </span>
            
            <br />
            The new immigration law reforms are meant to be implemented in Germany in three stages: in November 2023, March 2024, and June 2024. Implementation of the German Opportunity Card is also a part of this reform that aims to increase the number of non-European workers in Germany to 60,000 per year. 
            Even though Germany is one of the biggest economies in the world, it faces extreme shortages of skilled workers or always finds a skill gap in many sectors, especially in the health and construction sectors. So, they had to enforce some changes in their immigration system to accommodate and attract as many potential workers as possible to Germany. It introduces a point-based system that makes German entry easier for skilled and qualified workers outside Europe.

            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Benefits of Having an Opportunity Card
            {" "}
            </span>
            
            <br />
            <ul>
            <li>You can come to Germany (without an employment offer letter) and search for jobs in person.</li>
            <li>You can stay up to 1 year in Germany.</li>
            <li>You can easily apply for a Permanent Residence in Germany.</li>
            <li>You can work part-time and manage your expenses.</li>
            <li>There is no minimum salary requirement.</li>
            </ul>
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Eligibility Criteria for Germany Opportunity Card
            {" "}
            </span>
            
            <br />
            There are certain pre-defined eligibility criteria to be fulfilled by the applicants to get a Germany Opportunity Card. They are as follows.
            <ol>
            <li> The applicants must be non-Europeans.</li>
            <li> As it is a point-based program, candidates must score a minimum of 6 points.</li>
            <li> They must meet the required language skills- German or English.</li>
            <li> They should at least have 3 years of professional work experience.</li>
            <li> They must not be involved in any criminal activities.</li>
            <li> You must get at least 6 Points</li>
            <li> You must be 35 years of age or younger when applying for the program</li>
            <li> You must have language skills or must have previously stayed in Germany</li>
            <li> You must have three years of professional work experience</li>
            <li> You must have sufficient financial resources to support yourself during your stay in Germany</li>
            <li> You have to apply through the German Embassy.</li>
            </ol>
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Documents Required
            {" "}
            </span>
            
            <br />
            <ul>
            <li>An updated CV or resume</li>
            <li>Official Academic Certificates</li>
            <li>Professional Certificates</li>
            <li>Experience Letter</li>
            <li>Details of Projects already worked on.</li>
            </ul>
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Germany Opportunity Card Points
            {" "}
            </span>
            
            <br />
            As a new point-based system for immigration, it demands a minimum of 6 points for an applicant to be eligible to obtain a Germany Opportunity Card, if the applicant is not recognized as a skilled worker in Germany.

            Here is the list of criteria and their respective scores for the Germany Opportunity Card.
            <table border="1">
            <tr>
                <th>Criteria</th>
                <th>Points</th>
            </tr>
            <tr>
                <td>Professional qualification equivalent to that in Germany</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Good German proficiency</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Sufficient German proficiency</td>
                <td>2</td>
            </tr>
            <tr>
                <td>C-level English proficiency</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5 years of professional experience</td>
                <td>3</td>
            </tr>
            <tr>
                <td>2 years of professional experience</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Age is less than 35</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Previously lived in Germany for at least 6 months</td>
                <td>1</td>
            </tr>
            <tr>
                <td>The living partner also meets the eligibility and they are also moving to Germany</td>
                <td>1</td>
            </tr>
            </table>


            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            Job Sectors Available For Opportunity Card Holders in Germany
            {" "}
            </span>
            
            <br /> 
            <ul>           
            <li>Healthcare</li>
            <li>Food and Manufacturing</li>
            <li>Hospitality</li>
            <li>Engineering</li>
            <li>Data Processing</li>
            <li>Construction</li>
            <li>Retail</li>
            <li>Science and invention</li>
            <li>Green Jobs</li>
            <li>Information and Technology</li>
            <li>Craftsmen and Carpenters</li>
            <li>Warehousing and Storage</li>
            </ul>
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            The New Immigration Law Reform in Germany
            {" "}
            </span>
            
            <br />
            The Germany Opportunity Card is a new implementation, whereas there are already various other visa types available in Germany. Let’s compare the Germany Opportunity card with other types of visas for foreign workers in Germany.
            The table below compares the German Opportunity Card with the Jobseeker visa in Germany.

            <table border="1">
            <tr>
                <th>Feature</th>
                <th>Germany Opportunity Card</th>
                <th>Jobseeker Visa</th>
            </tr>
            <tr>
                <td>Implementation status</td>
                <td>Not implemented yet</td>
                <td>Exists already</td>
            </tr>
            <tr>
                <td>Eligibility criteria</td>
                <td>Degree holders or skilled workers with a minimum of 3 years of experience</td>
                <td>Skilled professionals with a minimum of 5 years of experience</td>
            </tr>
            <tr>
                <td>Age limit</td>
                <td>Maximum 35 years</td>
                <td>No age limit</td>
            </tr>
            <tr>
                <td>Financial requirement</td>
                <td>No minimum salary or bank balance requirement</td>
                <td>Minimum USD 7500 bank balance required</td>
            </tr>
            <tr>
                <td>German Language proficiency</td>
                <td>Required</td>
                <td>Not required</td>
            </tr>
            <tr>
                <td>Part-time work allowed</td>
                <td>Yes</td>
                <td>No</td>
            </tr>
            </table>


            Look at the table below for clarity about the differences between the German Opportunity Card and Employment Visa.

            <table style={{ border: '1px solid black' }}>
            <tr>
                <th>Feature</th>
                <th>German Opportunity Card</th>
                <th>Employment Visa</th>
            </tr>
            <tr>
                <td>Allows candidates to enter Germany and search for a job</td>
                <td>Yes</td>
                <td>No (Need job offer)</td>
            </tr>
            <tr>
                <td>Eligibility criteria</td>
                <td>Various criteria required</td>
                <td>Degree certificate and job offer</td>
            </tr>
            <tr>
                <td>German Language proficiency</td>
                <td>Needed</td>
                <td>Not required</td>
            </tr>
            <tr>
                <td>Limit on number of cards/visas issued per year</td>
                <td>Yes, limited</td>
                <td>No limit</td>
            </tr>
            <tr>
                <td>Implementation status</td>
                <td>Not implemented yet</td>
                <td>Already exists</td>
            </tr>
            </table>


            Now, it’s time to compare the German Opportunity Card with the Blue Card.
            <table border="1">
            <tr>
                <th>Feature</th>
                <th>German Opportunity Card</th>
                <th>Blue Card</th>
            </tr>
            <tr>
                <td>Allows holder to come to Germany and search for employment</td>
                <td>Yes</td>
                <td>No (Must have a job offer)</td>
            </tr>
            <tr>
                <td>Application from home country possible?</td>
                <td>Yes</td>
                <td>No (Must come on employment visa)</td>
            </tr>
            <tr>
                <td>Validity</td>
                <td>Germany only</td>
                <td>Entire Europe</td>
            </tr>
            <tr>
                <td>Minimum salary requirement</td>
                <td>None</td>
                <td>Required</td>
            </tr>
            </table>

            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
            {" "}
            What major changes in Germany's immigration policy were approved?
            {" "}
            </span>
            
            <br />
            <ol>
            <li>The new system will make it easier for professionals with relevant experience, rather than education, to find a job and move to Germany.</li>
            <li>Easing the procedure for recognition of professional qualifications and work experience of a foreign employee.</li>
            <li>Chancenkarte (Opportunity Card) is a new employment visa in Germany for highly qualified workers.</li>
            <li>Ease of relocation rules for those with a job offer.</li>
            <li>Simplified conditions for obtaining a permanent residence permit and simplification of moving with the family.</li>
            </ol> 
            <br /> <br /> 
            <hr />
            <br /> 


          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OpportunityCard;
