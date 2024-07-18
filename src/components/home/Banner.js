import { Box, Button, Card, Typography , Grid } from '@mui/material'
import React from 'react'
import bannerimg1 from '../../assets/images/home/Banner/bannerimg1.webp'
import bannerimg2 from '../../assets/images/home/Banner/bannerimg2.webp'
import bannerimg3 from '../../assets/images/home/Banner/bannerimg3.jpg'
import bannerimg4 from '../../assets/images/home/Banner/bannerimg4.webp'

function Banner() {
  return (
    <div>
      <Card sx={{display:'flex', justifyContent:'space-between',margin:'60px',gap:'8px',borderRadius:'0px',}}>
       <Grid container item xs={12} spacing={2}>
       <Grid item xs={12} lg={6}>
      <Grid item>
      <Box sx={{display:{lg:"flex",md:"block",xs:"block"},boxShadow:"none"}} xs={12} lg={6} sm={2}>
            <img src={bannerimg1} sx={{width:{md:"100%"}}}/>
            <Box sx={{backgroundImage:`url(${bannerimg2})`}}>
              <Box sx={{margin:'35px',color:'white',marginTop:'80px'}}>
              <Typography sx={{fontSize:'40px',fontWeight:"800",fontFamily:"''Manrope','sans-serif''"}}>Stud sans</Typography>
               <Typography sx={{fontSize:"40px",fontWeight:'400',fontFamily:"'Marcellus', sans-serif"}}>oval rings</Typography>
               <Typography sx={{fontSize:"14px"}}>A ring is a round band,use</Typography>
               <Typography>made of metal,worn couple.</Typography>
               <Button style={{backgroundColor:'#b2905f', color:'white', borderRadius:'0px', marginTop:'80px', padding:'14px 30px',fontSize:"16px"}}>
                 ONLY $19.00
               </Button>
              </Box>
            </Box>
        </Box>
      </Grid>
       </Grid>
        <Grid item xs={12} lg={6}>
        <Box sx={{display:{lg:"flex",md:"block",xs:"block"},boxShadow:"none"}}>
            <img src={bannerimg3}/>
            <Box sx={{backgroundImage:`url(${bannerimg4})`}}>
            <Box sx={{margin:'35px',color:'white',marginTop:'80px'}}>
              <Typography style={{fontSize:'40px',fontWeight:"800",fontFamily:"''Manrope','sans-serif''"}}>Rose gold</Typography>
               <Typography style={{fontSize:"40px",fontWeight:'400',fontFamily:"'Marcellus', sans-serif"}}>bracelet</Typography>
               <Typography style={{fontSize:"14px"}}>A ring is a round band,use</Typography>
               <Typography>made of metal,worn couple.</Typography>
               <Button style={{backgroundColor:'#333333', color:'white', borderRadius:'0px', marginTop:'80px', padding:'14px 30px',fontSize:"16px"}}>
               ONLY $24.00
               </Button>
              </Box>
            </Box>
        </Box>
        </Grid>
       </Grid>
      </Card>
    </div>
  )
}

export default Banner

