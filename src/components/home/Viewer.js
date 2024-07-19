import React, { useRef } from 'react';
import { Box, Container, Stack, Typography, } from '@mui/material';
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImg1 from "../../assets/images/home/slider/sliderImg_1.png";
import sliderImg2 from "../../assets/images/home/slider/sliderImg_2.png";
import sliderImg3 from "../../assets/images/home/slider/sliderImg_3.png";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Viewer() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div>
          <Container maxWidth>
          <Box textAlign={"center"} display={'flex'} justifyContent={'center'} marginTop={10} paddingTop={"100px"} gap={2}>
                <Typography sx={{ fontSize: 40, fontWeight: 600 }}>Happy client</Typography>
                <Typography sx={{ fontSize: 40, fontFamily: "'Marcellus', sans-serif" }}>quotes</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'center'} gap={3} marginTop={5}>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                </Stack>
                <Typography>/ 04 Comment</Typography>
            </Box>
            <Box textAlign={'center'} marginTop={5}>
                <Typography color={"#808080"} lineHeight={2}>
                    There are many variations of passages of lorem Ipsum available, but the majority have an
                    <br />suffered alteration in some form, by injected humour, or randomised words which don't a look
                    <br />even slightly believable.
                </Typography>
            </Box>
            <Box textAlign={'center'} marginTop={5}>
                <img src='https://qx-aolie.myshopify.com/cdn/shop/files/quotes-icon.png?v=1696573837&width=832' alt='' width={50} height={50} />
            </Box>
            <Box>
                <Stack>
                    <Container maxWidth={"sm"}>
                        <Box sx={{marginTop:"30px"}}>
                            <Slider ref={sliderRef} {...settings}>
                                <Box sx={{ display: "flex", justifyContent: "center " }}>
                                    <img src={sliderImg1} alt="" style={{ width: "60%" }} />
                                    <Typography variant='h6' color={"#b2905f"} fontFamily={'Holligate Signature Demo'}>Lisa Resnick</Typography>
                                    <Typography fontWeight={600}>Store customer</Typography>
                                </Box>
                                <Box>
                                    <img src={sliderImg2} alt="" style={{ width: "60%" }} />
                                    <Typography variant='h6' color={"#b2905f"} fontFamily={'Holligate Signature Demo'}>Jack Aranda</Typography>
                                    <Typography fontWeight={600}>Store owner</Typography>
                                </Box>
                                <Box>
                                    <img src={sliderImg3} alt="" style={{ width: "60%" }} />
                                    <Typography variant='h6' color={"#b2905f"} fontFamily={'Holligate Signature Demo'}>Jillian Wyatt</Typography>
                                    <Typography fontWeight={600}>Store owner</Typography>
                                </Box>
                            </Slider>
                            <Box sx={{display:"flex",justifyContent:"space-between",color:"#B2905F"}} marginTop={2}>
                                <Box variant="contained" onClick={previous}><KeyboardBackspaceIcon></KeyboardBackspaceIcon></Box>
                                <Box variant="contained" onClick={next}><EastIcon></EastIcon></Box>
                            </Box>
                        </Box>
                    </Container>
                </Stack>
            </Box>
          </Container>
        </div>
    );
}

export default Viewer;