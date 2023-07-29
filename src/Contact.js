import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

var w = window.innerWidth;

export default function Contact(props) {
 

  const content = {
    'header': 'Swapal Facilitators & Promoters Pvt.Ltd | 2023',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.',
    //'contact1': 'Address',
    //'contact1-desc1': '1652 Cordia Cir',
    //'contact1-desc2': ' Newton, North Carolina(NC), 28658',
    'contact2': 'Email',
    'contact2-desc': 'swapal@placeholder.com',

    'contact4': 'Phone',
    'contact4-desc': '+91 1111111111',
    ...props.content
  };

  return (
    <section style={{marginTop:w>420?'20vh':'5vh', marginBottom:'5%'}}>
      <Container maxWidth="lg" sx={{backgroundColor:'white',borderRadius:'15px'}}>
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h2" gutterBottom={true} sx={{fontWeight:'bold'}}>{content['header']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div >
                <Box display="flex">
                  <div>
                    <Avatar sx={{background:'white'}}>
                      <EmailIcon sx={{color:"#537FE7"}} fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
             
              <Box display="flex">
                <div>
                  <Avatar sx={{background:'white'}} >
                    <PhoneIcon sx={{color:"#537FE7"}} fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact4']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact4-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}