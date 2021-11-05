import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container, Box } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter ,textAlign: 'left'}} item xs={12} md={6}>
          <Box>
            <Typography variant="h3" sx={{mb:5}} style={{ color:'#203047', fontWeight: '600' }}>
            Your New Smile <br />
            Starts Here
            </Typography>
            <Typography variant="body2" sx={{my:4}} style={{color:'#203047'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Typography>
            <Button style={{ backgroundColor:'#6acece'}} variant="contained">Get Appoinment</Button>              
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width: '520px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;