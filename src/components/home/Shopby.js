import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import sbcimg1 from '../../assets/images/home/Shopby/sbcimg1.webp'
import sbcimg2 from '../../assets/images/home/Shopby/sbcimg2.webp'
import sbcimg3 from '../../assets/images/home/Shopby/sbcimg3.webp'
import sbcimg4 from '../../assets/images/home/Shopby/sbcimg4.webp'
import sbcimg5 from '../../assets/images/home/Shopby/sbcimg5.webp'
import sbcimg6 from '../../assets/images/home/Shopby/sbcimg6.webp'
import diamond from '../../assets/images/home/diamond.webp'

function Shopby() {
  return (
    <div>
        <Box sx={{ bgcolor: '#f8f6f1', width: '100%', paddingTop: "80px", paddingBottom: "70px" }}>
          <Container maxWidth="100%" sx={{ textAlign: 'center' , paddingLeft:"30px"}}>
            <Box display={'flex'} justifyContent={'center'} gap={3}>
              <Typography fontSize={'40px'} fontFamily={"''Manrope',sans-serif'"} fontWeight={700}>
                Shop by
              </Typography>
              <Typography fontFamily={"'Marcellus', sans-serif"} fontWeight={400} fontSize={'40px'} textAlign={'center'}>
                category
              </Typography>
            </Box>
            <Grid container item xs={12} spacing={2} marginTop={'40px'} >
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                  <img src={sbcimg1} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                  <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                  <Typography fontWeight={500}>Radiant cut</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                  <img src={sbcimg2} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                  <Typography color={'#b2905f'} fontWeight={500}>7 ITEM</Typography>
                  <Typography fontWeight={500}>Nose Ring</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                  <img src={sbcimg3} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                  <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                  <Typography fontWeight={500}>Owl Shape</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                  <img src={sbcimg4} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                  <Typography color={'#b2905f'} fontWeight={500}>6 ITEM</Typography>
                  <Typography fontWeight={500}>Crushed ice</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                  <img src={sbcimg5} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                  <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                  <Typography fontWeight={500}>Bevel corner</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                  <img src={sbcimg6} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                  <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                  <Typography fontWeight={500}>Gold necklace</Typography>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <img src={diamond} alt='' />
        </Box>
    </div>
  )
}

export default Shopby

