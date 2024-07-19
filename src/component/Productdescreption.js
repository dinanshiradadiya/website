 import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
 
 function Productdescreption() {
   return (
    <Container maxWidth="xl" >
          <Grid item container xs={12} spacing={3} py={10} marginTop={3}>
                <Grid item xs={12} sm={10} md={8} lg={6}  display="flex" marginBottom={5}>
                    <Box  sx={{justifyContent:{md:"center",sm:"center",xs:"center"},border:"1px solid black",padding:"30px"}} height={"100%"}>
                      <Typography variant='h5' sx={{marginBottom:"20px"}} fontWeight={700}>Description</Typography>
                      <Typography variant='h6' sx={{marginBottom:"20px"}} fontWeight={700}>More Detail</Typography>
                        <Typography sx={{fontFamily: "Manrope,sans-serif",lineHeight:"40px",color:"#808080"}}><FiberManualRecordIcon sx={{fontSize:"10px",color:"black"}}/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography>
                        <Typography sx={{fontFamily: "Manrope,sans-serif",lineHeight:"40px",color:"#808080"}}><FiberManualRecordIcon sx={{fontSize:"10px",color:"black"}}/> Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography>
                        <Typography sx={{fontFamily: "Manrope,sans-serif",lineHeight:"40px",color:"#808080"}}><FiberManualRecordIcon sx={{fontSize:"10px",color:"black"}}/> type here your detail one by one li more add</Typography>
                        <Typography sx={{fontFamily: "Manrope,sans-serif",lineHeight:"40px",color:"#808080"}}><FiberManualRecordIcon sx={{fontSize:"10px",color:"black"}}/> has been the industry’s standard dummy text ever since. Lorem Ips</Typography>
                        <Typography sx={{fontFamily: "Manrope,sans-serif",lineHeight:"40px",color:"#808080"}}><FiberManualRecordIcon sx={{fontSize:"10px",color:"black"}}/> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        <Typography sx={{fontFamily: "Manrope,sans-serif",lineHeight:"40px",color:"#808080"}}><FiberManualRecordIcon sx={{fontSize:"10px",color:"black"}}/> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={6} marginBottom={5}>
                
                <Box sx={{border:"1px solid black",padding:"30px"}} height={"100%"}>
                      <Typography variant='h5' fontWeight={700} marginBottom={2} sx={{fontFamily: "Manrope,sans-serif"}}>Additional information</Typography>
                     <Box display={"flex"} gap={1} alignItems={"center"}  marginBottom={2} sx={{fontFamily: "Manrope,sans-serif"}}> 
                        <Typography variant='h6' fontWeight={700} sx={{fontFamily: "Manrope,sans-serif"}}>Vendor:</Typography>
                        <Typography variant='h7' sx={{fontFamily: "Manrope,sans-serif","&:hover":{color:"#B2905F"}}}>Aolie</Typography>
                     </Box>
                     <Box display={"flex"} gap={2} alignItems={"center"} marginBottom={2}> 
                        <Typography variant='h6' fontWeight={700} sx={{fontFamily: "Manrope,sans-serif"}}>Type:</Typography>
                        <Typography variant='h7' sx={{fontFamily: "Manrope,sans-serif","&:hover":{color:"#B2905F"}}}>Nose pin</Typography>
                     </Box>
                     <Box display={"flex"} gap={2} alignItems={"center"} marginBottom={2}> 
                        <Typography variant='h6' fontWeight={700} sx={{fontFamily: "Manrope,sans-serif"}}>Color:</Typography>
                        <Typography variant='h7' sx={{fontFamily: "Manrope,sans-serif"}}>	LightSlateGray, Silver, Salmon</Typography>
                     </Box>
                     <Box display={"flex"} gap={2} alignItems={"center"} marginBottom={2}> 
                        <Typography variant='h6' fontWeight={700} sx={{fontFamily: "Manrope,sans-serif"}}>SKU:</Typography>
                        <Typography variant='h7' sx={{fontFamily: "Manrope,sans-serif"}}>abccd-19</Typography>
                     </Box>
                    </Box>
                </Grid>
          </Grid>
    </Container>
   )
 }
 
 export default Productdescreption


 