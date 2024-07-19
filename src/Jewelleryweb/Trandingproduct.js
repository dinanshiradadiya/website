
import { Box, Container, Grid, MobileStepper, Typography } from '@mui/material'
import React from 'react'
import TP01 from '../Assets/Trandingproduct/TP01.webp'
import TP02 from '../Assets/Trandingproduct/TP02.webp'
import TP03 from '../Assets/Trandingproduct/TP03.webp'
import TP04 from '../Assets/Trandingproduct/TP04.webp'


function Trandingproduct() {


  return (
    <Container maxWidth sx={{ backgroundColor: "#f8f6f1"}}>
      <Box sx={{ backgroundColor: "#f8f6f1",paddingBottom:'100px'}}>
        <Grid spacing={1} container item xs={12}>
          <Grid item xs={12} md={6} marginTop={10}>
            <Box display={'flex'} gap={3}  sx={{justifyContent:{md:"center",xs:"center"}}}>
              <Typography variant='h2' fontSize={40} fontWeight={600}>Trending</Typography>
              <Typography variant='h2' fontSize={40} sx={{ fontFamily: "'Marcellus', sans-serif" }}>product</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box  gap={3} width={"90%"} display={'flex'} marginTop={12} sx={{justifyContent:{lg:"end",md:"center",xs:"center"}}}>
              <Typography fontWeight={600} color={'#b2905f'} >BEVEL CORNER</Typography>
              <Typography fontWeight={600}>CRUSHED ICE</Typography>
              <Typography fontWeight={600}>HAND HARNESS</Typography>
            </Box>
          </Grid>
          <Box marginTop={5}>
            <Grid container spacing={2} xs={12}>
              <Grid item xs={12} md={6} lg={3}>
                <Box sx={{backgroundColor:"white"}} >
                  <img src={TP01} width={"100%"}></img>
                  <Typography  textAlign={'center'} fontWeight={600}>Diamond necklace</Typography>
                  <Typography  textAlign={'center'} color={"#b2905f"} fontWeight={600} lineHeight={2} marginBottom={2}>$61.00</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box sx={{backgroundColor:"white"}} >
                  <img src={TP02} width={"100%"}></img>
                  <Typography textAlign={'center'} fontWeight={600}>Yellow ring 18 kt</Typography>
                  <Box display={"flex"} justifyContent={"center"}>
                  <Typography color={"#b2905f"} fontWeight={600} lineHeight={2}>$52.00</Typography>
                  <Typography color={"#808080"} fontWeight={600} lineHeight={2}>~<s>$79.00</s></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box sx={{backgroundColor:"white"}}>
                  <img src={TP03} width={"100%"}></img>
                  <Typography  textAlign={'center'} fontWeight={600}>Toggle bangle</Typography>
                  <Box display={'flex'} justifyContent={"center"}>
                  <Typography color={"#b2905f"} fontWeight={600} lineHeight={2}>$24.00</Typography>
                  <Typography color={"#808080"} fontWeight={600} lineHeight={2}>~<s>$29.00</s></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box sx={{backgroundColor:"white"}}>
                  <img src={TP04} width={"100%"}></img>
                  <Typography  textAlign={'center'} fontWeight={600}>Stud earrings</Typography>
                  <Box display={'flex'} justifyContent={'center'}>
                  <Typography color={"#b2905f"} fontWeight={600} lineHeight={2} >$61.00</Typography>
                  <Typography  color={"#808080"} fontWeight={600} lineHeight={2}>~<s>$69.00</s></Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
      </Container>
  )
}

export default Trandingproduct



