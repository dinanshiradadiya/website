import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import policy from '../Assets/policy/policy.webp'
import pay1 from '../Assets/payment/pay1.webp'
import pay2 from '../Assets/payment/pay2.webp'
import pay3 from '../Assets/payment/pay3.webp'
import pay4 from '../Assets/payment/pay4.webp'
import pay5 from '../Assets/payment/pay5.webp'
import pay6 from '../Assets/payment/pay6.webp'
import pay7 from '../Assets/payment/pay7.webp'

function Paymentpolicy() {
    return (
        <Box>
            <Box py={10} marginBottom={5} sx={{ justifyContent: "center", display: "flex", alignItems: "center", backgroundImage: `url(${policy})` }}>
                <Container maxWidth="lg">
                    <Box width={"100%"} textAlign={"center"} sx={{ display: { lg: "flex", md: "block", xs: "block" }, justifyContent: { lg: "space-between", md: "center", xs: "center" } }}>
                        <Typography variant="h1" component="h2" fontSize={"37px"} fontWeight={"600"} color={"white"}>
                            Payment Policy
                        </Typography>
                        <Typography variant="h1" component="h2" fontSize={"20px"} color={"white"}>
                            Home | Payment Policy
                        </Typography>
                    </Box>
                </Container>
            </Box>
           <Box>
           <Container maxWidth>
            <Grid item container xs={12} spacing={4} padding={6}>
                <Grid item xs={12} md={6} lg={4} >
                <Box sx={{display: {lg: "flex",md:"flex", xs:"block"}}} backgroundColor={"#f8f6f1"}>
                    <Box padding={3}>
                        <img src={pay1} />
                    </Box>
                    <Box padding={4}>
                        <Typography variant='h6' fontWeight={600}>Visa method</Typography>
                        <Typography color={"#808080"}>Lorem ipsum is simply
                            of the printing and type.</Typography>
                    </Box>
                    </Box>    
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                <Box sx={{display: {lg: "flex",md:"flex", xs:"block"}}} backgroundColor={"#f8f6f1"}>
                <Box padding={3}>
                        <img src={pay2} />
                    </Box>
                    <Box padding={4}>
                        <Typography variant='h6' fontWeight={600}>Sage method</Typography>
                        <Typography color={"#808080"}>Lorem ipsum is simply
                            of the printing and type.</Typography>
                    </Box>
                    </Box>    
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                <Box sx={{display: {lg: "flex",md:"flex", xs:"block"}}} backgroundColor={"#f8f6f1"}>
                <Box padding={3}>
                        <img src={pay3} />
                    </Box>
                    <Box padding={4}>
                        <Typography variant='h6' fontWeight={600}>Paypal method</Typography>
                        <Typography color={"#808080"}>Lorem ipsum is simply
                            of the printing and type.</Typography>
                    </Box>
                    </Box>    
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <Box sx={{display: {lg: "flex",md:"flex", xs:"block"}}} backgroundColor={"#f8f6f1"}>
                <Box padding={3}>
                        <img src={pay4} />
                    </Box>
                    <Box padding={4}>
                        <Typography variant='h6' fontWeight={600}>Maestro method</Typography>
                        <Typography color={"#808080"}>Lorem ipsum is simply
                            of the printing and type.</Typography>
                    </Box>
                    </Box>     
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                <Box sx={{display: {lg: "flex",md:"flex", xs:"block"}}} backgroundColor={"#f8f6f1"}>
                <Box padding={3}>
                        <img src={pay5} />
                    </Box>
                    <Box padding={4}>
                        <Typography variant='h6' fontWeight={600}>Eway method</Typography>
                        <Typography color={"#808080"}>Lorem ipsum is simply
                            of the printing and type.</Typography>
                    </Box>
                    </Box>    
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                <Box sx={{display: {lg: "flex",md:"flex", xs:"block"}}} backgroundColor={"#f8f6f1"}>
                <Box padding={3}>
                        <img src={pay6} />
                    </Box>
                    <Box padding={4}>
                        <Typography variant='h6' fontWeight={600}>Discover method</Typography>
                        <Typography color={"#808080"}>Lorem ipsum is simply
                            of the printing and type.</Typography>
                    </Box>
                    </Box>    
                </Grid>
            </Grid>
            </Container>
            </Box>
            <Box marginTop={10}>
                <Grid container xs={12}>
                    <Grid item xs={12} lg={6}>
                        <img src={pay7} width={"100%"} />
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ backgroundColor: "#f8f6f1" }}>
                        <Box padding={5}>
                            <Box>
                                <Typography variant='h3' fontWeight={600}>Payment method to</Typography>
                                <Typography variant='h3' fontFamily={"'Marcellus', sans-serif"}>credit card use one !</Typography>
                            </Box>
                            <Box marginTop={3}>
                                <Box sx={{display:"flex"}}>
                                <Typography sx={{backgroundColor:"white",border:"1px solid gray",margin:"20px 10px 0 0",borderRadius:"50%",height:"6%",width:"6%",display:"flex",justifyContent:"center",fontSize:"17px",fontWeight:"600",color:"#b2905f"}}>1</Typography>
                                <Typography lineHeight={2} fontSize={18} color={"#808080"} marginBottom={2} margin={"0 0 0 10px"}>Bank transfers are a payment method the from a customer bank to a merchant bank</Typography>
                                </Box>
                                <Box sx={{display:"flex"}}>
                                <Typography sx={{backgroundColor:"white",border:"1px solid gray",margin:"20px 10px 0 0",borderRadius:"50%",height:"6%",width:"6%",display:"flex",justifyContent:"center",fontSize:"17px",fontWeight:"600",color:"#b2905f"}}>2</Typography>
                                <Typography lineHeight={2} fontSize={18} color={"#808080"} marginBottom={2}>To learn more, and to configure payment methods, define types payment methods</Typography>
                                </Box>
                                <Box sx={{display:"flex"}}>
                                <Typography sx={{backgroundColor:"white",border:"1px solid gray",margin:"20px 10px 0 0",borderRadius:"50%",height:"6%",width:"6%",display:"flex",justifyContent:"center",fontSize:"17px",fontWeight:"600",color:"#b2905f"}}>3</Typography>
                                <Typography lineHeight={2} fontSize={18} color={"#808080"} marginBottom={2}>There are numerous tiers of credit cards, depending on the card brand/network</Typography>
                                </Box>
                                <Box display={{display:"flex"}}>
                                <Typography sx={{backgroundColor:"white",border:"1px solid gray",margin:"20px 10px 0 0",borderRadius:"50%",height:"6%",width:"6%",display:"flex",justifyContent:"center",fontSize:"17px",fontWeight:"600",color:"#b2905f"}}>4</Typography>
                                <Typography lineHeight={2} fontSize={18} color={"#808080"}>This article introduces what payment method is applied to pay invoices in</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <Box paddingTop={7} paddingBottom={5}>
                    <Grid container xs={12}>
                        <Grid item xs={12} md={6}>
                            <Box textAlign={"center"} padding={2}>
                                <Typography variant='h3' fontWeight={600}>Different kinds of</Typography>
                                <Typography variant='h3' fontFamily={"'Marcellus', sans-serif"}>payment gateways</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} padding={2}>
                            <Typography lineHeight={2} fontSize={17} color={"#808080"} marginBottom={3}>These terms will be governed by and interpreted in accordance with the laws of the state of country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in country for the resolution of any disputes.</Typography>
                            <Link color={"#b2905f"} fontSize={18}>PAYMENT METHOD</Link>
                        </Grid>

                    </Grid>
                </Box>
            </Box>

        </Box>
    )
}

export default Paymentpolicy