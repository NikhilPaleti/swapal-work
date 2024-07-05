import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
var w = window.innerWidth;

const Study = () => {
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
          Study in Europe <br />
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
              Intakes in France{" "}
            </span>
            <br />
            The major intakes in France are in January and September.
            <br />
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Study in France{" "}
            </span>
            <br />
            France is home to some of the world’s most prestigious universities, a tradition dating back to the Middle Ages when students from all over Europe flocked to the country. 
            Today, France continues to offer top-tier education to students worldwide. There are two main intakes in France: January and September, with September being the primary intake. 
            However, January also attracts a significant number of applications from international students, offering a wide range of courses.
            
            <br /> <br /> 
            <hr />
            <br /> 
            
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Intakes in Germany{" "}
            </span>
            <br />
            Germany offers two main intakes: the Summer Intake (September/October) and the Winter Intake (April)
            <br />
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Study in Germany{" "}
            </span>
            <br />
            Renowned for its world-class education, vibrant cities, and diverse landscapes, Germany welcomes students from across the globe. 
            One of the standout features is the availability of free education in many German universities. 
            The Winter Intake, occurring in September/October, is the primary intake for English-speaking courses. 
            Additionally, the Summer Intake in April also includes several universities offering courses in English.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Intakes in Netherlands{" "}
            </span>
            <br />
            In the Netherlands, students can choose from two main intakes: September and February. 
            September marks the major intake, and it is highly popular among international students.
            <br />
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Study in Netherlands{" "}
            </span>
            <br />
            The Netherlands stands out as one of Europe’s preferred study destinations, drawing students worldwide. 
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Intakes in Spain{" "}
            </span>
            <br />
            October & February
            <br />
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Study in Spain{" "}
            </span>
            <br />
            Spain invites you to study in renowned universities, experience a vibrant sports culture, and embrace the Mediterranean way of life. 
            The Fall intake at Spanish universities commences in October, offering two application deadlines. 
            The initial deadline is set in early June, and the late application deadline, providing a final opportunity for the Fall intake, extends to early September. 
            Spain’s Spring Intake begins in February, featuring a simplified application process with a deadline in early December. 
            Explore educational opportunities and start your academic adventure in Spain.
            <br /> <br /> 
            <hr />
            <br /> 

            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Intakes in Poland{" "}
            </span>
            <br />
            September/October & February
            <br />
            <span style={{ fontSize: "1.5vmax", fontWeight: "bold" }}>
              {" "}
              Study in Poland{" "}
            </span>
            <br />
            Poland stands out as one of Europe’s most budget-friendly destinations, offering exceptional education to international students. 
            Cities like Warsaw and Krakow are renowned for their student-friendly atmosphere. 
            Poland features two significant intakes: the Winter intake (September/October) and the summer intake (February).
            <br /> <br /> 
            <hr />
            <br /> 

            Attaining a degree from an esteemed European institution enhances your career opportunities not only within Europe but also globally. Pursue your studies in Europe and unlock your path to a fulfilling career.
            <br />
            For more information about study programs and university intakes in Europe for 2024, feel free to reach out to our experienced consultants who specialize in European study-abroad opportunities


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
              Differences with the European Vs American higher education system{" "}
            </span>
            <br />
            Higher education institutions
            In Europe, there are countries with a higher education system based upon a distinction between higher education institutions, universities of applied sciences and research universities.

            Universities of applied sciences are focused on the practical application of arts and science. Research universities offer research-orientated programmes in an academic setting.

            There is no distinction between universities of applied sciences and research universities in the United States.
            <br />
            Grading system
            The grading system differs per country in Europe. For Exampl In Austria, grades form 1 to 5 are used, with 1 being excellent and 5 being insufficient. In some European countries, grades are based on percentages from 0 to 100 and in other, grades range from A to F, or from 1 to 10.

            In colleges and universities in the United States, the grading system is based on a 4.0 scale from A to F, where ‘A’ is the highest grade you can receive and ‘F’, the lowest.
            <br />
            Costs
            Tuition fees for non-EU students in Europe range from approximately €1,000 to €20,000 per year. Tuition fees in the United States are very high against European Universities.
            Typical tuition fees at public universities for undergraduate and graduate programmes in the United States range from $10,000 to $70,000 per year for international students.
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Study;
