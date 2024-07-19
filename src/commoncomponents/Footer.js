import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import footerLogo from "../assets/images/footer/Logo_1.png"
import fImg2 from "../assets/images/footer/FooterImg_2.jpg"
import fImg3 from "../assets/images/footer/FooterImg_3.jpg"
import fImg4 from "../assets/images/footer/FooterImg_4.jpg"
import fImg5 from "../assets/images/footer/FooterImg_5.jpg"





function Footer() {

    // const faqs = [
    //     {
    //         question: "What do you mean by item?",
    //         answer: "As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers.",
    //     },
    //     {
    //         question: "What are some examples?",
    //         answer: "As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers.",
    //     },
    //     {
    //         question: "I'm not sure if my use is covered?",
    //         answer: "As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers.",
    //     },
    // ];

    return (
        <Box>
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }} color={"gray"} padding={" 90px 0 40px 20px"}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent={"center"} display={"flex"}>
                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", } }} width={"100%"}>
                            <Typography variant="h5" component="h2" color={"black"} fontWeight={"600"} padding={"0 0 20px 0"} fontSize={"23px"}>Information</Typography>
                            <Typography>Store Locator</Typography>
                            <Typography marginTop={"15px"}>Enable cookies</Typography>
                            <Typography marginTop={"15px"}>Customer service</Typography>
                            <Typography marginTop={"15px"}>Whole sale</Typography>
                            <Typography marginTop={"15px"}>Get the voucher</Typography>
                            <Typography marginTop={"15px"}>Help & support</Typography>
                        </Grid>

                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", } }}>
                            <Typography variant="h5" component="h2" color={"black"} fontWeight={"600"} padding={"0 0 20px 0"} fontSize={"23px"}>Customer care</Typography>
                            <Typography>About story</Typography>
                            <Typography marginTop={"15px"}>Privacy policy</Typography>
                            <Typography marginTop={"15px"}>Return policy</Typography>
                            <Typography marginTop={"15px"}>Terms & condition</Typography>
                            <Typography marginTop={"15px"}>Payment method</Typography>
                            <Typography marginTop={"15px"}>My wishlist</Typography>
                        </Grid>

                        <Grid item xs={12} lg={4} textAlign={"center"}>
                            <Typography className='footerLogo'><img src={footerLogo} alt="" /></Typography>
                            <Typography marginTop={"15px"}>The Internet tend to repeat predefined chunks as necessary, making this the.. !</Typography>
                            <Typography variant="h5" color={"black"} fontSize={"20px"} fontWeight={"600"} marginTop={"15px"} fontFamily={"sans-serif"}>Follow us instagram</Typography>
                            <Grid container item xs={12} sx={{ display: { xs: "flex", sm: "flex", md: "flex", lg: "flex", } }} display={"flex"} marginTop={"18px"}>
                                <Grid item xs={12} lg={3} md={3} sm={3} ><img src={fImg2} alt="" height={"100vh"} /></Grid>
                                <Grid item xs={12} lg={3} md={3} sm={3} ><img src={fImg3} alt="" height={"100vh"} /></Grid>
                                <Grid item xs={12} lg={3} md={3} sm={3} ><img src={fImg4} alt="" height={"100vh"} /></Grid>
                                <Grid item xs={12} lg={3} md={3} sm={3} ><img src={fImg5} alt="" height={"100vh"} /></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", } }}>
                            <Typography variant="h5" component="h2" color={"black"} fontWeight={"600"} padding={"0 0 20px 0"} fontSize={"23px"}>My account</Typography>
                            <Typography>Order & returns</Typography>
                            <Typography marginTop={"15px"}>Manage account</Typography>
                            <Typography marginTop={"15px"}>Saved items</Typography>
                            <Typography marginTop={"15px"}>Our story</Typography>
                            <Typography marginTop={"15px"}>Work with us</Typography>
                            <Typography marginTop={"15px"}>Contact us</Typography>
                        </Grid>

                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", } }}>
                            <Typography variant="h5" component="h2" color={"black"} fontWeight={"600"} padding={"0 0 20px 0"} fontSize={"23px"}>Followed by</Typography>

                            <Typography>Facebook</Typography>
                            <Typography marginTop={"15px"}>Instagram</Typography>
                            <Typography marginTop={"15px"}>Dribbble</Typography>
                            <Typography marginTop={"15px"}>Twitter</Typography>
                            <Typography marginTop={"15px"}>Printerest</Typography>
                            <Typography marginTop={"15px"}>Youtube</Typography>

                        </Grid>

                    </Grid>
                    <Box sx={{ marginTop:"50px",  display: { xs: "block", sm: "block", md: "none", lg: "none", }  }} display={"none"}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ fontWeight: "600", fontSize: "18px" }}
                            >
                                Information
                            </AccordionSummary>
                            <AccordionDetails>
                                Store locator
                            </AccordionDetails>
                            <AccordionDetails>
                                Store locator
                            </AccordionDetails>
                            <AccordionDetails>
                                Customer service
                            </AccordionDetails>
                            <AccordionDetails>
                                Whole sale
                            </AccordionDetails>
                            <AccordionDetails>
                                Get the voucher
                            </AccordionDetails>
                            <AccordionDetails>
                                Help & support
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ fontWeight: "600", fontSize: "18px" }}
                            >
                                customer Care
                            </AccordionSummary>
                            <AccordionDetails>
                                About story
                            </AccordionDetails>
                            <AccordionDetails>
                                Privacy policy
                            </AccordionDetails>
                            <AccordionDetails>
                                Return policy
                            </AccordionDetails>
                            <AccordionDetails>
                                Terms & condition
                            </AccordionDetails>
                            <AccordionDetails>
                                Payment method
                            </AccordionDetails>
                            <AccordionDetails>
                                My wishlist
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ fontWeight: "600", fontSize: "18px" }}
                            >
                                My account
                            </AccordionSummary>
                            <AccordionDetails>
                                Order & returns
                            </AccordionDetails>
                            <AccordionDetails>
                                Manage account
                            </AccordionDetails>
                            <AccordionDetails>
                                Saved items
                            </AccordionDetails>
                            <AccordionDetails>
                                Our story
                            </AccordionDetails>
                            <AccordionDetails>
                                Work with us
                            </AccordionDetails>
                            <AccordionDetails>
                                Contact us
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ fontWeight: "600", fontSize: "18px" }}
                            >
                                followed me
                            </AccordionSummary>
                            <AccordionDetails>
                                Facebook
                            </AccordionDetails>
                            <AccordionDetails>
                                Instagram
                            </AccordionDetails>
                            <AccordionDetails>
                                Instagram
                            </AccordionDetails>
                            <AccordionDetails>
                                Twitter
                            </AccordionDetails>
                            <AccordionDetails>
                                Pinterest
                            </AccordionDetails>
                            <AccordionDetails>
                                Youtube
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Container>
            <Box className='line'></Box>
            <Typography color={"gray"} textAlign={"center"} marginBottom={"20px"} marginTop={"40px"}>Copyright  2023 by qodexTM</Typography>
        </Box>
    )
}

export default Footer;