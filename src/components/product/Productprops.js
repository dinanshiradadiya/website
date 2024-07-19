import { Box, Button, ButtonGroup, Container, Grid, Typography} from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DoneIcon from '@mui/icons-material/Done';
import jewellery1 from '../assets/image/product/jewellery-1.webp'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Productbtn';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import jewelleryprops from '../assets/image/product/jewellery-1.webp'
import jewelleryprops1 from '../assets/image/productprops/jewellery-pro-08-a.avif'
import jewelleryprops2 from '../assets/image/productprops/jewellery-pro-08-b.avif'
import jewelleryprops3 from '../assets/image/productprops/jewellery-pro-08-c.avif'
import jewelleryprops4 from '../assets/image/productprops/jewellery-pro-08-d.avif'

function Productprops() {

  const {number} = useSelector((state) => state.number)
  const dispatch = useDispatch()


  return (
    <Box sx={{backgroundColor:"#F8F6F1"}}>
        <Container maxWidth="lg">
        <Box alignItems={"center"} display={"flex"} textAlign={"center"} paddingBottom={2}>
        <Typography sx={{color:"#B2905F"}}>Home </Typography>
        <KeyboardArrowRightIcon sx={{color:"black"}}/>
        <Typography> Aadhila nose pin</Typography>
        </Box>
        
            <Grid item container xs={12} spacing={5} >
                   <Grid item xs={12} sm={10} md={8} lg={6}>
                        <Box sx={{border:"1px solid #ECEAE5",backgroundColor:"white"}}>
                           <img src={jewelleryprops}  alt="" width={"100%"}/>
                        </Box>
                        <Grid paddingTop={3} spacing={3} item xs={12} container>
                               <Grid item xs={3}>
                                   <Box sx={{border:"1px solid #ECEAE5",backgroundColor:"white"}}>
                                   <img src={jewelleryprops1}  alt="" width={"100%"}/>
                                   </Box>
                               </Grid>
                               <Grid item xs={3}>
                                   <img src={jewelleryprops2} alt="" width={"100%"}/>
                               </Grid>
                               <Grid item xs={3}>
                                   <img src={jewelleryprops3} alt="" width={"100%"}/>
                               </Grid>
                               <Grid item xs={3}>
                                    <img src={jewelleryprops4} alt="" width={"100%"}/>
                               </Grid>
                        </Grid>

                   </Grid>

                   <Grid item xs={12} sm={10} md={8} lg={6}>
                     <Typography variant='h4' fontWeight={700}>Aadhila nose pin</Typography>
                       <Box sx={{borderBottom:"1px solid #ECEAE5"}} py={4} display={"flex"} justifyContent={"space-between"}>
                           <Box  gap={1}  display={"flex"}>
                                <Box display={"flex"}>
                                  <Typography
                                    sx={{fontFamily: "Manrope,sans-serif",
                                    fontWeight: 700,color: "#B2905F",
                                    }}>$31.00 </Typography>
                                  <Typography
                                    sx={{
                                      fontFamily: "Manrope,sans-serif",
                                      fontWeight: 700,color:"#808080"
                                      }}> ~ <s>$39.00</s></Typography>
                                </Box>
                                 <Typography
                                   sx={{
                                     fontFamily: "Manrope,sans-serif",
                                      color:"black",fontWeight: 700
                                     }} px={1}>-21%</Typography>
                            </Box>
                            <Box>
                                 <Typography fontWeight={700} display={"flex"}>Brand: 
                                   <Typography>Aolie</Typography>
                                 </Typography>
                               <Box display={"flex"}>
                                 <Typography fontWeight={700}>Availability:</Typography>
                                 <Typography sx={{color:"green"}}>In stock </Typography>
                                 <DoneIcon sx={{color:"green"}}/>    
                               </Box>
                           </Box>
                       </Box>
                       
                       <Box paddingBottom={4}>
                          <Typography py={3} sx={{borderBottom:"1px solid #ECEAE5"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa</Typography>
                       </Box>


                       <Box>
                          <Typography variant='h5' fontWeight={700}>Color</Typography>
                          <Box display={"flex"} gap={2} paddingTop={2} marginBottom={3}>
                              <img src={jewellery1} alt="" style={{border:"1px solid #B2905F"}} width={"10%"} height={"10%"}/>
                              <img src={jewellery1} alt="" width={"10%"} height={"10%"}/>
                              <img src={jewellery1} alt="" width={"10%"} height={"10%"}/>
                          </Box>

                            <Box sx={{borderBottom:"1px solid #ECEAE5"}} paddingBottom={4}>
                                <Grid item xs={12} container spacing={5}>
                                  <Grid item xs={3} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                          <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{borderRadius:"0px"}}>
                                            <Button sx={{width:"100%",border:"1px solid #E0E0E0",backgroundColor:"white",padding:"10px",borderRadius:"0px",color:"black"}} disabled={number <= 1} onClick={() => dispatch(decrement())}>-</Button>
                                            <Button disabled sx={{width:"100%",border:"1px solid black",backgroundColor:"white",padding:"10px",borderRadius:"0px"}}><Typography>{number}</Typography></Button>
                                            <Button sx={{width:"100%",border:"1px solid #E0E0E0",backgroundColor:"white",padding:"10px",borderRadius:"0px",color:"black"}} disabled={number >= 10} onClick={() => dispatch(increment())}>+</Button>
                                          </ButtonGroup>
                                  </Grid>
                                  <Grid item xs={9}>
                                    <Button sx={{backgroundColor:"#B2905F",color:"black",width:"100%",padding:"10px",borderRadius:"0px","&:hover":{
                                    backgroundColor:"black",color:"white"}}}>ADD TO CART</Button>
                                  </Grid>
                                </Grid>
                                  <Button sx={{backgroundColor:"black",color:"white",marginTop:"20px",width:"100%",padding:"10px",borderRadius:"0px","&:hover":{
                                    backgroundColor:"#B2905F"
                                  }}}>BUY NOW</Button>
                            </Box>
                       </Box>
                       <Box display={"flex"} justifyContent={"space-between"} py={3}>
                          <Box display={"flex"} alignItems={"center"} gap={1}>
                              <Typography variant='h6' fontWeight={700}>SKU:</Typography>
                              <Typography variant='h7'> abccd-19</Typography>
                          </Box>
                          <Box display={"flex"} alignItems={"center"} gap={2}>
                              <Typography variant='h6' fontWeight={700}>Share:</Typography>
                              <FacebookSharpIcon sx={{color:"blue"}}/>
                              <TwitterIcon sx={{color:"#55ACEE"}}/>
                              <PinterestIcon sx={{color:"red"}}/>
                          </Box>
                       </Box>

                       <Box gap={3} display={"flex"}>
                         <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="50" height="50" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"/></svg>
                         <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="50" height="50" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"/><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"/><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"/></svg>
                         <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="50" height="50" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"/></svg>
                         <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="50" height="50"><title id="pi-american_express">American Express</title><path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"/><path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"/><path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"/><path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"/><path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"/><path fill="#FFF" d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"/><path fill="#006FCF" d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"/><path fill="#006FCF" d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"/></svg>
                       </Box>

                          
                   </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Productprops
