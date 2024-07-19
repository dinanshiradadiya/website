import { Box, Container, Grid, MobileStepper, Typography } from '@mui/material'
import React from 'react'
import rel2 from '../assets/image/reletedproduct/jewellery-pro-02-a.webp'
import rel3 from '../assets/image/reletedproduct/jewellery-pro-03-a.webp'
import rel5 from '../assets/image/reletedproduct/jewellery-pro-05-a.webp'
import rel6 from '../assets/image/reletedproduct/jewellery-pro-06-a.webp'


function Reletedproduct() {


  return (
    <Container maxWidth sx={{ backgroundColor: "#f8f6f1"}} >
      <Box sx={{ backgroundColor: "#f8f6f1",paddingBottom:"100px"}} marginTop={6}>
               <Box >
                    <Typography variant='h4' fontWeight={700} py={5} textAlign={"center"}>Releted Product</Typography>
               </Box>
        <Grid spacing={2}item xs={12}>
          <Box marginTop={5}>
            <Grid container spacing={2} xs={12}>
              <Grid item xs={12} md={6} lg={3}>
                <Box sx={{backgroundColor:"white"}} >
                  <img src={rel2} width={"100%"}></img>
                  <Typography  textAlign={'center'} fontWeight={600}>Diamond necklace</Typography>
                  <Typography  textAlign={'center'} color={"#b2905f"} fontWeight={600} lineHeight={2} marginBottom={2}>$61.00</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box sx={{backgroundColor:"white"}} >
                  <img src={rel3} width={"100%"}></img>
                  <Typography textAlign={'center'} fontWeight={600}>Yellow ring 18 kt</Typography>
                  <Box display={"flex"} justifyContent={"center"}>
                  <Typography color={"#b2905f"} fontWeight={600} lineHeight={2}>$52.00</Typography>
                  <Typography color={"#808080"} fontWeight={600} lineHeight={2}>~<s>$79.00</s></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box sx={{backgroundColor:"white"}}>
                  <img src={rel5} width={"100%"}></img>
                  <Typography  textAlign={'center'} fontWeight={600}>Toggle bangle</Typography>
                  <Box display={'flex'} justifyContent={"center"}>
                  <Typography color={"#b2905f"} fontWeight={600} lineHeight={2}>$24.00</Typography>
                  <Typography color={"#808080"} fontWeight={600} lineHeight={2}>~<s>$29.00</s></Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box sx={{backgroundColor:"white"}}>
                  <img src={rel6} width={"100%"}></img>
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

export default Reletedproduct