import * as React from 'react';

import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
var w = window.innerWidth;



const tiers = [
  {
    title: 'Indoor Farms',
    image:"image10",
    description: [
        'Indoor hydroponic micro farms can be created in any small room like shipping containers, bedrooms, and garages.'
    ],
    
  },
  {
    title: 'Microgreens',
    
    image:"image11",
    description: [
        'Indoor hydroponic micro farms can be created in any small room like shipping containers, bedrooms, and garages.' ],
    
  },
  {
    title: 'Hydroponics',
    image:"image12",
    description: [
      'Indoor hydroponic micro farms can be created in any small room like shipping containers, bedrooms, and garages.' ],
   
  },
];


function HydroCardContent() {
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          sx={{fontSize:'2rem'}}
          align="center"
          color="text.primary"
          gutterBottom
        >
          Start your own Farm to grow your own Veggies
        </Typography>
        <Typography variant="h7" align="center" color="text.secondary" component="p">
        We design sustainable solutions for hydroponic farmers, empowering them to grow fresh, clean, and local food in their communities around the globe.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
            
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card sx={{borderRadius:'10px'}} className="imgshadow">
                <CardHeader
                  title={tier.title}
                  
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: '#537FE7',
                    color:'white'
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    
                      <img style={{height:w>420?'20vh':'50vw',width:w>420?'30vw':'80vw'}} src={require(`./assets/${tier.image}.jpg`)}/>                    
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
               
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    
    
     
    </>
  );
}

export default function HydroCard() {
  return <HydroCardContent/>;
}