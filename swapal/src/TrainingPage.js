import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
          }}
        >
          Training Agency for Overseas Jobs <br />
          {w > 420 && (
            <span style={{ fontSize: w > 420 ? "1rem" : "0.75rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{" "}
            </span>
            <br />
            <br />
            ut labore et dolore magna aliqua. Id porta nibh venenatis cras sed.
            Leo vel fringilla est ullamcorper eget nulla facilisi. Enim sit amet
            venenatis urna cursus eget <br />
            <br /> Maecenas pharetra convallis posuere morbi leo urna molestie
            at. Pharetra magna ac placerat vestibulum lectus mauris ultrices
            eros. Non quam lacus suspendisse faucibus interdum posuere.
            <br /> <br /> Sit amet consectetur adipiscing elit pellentesque
            habitant. Ultricies lacus sed turpis tincidunt id aliquet. Magna
            eget est lorem ipsum dolor sit amet consectetur adipiscing. In
            tellus integer
            <br /> <br />{" "}
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              Feugiat scelerisque varius morbi enim nunc.
            </span>{" "}
            <br />
            <br></br>Dignissim convallis aenean et tortor at risus viverra
            adipiscing. Turpis egestas pretium aenean pharetra. Accumsan tortor
            posuere ac ut consequat. Libero justo laoreet sit amet. Vitae
            suscipit tellus mauris a diam maecenas sed. Sagittis nisl rhoncus
            mattis rhoncus. Euismod nisi porta
            <br /> <br /> lorem mollis aliquam ut. Placerat orci nulla
            pellentesque dignissim enim. Venenatis lectus magna fringilla urna
            porttitor rhoncus dolor.
            <br /> <br /> Consectetur adipiscing elit pellentesque habitant
            morbi tristique. Egestas sed tempus urna et. Erat imperdiet sed
            euismod nisi porta.
            <br /> <br /> Egestas pretium aenean pharetra magna ac placerat
            vestibulum. Sit amet volutpat consequat mauris nunc congue nisi
            vitae. Tortor consequat id porta nibh venenatis cras sed. Facilisi
            nullam vehicula ipsum a arcu. Sit amet commodo nulla facilisi nullam
            vehicula.
            <br />
            <br />
            <br /> <hr /> <br /> <br />{" "}
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              Feugiat scelerisque varius morbi enim nunc.
            </span>{" "}
            <br />
            <br></br> Purus viverra accumsan in nisl nisi scelerisque eu. Felis
            donec et odio pellentesque. Laoreet id donec ultrices tincidunt arcu
            non. Sed sed risus pretium quam vulputate. Lacus viverra vitae
            congue eu consequat ac. Sodales ut eu sem integer vitae. Quam
            vulputate dignissim suspendisse in. Aliquet porttitor lacus luctus
            accumsan tortor posuere ac ut. Risus in hendrerit gravida rutrum
            quisque non tellus orci. Pellentesque habitant morbi tristique
            senectus. A erat nam at lectus urna duis. Fermentum et sollicitudin
            ac orci phasellus egestas. Sapien nec sagittis aliquam malesuada
            bibendum. Sem viverra aliquet eget sit amet tellus. Nisl suscipit
            adipiscing bibendum est ultricies
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntut labore et dolore magna aliqua. Id porta
            nibh venenatis cras sed. Leo vel fringilla est ullamcorper eget
            nulla facilisi. Enim sit amet venenatis urna cursus eget
            <br />
            <br />
            <br /> <hr /> <br /> <br />{" "}
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              Feugiat scelerisque varius morbi enim nunc.
            </span>{" "}
            <br />
            <br></br>
            <div>
              <div
                className="imgshadow"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  background: "#537FE7",
                  height: w > 420 ? "20vh" : "15vh",
                  width: w > 420 ? "30vw" : "80vw",
                  paddingTop: "1vh",
                  paddingBottom: "1vh",

                  borderRadius: "2vmax",
                }}
              >
                <h3> Get started today</h3>

                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Poppins",
                    background: "#E9F8F9;",
                    color: "black",
                    fontWeight:'600'
                  }}
                >
                  Contact
                </Button>
              </div>
            </div>
            .
          </Grid>
          <Grid
            item
            xs={12}
            md={4.5}
            sx={{
              height:"100%",
              backgroundColor: "white",
              borderRadius: "1rem",
              margin: "1vmax",
              padding: "2vmax",
            }}
          >
            <span style={{ fontSize: "2vmax", fontWeight: "bold" }}>
              Training Generic Heading.
            </span><br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim. Faucibus et molestie ac feugiat sed lectus
            vestibulum. Id ornare arcu odio ut sem. Vulputate mi sit amet mauris
            commodo quis imperdiet massa tincidunt. Pharetra convallis posuere
            morbi leo urna molestie at. Mattis molestie a iaculis at erat
            pellentesque adipiscing commodo elit. Vestibulum mattis ullamcorper
            velit sed ullamcorper. Enim diam vulputate ut pharetra sit amet
            aliquam id diam. Eu turpis egestas pretium aenean pharetra magna ac
            placerat. Commodo quis imperdiet massa tincidunt nunc pulvinar
            sapien et. Sagittis orci a scelerisque purus semper. Sed euismod
            nisi porta lorem. Et pharetra pharetra massa massa. Tristique
            senectus et netus et malesuada. Sit amet dictum sit amet justo
            donec. Gravida in fermentum et sollicitudin. Sit amet consectetur
            adipiscing elit ut aliquam purus sit. Nisi quis eleifend quam
            adipiscing vitae proin sagittis nisl rhoncus. Mollis aliquam ut
            porttitor leo a diam sollicitudin tempor id. Luctus venenatis lectus
            magna fringilla urna porttitor. Tempor orci dapibus ultrices in
            iaculis nunc sed. Sed turpis tincidunt id aliquet risus feugiat in
            ante. Tellus mauris a diam maecenas sed enim ut. Cursus eget nunc
            scelerisque viverra mauris in aliquam sem. Dignissim suspendisse in
            est ante in. Ridiculus mus mauris vitae ultricies leo integer
            malesuada. Sapien pellentesque habitant morbi tristique senectus.
            Nibh praesent tristique magna sit amet purus gravida quis blandit.
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TrainingPage;
