import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import footerLogo from "../assets/images/footer/Logo_1.png"
import fImg2 from "../assets/images/footer/FooterImg_2.jpg"
import fImg3 from "../assets/images/footer/FooterImg_3.jpg"
import fImg4 from "../assets/images/footer/FooterImg_4.jpg"
import fImg5 from "../assets/images/footer/FooterImg_5.jpg"





function Footer() {
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }} color={"gray"} padding={"80px 0 50px 20px"}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"center"} display={"flex"}>
                        <Grid item xs={12} md={4} lg={2} width={"100%"}>
                            <Typography variant="h5" component="h2" color={"black"} fontWeight={"600"} padding={"0 0 20px 0"} fontSize={"23px"}>Information</Typography>
                            <Typography>Store Locator</Typography>
                            <Typography marginTop={"15px"}>Enable cookies</Typography>
                            <Typography marginTop={"15px"}>Customer service</Typography>
                            <Typography marginTop={"15px"}>Whole sale</Typography>
                            <Typography marginTop={"15px"}>Get the voucher</Typography>
                            <Typography marginTop={"15px"}>Help & support</Typography>
                        </Grid>

                        <Grid item xs={12} md={4} lg={2}>
                            <Typography variant="h5" component="h2" color={"black"} fontWeight={"600"} padding={"0 0 20px 0"} fontSize={"23px"}>Customer care</Typography>
                            <Typography>About story</Typography>
                            <Typography marginTop={"15px"}>Privacy policy</Typography>
                            <Typography marginTop={"15px"}>Return policy</Typography>
                            <Typography marginTop={"15px"}>Terms & condition</Typography>
                            <Typography marginTop={"15px"}>Payment method</Typography>
                            <Typography marginTop={"15px"}>My wishlist</Typography>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4} textAlign={"center"}>
                            <Typography className='footerLogo'><img src={footerLogo} alt="" /></Typography>
                            <Typography marginTop={"15px"}>The Internet tend to repeat predefined chunks as necessary, making this the.. !</Typography>
                            <Typography variant="h5" color={"black"} fontSize={"20px"} fontWeight={"600"} marginTop={"15px"} fontFamily={"sans-serif"}>Follow us instagram</Typography>
                            <Typography display={"flex"} marginTop={"18px"}>
                                <Grid><img src={fImg2} alt="" height={"100vh"} /></Grid>
                                <Grid style={{ marginLeft: "15px" }}><img src={fImg3} alt="" height={"100vh"} /></Grid>
                                <Grid style={{ marginLeft: "15px" }}><img src={fImg4} alt="" height={"100vh"} /></Grid>
                                <Grid style={{ marginLeft: "15px" }}><img src={fImg5} alt="" height={"100vh"} /></Grid>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4} lg={2}>
                            <Typography variant="h5" component="h2" color={"black"} fontWeight={"600"} padding={"0 0 20px 0"} fontSize={"23px"}>My account</Typography>
                            <Typography>Order & returns</Typography>
                            <Typography marginTop={"15px"}>Manage account</Typography>
                            <Typography marginTop={"15px"}>Saved items</Typography>
                            <Typography marginTop={"15px"}>Our story</Typography>
                            <Typography marginTop={"15px"}>Work with us</Typography>
                            <Typography marginTop={"15px"}>Contact us</Typography>
                        </Grid>

                        <Grid item xs={12} md={4} lg={2}>
                            <Typography variant="h5" component="h2" color={"black"} fontWeight={"600"} padding={"0 0 20px 0"} fontSize={"23px"}>Followed by</Typography>

                            <Typography>Facebook</Typography>
                            <Typography marginTop={"15px"}>Instagram</Typography>
                            <Typography marginTop={"15px"}>Dribbble</Typography>
                            <Typography marginTop={"15px"}>Twitter</Typography>
                            <Typography marginTop={"15px"}>Printerest</Typography>
                            <Typography marginTop={"15px"}>Youtube</Typography>

                        </Grid>

                    </Grid>
                </Box>
            </Container>
            <Box className='line'></Box>
            <Typography color={"gray"} textAlign={"center"} marginBottom={"20px"} marginTop={"40px"}>Copyright  2023 by qodexTM</Typography>
        </div>
    )
}

export default Footer;