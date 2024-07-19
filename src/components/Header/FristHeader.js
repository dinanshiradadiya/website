import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function FristHeader() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div style={{ backgroundColor: "#B2905F" }}>
            <div>
                <Container maxWidth>
                    <Box >
                        <Grid container xs={12} style={{ display: "flex", textAlign:"center", alignItems: "center", justifyContent: "space-between", padding: "10px 25px" }}>
                            <Grid  xs={12} lg={3} md={12} > <Typography color={"#fff"} variant="body1" xs={{ colors: "#fff", display: "flex", justifyContent: "center" }} fontFamily={"Manrope, sans-serif"} fontWeight={'600px'}>Get 20% off your first order : 20%OFF </Typography></Grid>
                            <Grid  xs={12}  lg={3} md={12} style={{ width: "25%", textAlign: "center" }}> <Slider {...settings} >
                                <Box>
                                    <Typography color={"#fff"}>Three-day sale! get the fall rolling</Typography>
                                </Box>
                                <Box>
                                    <Typography color={"#fff"}>Fall savings sale today only</Typography>
                                </Box>
                                <Box>
                                    <Typography color={"#fff"}>Its time to save more</Typography>
                                </Box>
                            </Slider></Grid>
                            <Grid  xs={12}  lg={3} md={12} sx={{ display: "flex", colors: "#fff", alignItems: "center", justifyContent: "center", marginRight: "30px" }}>
                                <Typography display={"flex"} color={"#fff"}>
                                    AUD $
                                    <KeyboardArrowDownIcon />
                                </Typography>
                                <Typography color={"#fff"}>Order Online: +62 0123 456 789</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </div>
    )
}

export default FristHeader