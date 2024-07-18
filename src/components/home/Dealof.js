import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Grid, Typography } from '@mui/material';
import jewellery1 from '../../assets/images/home/Dealof/jewellery1.webp'
import jewellery2 from '../../assets/images/home/Dealof/jewellery2.webp'



function Dealof() {
  return (
    <div>
      <React.Fragment>
        <Box sx={{ bgcolor: '#f8f6f1', paddingBottom: "100px", width: "100%" }}>
          <CssBaseline />
          <Container maxWidth sx={{ textAlign: 'center', marginBottom: '70px' }}>
            <Box display={'flex'} justifyContent={'center'} gap={3}>
              <Typography fontSize={'40px'} fontFamily={"''Manrope',sans-serif'"} fontWeight={700}>
                Deal of
              </Typography>
              <Typography fontFamily={"'Marcellus', sans-serif"} fontWeight={400} fontSize={'40px'} textAlign={'center'}>
                the day
              </Typography>
            </Box>
          </Container>

          {/* -------------- */}
          <Container>
            <Box sx={{ display: 'flex', justifyContent: "center" }}>
              <Grid container item xs={12} spacing={5} sx={{ display: 'flex', justifyContent: "center" }}>
                <Grid item xs={12} lg={6} md={12}  display={"flex"} >
                  {/* <Box sx={{ display: 'flex' }} md={12}> */}
                    <Grid item xs={6}  sx={{ display: 'flex'  }} >
                    <img src={jewellery1} alt="" width={"100%"} />
                    </Grid>
                    <Grid item xs={6}  spacing={3} sx={{ backgroundColor: "white", padding:"20px" }} >
                      <Box sx={{ margin: '15px', color: 'white', paddingTop: '40px', marginBottom:"30px",  }}>
                        <Typography gutterBottom style={{ fontFamily: "''Manrope','sans-serif''", color: 'black', fontWeight: "500", fontSize: '20px' }}>Borisa nose pin</Typography>
                        <Typography gutterBottom style={{ fontFamily: "'Marcellus', sans-serif", fontSize: '20px',color: "#b2905f" }}>$31.00 <s>~$39.00</s></Typography>
                      </Box>
                      <Grid container item xs={12} spacing={2} >
                          <Grid  item xs={12} lg={3} md={6}>
                            <Box width={"60px"} backgroundColor={"#f8f6f1"}>
                            <Typography sx={{display:"flex" , justifyContent:"center"}} color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              239
                            </Typography>
                            <Typography sx={{display:"flex" , justifyContent:"center"}}  color={'black'} fontSize={"12px"} fontWeight={500}>
                              DAY
                            </Typography>
                            </Box>
                          </Grid>
                          <Grid  item xs={12} lg={3} md={6}>
                            <Box   backgroundColor={"#f8f6f1"}>
                            <Typography color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              239
                            </Typography>
                            <Typography color={'black'} fontSize={"12px"} fontWeight={500}>
                              DAY
                            </Typography>
                            </Box>
                          </Grid>
                          {/* <Grid item xs={12} lg={3} md={6} backgroundColor={"#f8f6f1"} padding={"8px"}>
                            <Typography color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              13
                            </Typography>
                            <Typography color={'black'} fontSize={"12px"} fontWeight={500}>
                              HRS
                            </Typography>
                          </Grid>
                          <Grid item xs={12} lg={3} md={6} backgroundColor={"#f8f6f1"} padding={"8px"}>
                            <Typography color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              15
                            </Typography>
                            <Typography color={'black'} fontSize={"12px"} fontWeight={500}>
                              MIN
                            </Typography>
                          </Grid>
                          <Grid item xs={12} lg={3} md={6} backgroundColor={"#f8f6f1"} padding={"8px"}>
                            <Typography color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              42
                            </Typography>
                            <Typography color={'black'} fontSize={"12px"} fontWeight={500}>
                              SEC
                            </Typography>
                          </Grid> */}
                        </Grid>
                        <Button style={{ backgroundColor: '#b2905f', color: 'white', borderRadius: '0px', marginTop: '40px', padding: '12px 24px', fontSize: "16px" }}>
                          ADD TO CART
                        </Button>
                    </Grid>
                  {/* </Box> */}
                </Grid>
                {/* <Grid item xs={12} lg={6} md={12} sm={12}>
                  <Box sx={{ display: 'flex', width: '100%' }}>
                    <img src={jewellery2} width={350} height={350} />
                    <Box sx={{ backgroundColor: 'white' }}>
                      <Box sx={{ margin: '35px', color: 'white' }}>
                        <Typography gutterBottom style={{ fontFamily: "''Manrope','sans-serif''", color: 'black', fontWeight: "500", fontSize: '20px' }}>Eimear necklace</Typography>
                        <Typography gutterBottom style={{ fontFamily: "'Marcellus', sans-serif", fontSize: '20px', color: "#b2905f" }}>$25.00 <s>~$45.00</s></Typography>
                        <Box sx={{ display: 'flex', gap: '4px', textAlign: "center" }}>
                          <Box backgroundColor={"#f8f6f1"} padding={"10px"}>
                            <Typography color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              239
                            </Typography>
                            <Typography color={'black'} fontSize={"12px"} fontWeight={500}>
                              DAY
                            </Typography>
                          </Box>
                          <Box backgroundColor={"#f8f6f1"} padding={"10px"}>
                            <Typography color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              13
                            </Typography>
                            <Typography color={'black'} fontSize={"12px"} fontWeight={500}>
                              HRS
                            </Typography>
                          </Box>
                          <Box backgroundColor={"#f8f6f1"} padding={"10px"}>
                            <Typography color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              15
                            </Typography>
                            <Typography color={'black'} fontSize={"12px"} fontWeight={500}>
                              MIN
                            </Typography>
                          </Box>
                          <Box backgroundColor={"#f8f6f1"} padding={"10px"}>
                            <Typography color={"#b2905f"} fontSize={"20px"} fontWeight={500}>
                              42
                            </Typography>
                            <Typography color={'black'} fontSize={"12px"} fontWeight={500}>
                              SEC
                            </Typography>
                          </Box>
                        </Box>
                        <Button style={{ backgroundColor: '#b2905f', color: 'white', borderRadius: '0px', marginTop: '40px', padding: '12px 24px', fontSize: "16px" }}>
                          ADD TO CART
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid> */}
              </Grid>
            </Box>
          </Container>
        </Box>
      </React.Fragment>
    </div>
  )
}

export default Dealof
