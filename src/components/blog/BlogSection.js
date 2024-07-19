import React from 'react'
import { Container, Grid, Box, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Img1 from '../../assets/images/blog/blog-02.webp'
import Img2 from '../../assets/images/blog/blog-03.webp'
import Img3 from '../../assets/images/blog/blog-04.webp'
import Img4 from '../../assets/images/blog/blog-05.webp'
import Img5 from '../../assets/images/blog/blog-06.webp'
import Img6 from '../../assets/images/blog/blog-07.webp'
import Img7 from '../../assets/images/blog/blog-08.webp'
import Img8 from '../../assets/images/blog/blog-09.webp'
import Smlimg1 from "../../assets/images/blog/blog-10.webp"
import Smlimg2 from "../../assets/images/blog/blogImg_11.jpg"
import Smlimg3 from "../../assets/images/blog/blogImg_12.jpg"
import Smlimg4 from "../../assets/images/blog/blogImg_13.jpg"
import Smlimg5 from "../../assets/images/blog/blogImg_14.jpg"



function BlogSection() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    right: '0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const ItemData = [
    {
      Images: Img1,
      Name: "What is necklace ?",
      Contain: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea",
    },
    {
      Images: Img2,
      Name: "Why do it we use?",
      Contain: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea",
    },
    {
      Images: Img3,
      Name: "Which of undertakes us ever?",
      Contain: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea",
    },
    {
      Images: Img4,
      Name: "Where does from it come?",
      Contain: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea",
    },
    {
      Images: Img5,
      Name: "Where can some I get?",
      Contain: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea",
    },
    {
      Images: Img6,
      Name: "What is the Lorem Ipsum?",
      Contain: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea",
    },
    {
      Images: Img7,
      Name: "Nisi ut aliquid ex ea commodi?",
      Contain: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea",
    },
    {
      Images: Img8,
      Name: "If you are go to use?",
      Contain: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli Aenean commodo ligula eget dolor Aenea",
    },
  ]

  const Recentpost = [
    {
      imgs: Smlimg1,
      Qui: "What is Nacklace ?",
      date: "Sep 02 , 2022"
    },

    {
      imgs: Smlimg2,
      Qui: "Why do it we use?",
      date: "Sep 08, 2022"
    },

    {
      imgs: Smlimg3,
      Qui: "Which of undertakes us ever?",
      date: "Sep 06, 2022"
    },

    {
      imgs: Smlimg4,
      Qui: "Where does from it come?",
      date: "Sep 06, 2022"
    },
    {
      imgs: Smlimg5,
      Qui: "Where can some I get?",
      date: "Sep 06, 2022"
    },
  ]
  return (
    <div style={{ backgroundColor: "#F8F6F1" }}>
      <Box py={10} marginBottom={5} sx={{ display: "flex", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", background: `url("https://qx-aolie.myshopify.com/cdn/shop/files/breadcrumb.jpg?v=1696586356")` }}>
        <Container maxWidth="lg">
          <Box width={"100%"} textAlign={"center"} sx={{ display: { lg: "flex", md: "block", xs: "block" }, justifyContent: { lg: "space-between", md: "center", xs: "center" } }}>
            <Typography variant="h1" component="h2" fontSize={"37px"} fontWeight={"600"} color={"white"}>
              News
            </Typography>
            <Typography variant="h1" component="h2" fontSize={"20px"} color={"white"}>
              Home | News
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box>
      </Box>
      <Container maxWidth sx={{ backgroundColor: "#F8F6F1", padding: "5px" }}>
        <Grid container item xs={12}  sx={{ justifyContent: "space-between", backgroundColor: "#F8F6F1"}}>
          <Grid item xs={12} lg={3} md={6} sx={{ backgroundColor: "#F8F6F1", padding: " 0 15px",  marginTop:"40px", marginBottom: "30px" }}>
            <Box sx={{ borderBottom: "1px" }} id='SerchBar'>
              <Typography variant='h6' sx={{ fontWeight: "600", color: "#333333", marginBottom: "10px" }}>Search</Typography>
              <Search sx={{ backgroundColor: "#fff" }} id='Serch'>
                <SearchIconWrapper style={{ right: "30px" }}>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  sx={{ borderBottom: "1px 0" }}
                  style={{ paddingleft: "10px 0 0 20px" }}
                />
              </Search>
            </Box>
            <Box id='RecentPost' marginBottom={2}>
              <Typography variant='h6' sx={{ fontWeight: "600", color: "#333333", }}>Recent Post</Typography>
              {
                Recentpost.map((item) => (
                  <Box display={'flex'} style={{ borderBottom: "solid 1px rgba(104, 103, 103, 0.24)", padding: "15px 0" }}>
                    <Box>
                      <img src={item.imgs} alt="" />
                    </Box>
                    <Box paddingLeft={2}>
                      <Typography  sx={{
                        fontWeight: "600", fontSize:"18px" , color: "#333333", marginBottom: "6px",
                        transition: ".5s", "&:hover": {
                          color: "#B2905F"
                        }
                      }} >{item.Qui}</Typography>
                      <Typography  fontFamily={"Manrope, sans-serif"} sx={{ color: "#B2905F", fontWeight: "600", fontSize: "16px" }} >{item.date}</Typography>
                    </Box>
                  </Box>
                ))
              }
            </Box>
            <Box id="Tags">
              <Typography variant='h6' sx={{ fontWeight: "600", color: "#333333", marginBottom: "10px" , marginTop:"40px" }}>Tags</Typography>
              <Box display={'flex'} flexWrap={'wrap'} >
                <Typography backgroundColor={'#333333'} color={'white'} sx={{ padding: "5px 15px ", margin: "5px 0 0 5px", transition:".5s" ,"&:hover":{backgroundColor:"#fff" , color:"#000"}}} whiteSpace={'nowrap'}>Blog</Typography>
                <Typography backgroundColor={'#333333'} color={'white'} sx={{ padding: "5px 15px ", margin: "5px 0 0 5px", transition:".5s" ,"&:hover":{backgroundColor:"#fff" , color:"#000"} }} whiteSpace={'nowrap'}>Fashtion</Typography>
                <Typography backgroundColor={'#333333'} color={'white'} sx={{ padding: "5px 15px ", margin: "5px 0 0 5px" , transition:".5s" ,"&:hover":{backgroundColor:"#fff" , color:"#000"}}} whiteSpace={'nowrap'}>Mobils</Typography>
                <Typography backgroundColor={'#333333'} color={'white'} sx={{ padding: "5px 15px ", margin: "5px 0 0 5px", transition:".5s" ,"&:hover":{backgroundColor:"#fff" , color:"#000"} }} whiteSpace={'nowrap'}>News</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9} md={6} container  width={"100%"} spacing={2} sx={{ marginTop: { md: "20px" } }}>
            {
              ItemData.map((item) => (
                <Grid item sm={6} xs={12} lg={4} md={6} xxl={12}  sx={{ marginBottom: "20px"  }}>
                  <Box style={{ position: "relative" }}>
                    <img
                      src={item.Images}
                      alt=""
                      style={{ width: '100%', height: 'auto', marginBottom: 2 }}
                    />
                    <Typography fontFamily={"Manrope, sans-serif"} sx={{ backgroundColor: "#fff", position: "absolute", bottom: "-9px", left: "24px", textAlign: "center", color: "#B2905F", fontWeight: "600", fontSize: "16px", padding: "10px 20px" }}>02 SEP 22</Typography>
                  </Box>
                  <Box style={{ Margin: "10px", marginTop: "20px" }}>
                    <Typography variant='h6' fontFamily={"Manrope, sans-serif"} sx={{
                      color:"#333333f7",
                      transition: ".5s", "&:hover": {
                        color: "#B2905F"
                      }
                    }} ariant="h6" fontWeight={600} gutterBottom>
                      {item.Name}
                    </Typography>
                    <Typography fontFamily={"Manrope, sans-serif"} fontSize={"18px"} padding={'0 6px 0 0 '} fontWeight={500} color={'#3333338f'} lineHeight={2} gutterBottom>
                      {item.Contain}
                    </Typography>
                  </Box>
                  <Button  sx={{
                    backgroundColor: "#B2905F",  color: "#fff",border:"1px solid #B2905F" , transition:".5s","&:hover":{
                      backgroundColor:"#fff",
                      color:"#B2905F !important"
                    }
                  }}>
                    READ MORE
                  </Button>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default BlogSection