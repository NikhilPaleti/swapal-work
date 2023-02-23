import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutline from '@mui/icons-material/MailOutline';
var w = window.innerWidth;
const Bottom = () => {
    return (

        <Box
          sx={{
            marginTop:'5vh',
            width: "100%",
            height: "auto",
            backgroundColor: "#1976d2",
            paddingTop: "5vh",
            paddingBottom: "1rem",
          }}
        >
          <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
              <Grid item xs={12}>
                <Typography color="black" sx={{fontSize:w>420?"1.25rem":"0.9rem",fontWeight:'bold',fontFamily:'Poppins'}}>
                  Swapal Facilitators &amp; Promoters Pvt.Ltd | 2023
                </Typography>
                
              </Grid>
              <Grid item xs={12}>
                <Typography color="black" sx={{fontFamily:'Poppins'}}>
                We guide you to the land of possibilities.
                </Typography>
                
                
              </Grid>
              <Grid item xs={12} sx={{marginTop:'2vh'}}>
                <Typography >
                   <InstagramIcon sx={{color:'black'}}/> <WhatsAppIcon sx={{color:'black'}}/> <MailOutline sx={{color:'black'}}/>
               </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      );
    };
export default Bottom