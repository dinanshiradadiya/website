import { Box, Button, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'

function Cate() {
    return (
            <Box paddingBottom={5}>
                <Grid spacing={2} container maxWidth item xs={12}>
                    <Grid item xs={12} md={6} lg={4} display={"flex"} justifyContent={"center"}>
                        <CardMedia
                            sx={{ height:500,width:400,marginTop:5}}
                            image="https://qx-aolie.myshopify.com/cdn/shop/files/about-us-img.jpg?v=1696572661&width=832"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} display={"flex"} justifyContent={"center"}>
                     <Box>
                     <Box marginBottom={5} sx={{marginTop:5,paddingTop:5}}>
                       <Typography variant='h6'>Aolie jewellery store history 2023</Typography>
                       <Typography variant='h3' sx={{marginTop:3,fontWeight:600}}>Jewellery that as</Typography>
                       <Typography variant='h3' sx={{fontFamily:"'Marcellus', sans-serif"}}>beautiful as you are.</Typography>
                       <Typography  sx={{marginTop:3,color:"#808080"}}>Our jewelry is made by the finest artists and carefully 
                       <br/>selected to reflect your style and personality we our 
                       <br/>jewellery collection.</Typography>
                    </Box>  
                       <Button variant='contained' sx={{backgroundColor:"#b2905f"}}>EXPLORE NOW</Button>
                       </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} marginTop={5} display={"flex"} justifyContent={"center"}>
                    <Box>
                      <Box sx={{backgroundColor:"#f8f6f1",height:210,width:300}} paddingLeft={4}>
                         <Typography sx={{fontSize:18,fontWeight:600,paddingTop:5}}>Since 1998</Typography>
                         <Typography sx={{marginTop:3,marginBottom:4}}>The company was born out of a
                            <br/>desire to create functional conta.</Typography>
                          <Link href="#" sx={{color:'#b2905f'}}>SEE MORE</Link>
                      </Box>
                      <Box sx={{backgroundColor:"#f8f6f1",height:210,width:300}} marginTop={4} paddingLeft={4} marginBottom={10}>
                         <Typography sx={{fontSize:18,fontWeight:600,paddingTop:5}}>Since 2023</Typography>
                         <Typography sx={{marginTop:3,marginBottom:4}}>The company was born out of a 
                          <br/>desire to create functional conta.</Typography>
                          <Link href="#" sx={{color:"#b2905f"}}>SEE MORE</Link>
                      </Box>
                    </Box>
                    </Grid>
                </Grid>

            </Box>
    )
}

export default Cate