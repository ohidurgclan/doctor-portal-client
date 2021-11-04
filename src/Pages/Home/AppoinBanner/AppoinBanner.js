import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appoinmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 120
}

const AppoinBanner = () => {
    return (
    <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img style={{width:400,height:'auto', marginTop: -110}} src={doctor} alt="doctor"/>
        </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems:'center', textAlign: 'left' }}>
            <Box>
                <Typography variant="h6" sx={{mb:5}} style={{ color:'#6acece' }}>
                    Appoinment 
                </Typography>
                <Typography variant="h4" sx={{mb:3}} style={{color:'#fff'}}>
                    Make an Appoinment Today 
                </Typography>
                <Typography variant="body2" sx={{my:4}} style={{color:'#fff'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </Typography>       
                <Button style={{ backgroundColor:'#6acece'}} variant="contained">Learn More</Button>   
            </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppoinBanner;