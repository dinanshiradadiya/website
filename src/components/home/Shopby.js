import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Stack, Typography } from '@mui/material';
import sbcimg1 from '../../assets/images/home/Shopby/sbcimg1.webp'
import sbcimg2 from '../../assets/images/home/Shopby/sbcimg2.webp'
import sbcimg3 from '../../assets/images/home/Shopby/sbcimg3.webp'
import sbcimg4 from '../../assets/images/home/Shopby/sbcimg4.webp'
import sbcimg5 from '../../assets/images/home/Shopby/sbcimg5.webp'
import sbcimg6 from '../../assets/images/home/Shopby/sbcimg6.webp'
import diamond from '../../assets/images/home/diamond.webp'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useRef } from 'react';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function Shopby() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
    <div style={{ backgroundColor: "#f8f6f1", padding: "100px 0" }}>

      <Container maxWidth>
        <Box display={'flex'} justifyContent={'center'} marginBottom={6} gap={3}>
          <Typography fontSize={'40px'} fontFamily={"''Manrope',sans-serif'"} fontWeight={700}>
            Shop by
          </Typography>
          <Typography fontFamily={"'Marcellus', sans-serif"} fontWeight={400} fontSize={'40px'} textAlign={'center'}>
            category
          </Typography>
        </Box>
        <Box>
          <Slider ref={sliderRef} {...settings} >
            <Box sx={{ display: "flex", justifyContent: "center " }}>
              <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                <img src={sbcimg1} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                <Typography fontWeight={500}>Radiant cut</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center " }}>
              <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                <img src={sbcimg2} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                <Typography color={'#b2905f'} fontWeight={500}>7 ITEM</Typography>
                <Typography fontWeight={500}>Nose Ring</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center " }}>
              <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                <img src={sbcimg3} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                <Typography fontWeight={500}>Owl Shape</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center " }}>
              <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                <img src={sbcimg1} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                <Typography fontWeight={500}>Radiant cut</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center " }}>
              <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                <img src={sbcimg4} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                <Typography color={'#b2905f'} fontWeight={500}>6 ITEM</Typography>
                <Typography fontWeight={500}>Crushed ice</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center " }}>
              <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                <img src={sbcimg5} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                <Typography fontWeight={500}>Bevel corner</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center " }}>
              <Typography sx={{ backgroundColor: 'white', padding: '40px' }}>
                <img src={sbcimg6} alt='' style={{ width: "100%", marginBottom: '50px' }} />
                <Typography color={'#b2905f'} fontWeight={500}>8 ITEM</Typography>
                <Typography fontWeight={500}>Gold necklace</Typography>
              </Typography>
            </Box>
          </Slider>
        </Box>
      </Container>
      <Box>
        <img src={diamond} alt='' />
      </Box>
    </div>
  )
}

export default Shopby

