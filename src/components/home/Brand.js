import React from 'react'
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import brandlogo1 from '../../assets/images/home/Brands/brandlogo1.webp'
import brandlogo2 from '../../assets/images/home/Brands/brandlogo2.webp'
import brandlogo3 from '../../assets/images/home/Brands/brandlogo3.webp'
import brandlogo4 from '../../assets/images/home/Brands/brandlogo4.webp'
import brandlogo5 from '../../assets/images/home/Brands/brandlogo5.webp'


function Brand() {


  return (
    <div>

      <Container maxWidth>
        <Box display={"flex"} justifyContent={"center"}>
          <Grid container item xs={12} justifyContent={"center"} paddingTop={"50px"} >
            <Grid item xs={12} md={4} lg={2}  >
              <Box >
                <img src={brandlogo1} alt="" xs={{ color: "red" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={2} >
              <Box>
                <img src={brandlogo2} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={2} >
              <Box>
                <img src={brandlogo3} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={2} >
              <Box>
                <img src={brandlogo4} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={2} >
              <Box>
                <img src={brandlogo5} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Brand
