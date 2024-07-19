import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import cardimg from '../assets/images/Home/Container1/cardimg.webp'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

function Container1() {

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
  return (
    <div>
    <React.Fragment>
    <Box sx={{ backgroundImage:"url('https://qx-aolie.myshopify.com/cdn/shop/files/slider-01.jpg?v=1696589434&width=1920')",backgroundSize:"cover" ,display:'block',width:"100%" }}>
      <Grid container item xs={12} sx={{margin:'0px 50px', padding:'90px 20px'}}>
      <Grid item xs={6} sx={{xs:"center",sm:"center",md:"center"}}>
      <Container >
      <Typography color={'#b2905f'} sx={{fontSize:{xs:"20px",md:"25px",lg:"30px"}}} marginBottom={'25px'} fontFamily={"'Marcellus', 'sans-serif'"} fontWeight={'400'}>
        Personalized jewellery 2023
      </Typography>
      <Typography sx={{fontSize:{xs:"55px",md:"75px",lg:"95px"}}}  fontWeight={'700'} fontFamily={"'Manrope', 'sans-serif'"} color={'white'}>
       Elegance
      </Typography>
      <Typography  sx={{fontSize:{xs:"55px",md:"75px",lg:"95px"}}} fontWeight={'400'} fontFamily={"'Marcellus', 'sans-serif'"} color={'white'}>
       jewellery
      </Typography>
      <Button style={{backgroundColor:'#b2905f', color:'white', borderRadius:'0px', marginTop:'80px', padding:'14px 30px',fontSize:"16px"}}>
        Shop Collaction
      </Button>
      <CssBaseline />
      </Container>
      </Grid>
      <Grid item xs={2}>

      </Grid>
      <Grid item xs={3} sx={{display:{xs:"none",sm:"none",md:"block",lg:"block"}}}>
      <Box backgroundColor={"white"}>
        <Box>
        <img src={cardimg} width={"100%"}></img>
         <Typography textAlign={'center'} fontWeight={600}>Yellow ring 18 kt</Typography>
         <Box display={"flex"} justifyContent={"center"}>
         <Typography color={"#b2905f"} fontWeight={600} lineHeight={2}>$52.00</Typography>
         <Typography color={"#808080"} fontWeight={600} lineHeight={2} marginBottom={"40px"}>~<s>$79.00</s></Typography>
        </Box>
         </Box>
      </Box>
      </Grid>
    </Grid>
  </Box>
</React.Fragment>
    </div>
  )
}

export default Container1


  