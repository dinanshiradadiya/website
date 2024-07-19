import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { EmailOutlined } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import img1 from '../../assets/images/pages/aboutus/img1.webp'


function Aboutus() {
  return (
    <Box>
    {/* ----------------- Section-1  ---------------------- */}
    <Box py={10} marginBottom={5} sx={{ justifyContent: "center", display: "flex", alignItems: "center", backgroundImage:"url('https://qx-aolie.myshopify.com/cdn/shop/files/breadcrumb.jpg?v=1696586356')",backgroundSize:"cover"}}>
        <Container maxWidth="lg">
            <Box width={"100%"} textAlign={"center"} sx={{display:{lg:"flex",md:"block",xs:"block"},justifyContent:{lg:"space-between",md:"center",xs:"center"}}}>
                <Typography variant="h1" component="h2" fontSize={"37px"} fontWeight={"600"} color={"white"}>
                About us
                </Typography>
                <Typography variant="h1" component="h2" fontSize={"20px"} color={"white"}>
                    Home | About us
                </Typography>
            </Box>
        </Container>
    </Box>

    {/* ----------------- Section-2  ---------------------- */}

        <Box margin={"40px"}>
      <Grid container item display={'flex'} justifyContent={'space-between'} xs={12} >
        <Grid item display={'flex'} gap={4} xs={12} md={6} lg={4} paddingBottom={"20px"}>
            <Box width={80} height={80}>
             <PhoneInTalkIcon sx={{margin:"50%",color:"#b2905f"}}/>
            </Box>
            <Box>
            <Typography variant='subtitle2' fontSize={'20px'} gutterBottom>Phone number</Typography>
            <Typography>(+01) 0223 6020 020</Typography>
            <Typography>(+01) 2006 0600 6000</Typography>
            </Box>
        </Grid>
        <Grid item display={'flex'} gap={4} xs={12} md={6} lg={4} paddingBottom={"20px"}>
            <Box width={80} height={80}>
             <LocationOnIcon sx={{margin:"50%",color:"#b2905f"}}/>
            </Box>
            <Box>
            <Typography variant='subtitle2' fontSize={'20px'} gutterBottom>Store address</Typography>
            <Typography>Akshya nagar 1st block 1st</Typography>
            <Typography>cross,banglore-560016</Typography>
            </Box>
        </Grid>
        <Grid item display={'flex'} gap={4} xs={12} md={6} lg={4} paddingBottom={"20px"} sx={{justifyContent:{md:"end"}}}>
            <Box width={80} height={80}>
             <EmailOutlined sx={{margin:"50%",color:"#b2905f"}}/>
            </Box>
            <Box>
            <Typography variant='subtitle2' fontSize={'20px'} gutterBottom>Customer email</Typography>
            <Typography>demoinfo@gmail.com</Typography>
            <Typography>Info8989@gmail.com</Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>

    {/* ----------------- Section-3  ---------------------- */}

    <React.Fragment>
      <CssBaseline />
        <Box bgcolor={"#f8f6f1"} paddingTop={"50px"} >
        <Grid container item xs={12} padding={"50px"} marginBottom={'70px'}>
        <Grid item xs={12} md={12} lg={6} padding={"60px 80px 0px 4px"}>
         <Typography fontSize={"46px"} fontWeight={600} fontFamily={"'Manrope',sans-serif"}>We would love to talk</Typography>
         <Typography gutterBottom fontSize={"46px"} fontWeight={500} fontFamily={"'Marcellus',sans-serif"}>with our grea     customer</Typography>
         <Typography fontSize={"18px"} color={"#808080"} fontFamily={"Manrope', sans-serif"}>Give us a call or drop by anytime     we endeavourto answer all enquiries within 24 hours on business days I’ve created a vocabulary of different styles      draw from many different ways to take a picture.</Typography>
      <Button style={{backgroundColor:'#b2905f', color:'white', borderRadius:'0px',marginTop:'30px', padding:'14px 30px'}}>
        SHOP NOW
      </Button>
        </Grid>
        <Grid item xs={12} md={12} lg={6} sx={{marginTop:{md:"20px",xs:"20px"}}}>
            <img src={img1} alt='' width={"100%"}/>
        </Grid>
        </Grid>
        </Box>
    </React.Fragment>

{/* ----------------- Section-4  ---------------------- */}

    <Box>
        <Box  justifyContent={'center'} gap={2} sx={{display:{lg:"flex",md:'block',xs:"block"},textAlign:{md:'center',xs:'center'}}}>
            <Typography fontSize={"46px"} fontWeight={600} >Fill out the form and </Typography>
            <Typography fontSize={"46px"} fontWeight={500}>we'll get back soon!</Typography>
        </Box>
        <Grid container item xs={12} margin={"50px"} width={"100%"}>
            <Grid item fontSize={"30px"} xs={10} sm={4} md={6} lg={6}>
                <Box>
                    <Typography>
                        First name 
                    </Typography>
                    <Box><input type="text"  placeholder='First name' style={{border:"none",outline:"none",margin:'30px'}}/></Box>
                </Box>
                <Box>
                    <Typography>
                        Phone number
                    </Typography>
                    <Box><input type="text"  placeholder='Phone number' style={{border:"none",outline:"none",margin:'30px'}}/></Box>
                </Box>
                <Box>
                    <Typography>
                        Enter your message
                    </Typography>
                    <Box><input type="text"  placeholder='Enter your massage' style={{border:"none",outline:"none",margin:'30px'}}/></Box>
                </Box>
            </Grid>
            <Grid item fontSize={"40px"} xs={10} sm={4} md={6} lg={6}>
            <Box>
             <Typography>
                 Last name 
             </Typography>
             <Box><input type="text"  placeholder='Last name' style={{border:"none",outline:"none",margin:'30px'}}/></Box>
            </Box>
                <Box>
                 <Typography>
                    Email address 
                 </Typography>
                <Box><input type="text"  placeholder='Email address' style={{border:"none",outline:"none",margin:'30px'}}/></Box>
            </Box>    
            </Grid>
        </Grid>
    <Button style={{backgroundColor:'#b2905f', color:'white', borderRadius:'0px',marginTop:'90px', padding:'14px 30px',margin:"40px"}}>
        SAND MASSEGE
      </Button>
    </Box>
    </Box>
  )
}

export default Aboutus
