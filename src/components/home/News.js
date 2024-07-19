import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import news1 from '../../assets/images/home/News/news1.webp'
import news2 from '../../assets/images/home/News/news2.webp'
import news3 from '../../assets/images/home/News/news3.webp'

function News() {
    return (
        <Container maxWidth sx={{backgroundColor:'#f8f6f1'}}>
         <Box sx={{backgroundColor:'#f8f6f1',width:"100%",paddingBottom:'100px'}}>
            <Box display={'flex'} justifyContent={'center'} gap={2} paddingTop={5}>
                <Typography sx={{ fontSize: 40, fontWeight: 600 ,fontFamily:"'Manrope', sans-serif"}}>Every</Typography>
                <Typography sx={{ fontSize: 40, fontFamily: "'Marcellus', sans-serif" }}>latest news</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
                <Grid container spacing={3} xs={12} marginTop={5}>
                  <Grid item xs={12} md={6} lg={3}>
                    <Box>
                    <Box position={'relative'}>
                      <img src={news1} alt='' width={"100%"}  />
                      <Box position={"absolute"} backgroundColor={"white"} color={"#b2905f"} bottom={"-20px"} padding={2} left={"20px"} fontWeight={600}>08 SEP 22</Box>
                      </Box> 
                      <Typography fontSize={18} fontWeight={600} marginTop={5}>What is necklace?</Typography>
                      <Typography color={"#808080"}  marginTop={2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea</Typography>
                      <Button sx={{ backgroundColor: '#b2905f', color: 'white', border: "2px solid #b2905f", borderRadius: '0px', marginTop: '20px', padding: '12px 24px', fontSize: "16px", "&:hover": { backgroundColor: "#f8f6f1", color: "#b2905f" } }}>
                            READ MORE
                        </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Box>
                    <Box position={"relative"}>
                      <img src={news2} alt='' width={"100%"}/>
                      <Box position={"absolute"} backgroundColor={"white"} color={"#b2905f"} bottom={"-20px"} padding={2} left={"20px"} fontWeight={600}>06 SEP 22</Box>
                    </Box>  
                      <Typography fontSize={18} fontWeight={600} marginTop={5}>Why do it we use?</Typography>
                      <Typography color={"#808080"}  marginTop={2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea</Typography>
                      <Button sx={{ backgroundColor: '#b2905f', color: 'white', border: "2px solid #b2905f", borderRadius: '0px', marginTop: '20px', padding: '12px 24px', fontSize: "16px", "&:hover": { backgroundColor: "#f8f6f1", color: "#b2905f" } }}>
                            READ MORE
                        </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Box>
                     <Box position={"relative"}>
                      <img src={news3} alt='' width={"100%"}/>
                      <Box position={"absolute"} backgroundColor={"white"} color={"#b2905f"} bottom={"-20px"} padding={2} left={"20px"} fontWeight={600}>08 SEP 22</Box>
                     </Box>
                      <Typography fontSize={18} fontWeight={600} marginTop={5}>Which of undertakes us ever?</Typography>
                      <Typography color={"#808080"}  marginTop={2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea</Typography>
                      <Button sx={{ backgroundColor: '#b2905f', color: 'white', border: "2px solid #b2905f", borderRadius: '0px', marginTop: '20px', padding: '12px 24px', fontSize: "16px", "&:hover": { backgroundColor: "#f8f6f1", color: "#b2905f" } }}>
                            READ MORE
                        </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Box> 
                     <Box position={"relative"}>
                      <img src={news1} alt='' width={"100%"}/>
                      <Box position={"absolute"} backgroundColor={"white"} color={"#b2905f"} bottom={"-20px"} padding={2} left={"20px"} fontWeight={600}>08 SEP 22</Box>
                    </Box> 
                      <Typography fontSize={18} fontWeight={600} marginTop={5}>What is necklace?</Typography>
                      <Typography color={"#808080"} marginTop={2}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea</Typography>
                      <Button sx={{ backgroundColor: '#b2905f', color: 'white', border: "2px solid #b2905f", borderRadius: '0px', marginTop: '20px', padding: '12px 24px', fontSize: "16px", "&:hover": { backgroundColor: "#f8f6f1", color: "#b2905f" } }}>
                            READ MORE
                        </Button>
                    </Box>
                  </Grid>

                </Grid>
            </Box>
            </Box>
            </Container>  
    )
}

export default News