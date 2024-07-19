import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import sbcimg1 from '../assets/images/Home/Shopby/sbcimg1.webp'
import sbcimg2 from '../assets/images/Home/Shopby/sbcimg2.webp'
import sbcimg3 from '../assets/images/Home/Shopby/sbcimg3.webp'
import sbcimg4 from '../assets/images/Home/Shopby/sbcimg4.webp'
import sbcimg5 from '../assets/images/Home/Shopby/sbcimg5.webp'
import sbcimg6 from '../assets/images/Home/Shopby/sbcimg6.webp'
import diamond from '../assets/images/Home/diamond.webp'

function Shopby() {
  return (
    <div>
    <React.Fragment>
    <Box sx={{ bgcolor: '#f8f6f1', width:'100%',paddingTop:"80px",paddingBottom:"70px"}}>
      <CssBaseline />
      <Container maxWidth="100%" sx={{textAlign:'center'}}>
      <Box display={'flex'} justifyContent={'center'} gap={3}>
      <Typography fontSize={'40px'} fontFamily={"''Manrope',sans-serif'"} fontWeight={700}>
        Shop by
      </Typography>
      <Typography fontFamily={"'Marcellus', sans-serif"} fontWeight={400} fontSize={'40px'} textAlign={'center'}>
        category
      </Typography>
      </Box>

        <Grid container item xs={12} gap={0} marginTop={'40px'} >
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Typography sx={{backgroundColor:'white',padding:'40px'}}>
              <img src={sbcimg1} style={{width:"100%", marginBottom:'50px'}}/>
              <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
              <Typography fontWeight={500}>Radiant cut</Typography>
              </Typography>    
            </Grid>
            <Grid item xs={12} sm={6}  md={4} lg={2}>
              <Typography sx={{backgroundColor:'white',padding:'40px'}}>
              <img src={sbcimg2} style={{width:"100%", marginBottom:'50px'}}/>
              <Typography color={'#b2905f'} fontWeight={500}>7 ITEM</Typography>
              <Typography fontWeight={500}>Nose Ring</Typography>
              </Typography>    
            </Grid>
            <Grid item xs={12} sm={6}  md={4} lg={2}>
              <Typography sx={{backgroundColor:'white',padding:'40px'}}>
              <img src={sbcimg3} style={{width:"100%", marginBottom:'50px'}}/>
              <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
              <Typography fontWeight={500}>Owl Shape</Typography>
              </Typography>    
            </Grid>
            <Grid item xs={12} sm={6}  md={4} lg={2}>
              <Typography sx={{backgroundColor:'white',padding:'40px'}}>
              <img src={sbcimg4} style={{width:"100%", marginBottom:'50px'}}/>
              <Typography color={'#b2905f'} fontWeight={500}>6 ITEM</Typography>
              <Typography fontWeight={500}>Crushed ice</Typography>
              </Typography>    
            </Grid>
            <Grid item xs={12} sm={6}  md={4} lg={2}>
              <Typography sx={{backgroundColor:'white',padding:'40px'}}>
              <img src={sbcimg5} style={{width:"100%", marginBottom:'50px'}}/>
              <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
              <Typography fontWeight={500}>Bevel corner</Typography>
              </Typography>    
            </Grid>
            <Grid item xs={12} sm={6}  md={4} lg={2}>
              <Typography sx={{backgroundColor:'white',padding:'40px'}}>
              <img src={sbcimg6} style={{width:"100%", marginBottom:'50px'}}/>
              <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
              <Typography fontWeight={500}>Gold necklace</Typography>
              </Typography>    
            </Grid>
        </Grid>
      </Container>
    </Box>
        <Box>
        <img src={diamond}/>
        </Box>
    </React.Fragment>
    </div>
  )
}

export default Shopby

