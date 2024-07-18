import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import brandlogo1 from '../../assets/images/home/Brands/brandlogo1.webp'
import brandlogo2 from '../../assets/images/home/Brands/brandlogo2.webp'
import brandlogo3 from '../../assets/images/home/Brands/brandlogo3.webp'
import brandlogo4 from '../../assets/images/home/Brands/brandlogo4.webp'
import brandlogo5 from '../../assets/images/home/Brands/brandlogo5.webp'


function Brand() {
  return (
    <div>
      <Box display={"flex"} justifyContent={"center"} gap={"60px"}>
        <Grid container item xs={12} justifyContent={"center"} gap={5             }>
        <Grid item xs={12} md={4} lg={2} >
         <Box>
          <img src={brandlogo1} />
         </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={2} >
         <Box>
          <img src={brandlogo2} />
         </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={2} >
         <Box>
          <img src={brandlogo3} />
         </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={2} >
         <Box>
          <img src={brandlogo4} />
         </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={2} >
         <Box>
          <img src={brandlogo5} />
         </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Brand
