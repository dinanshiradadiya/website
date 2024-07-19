import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import img1 from '../../assets/images/pages/privacypolicy/img1.webp'
import img2 from '../../assets/images/pages/privacypolicy/privacy-policy-02.webp'
import img3 from '../../assets/images/pages/privacypolicy/privacy-policy-03.webp'
import img4 from '../../assets/images/pages/privacypolicy/London.avif'
import img5 from '../../assets/images/pages/privacypolicy/Australia.webp'


function Privacypolicy() {
  return (

    <Box>

    {/* ----------------- Section-1 -------------------- */}

    <Box py={10} marginBottom={5} sx={{ justifyContent: "center", display: "flex", alignItems: "center", backgroundImage:"url('https://qx-aolie.myshopify.com/cdn/shop/files/breadcrumb.jpg?v=1696586356')",backgroundSize:"cover"}}>
        <Container maxWidth="lg">
            <Box width={"100%"} textAlign={"center"} sx={{display:{lg:"flex",md:"block",xs:"block"},justifyContent:{lg:"space-between",md:"center",xs:"center"}}}>
                <Typography variant="h1" component="h2" fontSize={"37px"} fontWeight={"600"} color={"white"}>
                Privacy Policy
                </Typography>
                <Typography variant="h1" component="h2" fontSize={"20px"} color={"white"}>
                    Home | Privacy Policy
                </Typography>
            </Box>
        </Container>
    </Box>

    {/* ----------------- Section-2 -------------------- */}

    <Box sx={{backgroundColor:"#f8f6f1",padding:'40px'}}>
    <Grid item container xs={12} spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
            <img src={img1} alt="" width={"100%"}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Box bgcolor={"white"} padding={"40px"}>
                    <Typography fontSize={"19px"} fontWeight={600} gutterBottom>
                    There are many variations of passages even slightly
                    </Typography>
                    <Typography paddingTop={2} paddingBottom={3} sx={{lineHeight:"30px",fontSize:"17px", color:"#808080"}}>
                    Model sentence structures, to generate lorem Ipsum a which looks reasonable
                    </Typography>
                    <Button variant='text' size='large' sx={{textDecoration:"underline",color:"#b2905f"}}>
                    READ MORE
                    </Button>
                </Box>  
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <img src={img2} alt="" width={"100%"}/>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Box bgcolor={"white"} padding={"40px"}>
                    <Typography fontSize={"19px"} fontWeight={600} gutterBottom>
                    There are many variations of passages even slightly
                    </Typography>
                    <Typography paddingTop={2} paddingBottom={3} sx={{lineHeight:"30px",fontSize:"17px", color:"#808080"}}>
                    Model sentence structures, to generate lorem Ipsum a which looks reasonable
                    </Typography>
                    <Button variant='text' size='large' sx={{textDecoration:"underline",color:"#b2905f"}}>
                    READ MORE
                    </Button>
                </Box> 
        </Grid>
    </Grid>
</Box>

{/* ----------------- Section-3 -------------------- */}

<Box margin={8} marginTop={16} marginBottom={16}>
     <Grid container item xs={12} spacing={3}>
         <Grid item xs={12} md={6} lg={6}>
             <Typography fontSize={"46px"} marginBottom={"30px"}><b>What is a</b> Privacy Policy?</Typography>
             <Typography sx={{color:"#808080",lineHeight:"40px"}}>
             There are many variations of passages of lorem Ipsum available, but the majority have suffered   alteration in some form, by injected humour,
             </Typography>
       </Grid>
          <Grid item xs={12} md={6} lg={6}>
           <Typography sx={{color:"#808080",marginBottom:"30px",lineHeight:"40px"}}>
           All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator the generated
           </Typography>
            <Typography sx={{color:"#808080",marginBottom:"30px",lineHeight:"40px"}}>
            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to where
            </Typography>
            <Button style={{backgroundColor:'#b2905f', color:'white', borderRadius:'0px',padding:'14px 30px'}}>
           PRIVACY METHOD
           </Button>
           </Grid>
        </Grid>
    </Box>

{/* ----------------- Section-4 -------------------- */}

<Box sx={{backgroundColor:"#f8f6f1",padding:'40px'}}>
        <Grid container item xs={12}>
            <Grid item xs={12} md={6} lg={6} >
                <img src={img3} width={"100%"} />
            </Grid>

            <Grid item xs={12} md={0} lg={2}>
            </Grid>

            <Grid item xs={12} md={8} lg={4} paddingTop={9} >
            <Box >
              <Box sx={{backgroundColor:"white",padding:"30px",border:"1px solid gray",marginBottom:"36px"}}>
                <Box display={'flex'} gap={3}> 
                    <img src={img4} />
                    <Typography fontWeight={600}>
                    London
                    </Typography>
                </Box>
                    <Typography sx={{lineHeight:"30px",color:"#808080"}}>
                    401 Broadway, 24th floor,<br/>
                    orchard view, london, UK
                    </Typography>
                    <Typography sx={{color:"#b2905f",marginTop:"16px"}}>
                    info@yourdomain.com
                    </Typography>
                </Box>
                <Box sx={{backgroundColor:"white",padding:"30px",border:"1px solid gray"}}>
                <Box display={'flex'} gap={3}> 
                    <img src={img5} />
                    <Typography fontWeight={600}>
                    Australia
                    </Typography>
                </Box>
                    <Typography sx={{lineHeight:"30px",color:"#808080"}}>
                    401 Broadway, 24th floor,<br/>
                    orchard view,australia
                    </Typography>
                    <Typography sx={{color:"#b2905f",marginTop:"16px"}}>
                    info@yourdomain.com
                    </Typography>
                </Box>  
                </Box>
            </Grid>
        </Grid>
    </Box>


{/* ----------------- Section-5 -------------------- */}

<Box margin={7}>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
        <Box>
        <Box sx={{border:'1px solid gray',padding:"40px"}}>
             <Typography sx={{fontSize:"28px",fontWeight:'500'}}>
             Changes to personally identifiable information
             </Typography>
             <Typography sx={{color:"#808080",lineHeight:"30px",marginTop:"30px"}}>
             There are many variations of passages of lorem available, but the majority have suffered alterat some form, by injected humour, or randomised which don't look even slightly believable.
             </Typography>
             <Typography sx={{fontSize:"22px",fontWeight:"600", paddingTop:"40px"}}>
             Providing your personal data to others
             </Typography>
             <Typography sx={{fontSize:"22px",fontWeight:"600", paddingTop:"40px"}}>
             How we use your personal data
             </Typography>
        </Box>
        </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <Box>
        <Box sx={{border:'1px solid gray',padding:"40px"}}>
            <Typography sx={{fontSize:"28px",fontWeight:'500'}}>
            Changes to personally identifiable information
            </Typography>
            <Typography sx={{color:"#808080",lineHeight:"30px",marginTop:"30px"}}>
            There are many variations of passages of lorem available, but the majority have suffered alterat some form, by injected humour, or randomised which don't look even slightly believable.
            </Typography>
            <Typography sx={{fontSize:"22px",fontWeight:"600", paddingTop:"40px"}}>
            Providing your personal data to others
            </Typography>
            <Typography sx={{fontSize:"22px",fontWeight:"600", paddingTop:"40px"}}>
            How we use your personal data
            </Typography>
        </Box>
        </Box>
        </Grid>
        </Grid>
    </Box>


    </Box>
  )
}

export default Privacypolicy
