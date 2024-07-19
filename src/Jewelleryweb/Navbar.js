import { Box, Button, Card, Typography , Grid } from '@mui/material'
import React from 'react'
import B1 from '../Assets/Banner/B1.webp'
import B2 from '../Assets/Banner/B2.webp'
import B3 from '../Assets/Banner/B3.jpg'
import B4 from '../Assets/Banner/B4.webp'

function Navbar() {
  return (
    <div>
      <Card sx={{display:'flex', justifyContent:'space-between',margin:'60px',gap:'8px',borderRadius:'0px',}}>
       <Grid container item xs={12}>
       <Grid item xs={12} lg={6}>
      <Grid item>
      <Box sx={{display:'flex'}} xs={12} lg={6} sm={2}>
            <img src={B1}/>
            <Box sx={{backgroundImage:`url(${B2})`}}>
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
        <Box sx={{display:'flex'}} >
            <img src={B3} />
            <Box sx={{backgroundImage:`url(${B4})`}}>
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

export default Navbar