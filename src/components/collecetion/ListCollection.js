import React from 'react'
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from "../../assets/images/collection/jwellaryImg_1.jpg"
import img2 from "../../assets/images/collection/jewelleryImg_2.jpg"
import img3 from "../../assets/images/collection/jewelleryImg_3.jpg"
import img4 from "../../assets/images/collection/jewelleryImg_4.jpg"
import img5 from "../../assets/images/collection/jewelleryImg_5.jpg"
import img6 from "../../assets/images/collection/jewelleryImg_6.jpg"
import img7 from "../../assets/images/collection/jewelleryImg_7.jpg"
import img8 from "../../assets/images/collection/jewelleryImg_8.jpg"
import img9 from "../../assets/images/collection/jewelleryImg_9.jpg"
import img10 from "../../assets/images/collection/jewelleryImg_10.jpg"
import img11 from "../../assets/images/collection/jewelleryImg_11.jpg"
import img12 from "../../assets/images/collection/jewelleryImg_12.jpg"
import { Box, Typography, Grid } from '@mui/material';


const itemData = [
    {
        img: img1,
        title: 'Bestseller',
    },
    {
        img: img2,
        title: 'Bevel Corner',
    },
    {
        img: img3,
        title: 'Crushed ice',
    },
    {
        img: img4,
        title: 'Deal of the day',
    },
    {
        img: img5,
        title: 'Featured product',
    },
    {
        img: img6,
        title: 'Gold necklece',
    },
    {
        img: img7,
        title: 'Hand harness',
    },
    {
        img: img8,
        title: 'Nose ring',
    },
    {
        img: img9,
        title: 'Odiyannam',
    },
    {
        img: img10,
        title: 'Owl shape',
    },
    {
        img: img11,
        title: 'Radiant cut',
    },
    {
        img: img12,
        title: 'Round Brilliant',
    }
];

function ListCollection() {
    return (
        <div>
            <Container maxWidth>
                <Grid container item sx={12}>
                    {
                        itemData.map((item) => {
                            return(
                                <Grid item sx={12} lg={3} md={6} sm={6} xxl={12} >
                                <Box sx={{marginBottom:"60px",
                                        "&:hover":{
                                                "& .shoBtn":{
                                                    opacity:"1",
                                                    visibility:"visible",
                                                    transform:"translateY(-80%)", 
                                                    transition:".3s"
                                                }
                                        },justifyContent:{xs:"center",md:"center"}
                                        }}
                                        >
                                            <img src={item.img} alt="" style={{width:"75%",aspectRatio:"1/1"}}/>
                                            <Box width={"75%"} display={"block"}>
                                            <Typography className='proBtn' sx={{textAlign:"center", color:"#B2905F",fontWeight:"600"}}  marginTop={"25px"}>{item.title}</Typography>
                                            <Typography className='shoBtn' sx={{textAlign:"center",backgroundColor:"#B2905F",padding:"8px",color:"#fff",opacity:"0",visibility:"hidden",transform:"translateY(-0%)"}}>SHOP NOW</Typography>
                                            </Box>
                                        </Box>
                                        

                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default ListCollection;

