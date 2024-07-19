import React from "react";
import Box from "@mui/material/Box";
import {Checkbox,Grid,ListItem,ListItemButton,ListItemText,Slider,Typography,} from "@mui/material";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { FixedSizeList } from "react-window";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import collection02 from '../../assets/image/product/collection-02.webp'
import jewellery1 from '../../assets/image/product/jewellery-1.webp'
import jewellery2 from '../../assets/image/product/jewellery-2.webp'
import jewellery3 from '../../assets/image/product/jewellery-3.webp'
import jewellery4 from '../../assets/image/product/jewellery-4.webp'
import jewellery5 from '../../assets/image/product/jewellery-5.webp'
import jewellery6 from '../../assets/image/product/jewellery-6.webp'
import jewellery7 from '../../assets/image/product/jewellery-7.webp'
import jewellery8 from '../../assets/image/product/jewellery-8.webp'
import jewellery9 from '../../assets/image/product/jewellery-9.webp'
import jewellery10 from '../../assets/image/product/jewellery-10.webp'
import jewellery11 from '../../assets/image/product/jewellery-11.webp'
import jewellery12 from '../../assets/image/product/jewellery-12.webp'
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const itemList = [
  {
    list: "Bestseller",
    number: "(7)",
  },
  {
    list: "Bevel corner",
    number: "(8)",
  },
  {
    list: "Crushed ice",
    number: "(6)",
  },
  {
    list: "Deal of the day",
    number: "(5)",
  },
  {
    list: "Feature product",
    number: "(9)",
  },
  {
    list: "Gold necklace",
    number: "(8)",
  },
  {
    list: "Hand harness",
    number: "(7)",
  },
  {
    list: "Nose ring",
    number: "(7)",
  },
  {
    list: "Odiyannam",
    number: "(8)",
  },
  {
    list: "Owl shape",
    number: "(8)",
  },
  {
    list: "Radiant cut",
    number: "(8)",
  },
  {
    list: "Round brilliant",
    number: "(8)",
  },
];

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

function renderRow() {
  return itemList.map((data) => (
    <ListItem component="div" disablePadding>
      <ListItemButton sx={{ display:"flex",transition:".1s",justifyContent: "space-between",fontFamily: "Manrope,sans-serif","&:hover":{color:"#B2905F"}}}>
        <Checkbox color="default" />
        <ListItemText primary={data.list} />
        <ListItemText primary={data.number}/>
      </ListItemButton>
    </ListItem>
  ));
}

function valuetext(value) {
  return `${value}°C`;
}

function Product() {
  const [value, setValue] = React.useState([100, 0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth sx={{ backgroundColor: "#F8F6F1" }}>
             <Box py={10} marginBottom={5} sx={{ justifyContent: "center", display: "flex", alignItems: "center",background:`url("https://qx-aolie.myshopify.com/cdn/shop/files/breadcrumb.jpg?v=1696586356")`}}>
                    <Container maxWidth="lg">
                        <Box width={"100%"} textAlign={"center"} sx={{display:{lg:"flex",md:"block",xs:"block"},justifyContent:{lg:"space-between",md:"center",xs:"center"}}}>
                            <Typography variant="h1" fontSize={"37px"} fontWeight={"600"} color={"white"} sx={{fontFamily: "Manrope,sans-serif"}}>
                                Products
                            </Typography>
                            <Typography variant="h6" color={"white"} sx={{fontFamily: "Manrope,sans-serif"}}>
                                Home | Products
                            </Typography>
                        </Box>
                    </Container>

                </Box>

      <Box>
        <Grid item container xs={12} spacing={3}>
          <Grid item lg={3} sx={{display:{lg:"block",md:"none",xs:"none"}}}>
            <Typography variant="h5" fontWeight={700} sx={{fontFamily: "Manrope,sans-serif"}}>
              Categories
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 400,
                maxWidth: 450,
                display: "flex",
                marginBottom: "35px",
                paddingBottom:"50px",
                fontFamily: "Manrope,sans-serif",
                borderBottom:"1px solid #ECEAE5"
              }}
            >
              <FixedSizeList
                height={400}
                width={450}
                itemSize={46}
                itemCount={1}
                overscanCount={5}
                fontFamily="Manrope,sans-serif"
                sx={{}}
              >
                {renderRow}
              </FixedSizeList>
            </Box>

            <Typography
              variant="h5"
              paddingBottom={2}
              fontWeight={700}
              fontFamily="Manrope,sans-serif"
            >
              Filter
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              sx={{borderBottom:"1px solid #ECEAE5"}}
              paddingBottom={4}
            >
              <Typography variant="h7">12 products</Typography>
              <CircularProgress color="inherit" size={25} />
            </Box>

            <Box sx={{borderBottom:"1px solid #ECEAE5"}} paddingBottom={4}>
              <Typography variant="h5" paddingTop={5} fontWeight={700}>
                Availability
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                paddingTop={2}
              >
                <Typography>0 selected</Typography>
                <Typography sx={{borderBottom:"1px solid black",color:"#92938F","&:hover":{color:"black"}}}>Reset</Typography>
              </Box>
              <Box
                paddingTop={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>
                  <Checkbox color="default" /> In stock
                </Typography>
                <Typography>(12)</Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>
                  <Checkbox color="default" />
                  Out of stock
                </Typography>
                <Typography>(2)</Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="h5" paddingTop={5} fontWeight={700}>
                Price
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                paddingTop={2}
              >
                <Typography>The highest price is $75.00</Typography>
                <Typography sx={{borderBottom:"1px solid black",color:"#92938F","&:hover":{color:"black"}}}>Reset</Typography>
              </Box>
              <Box sx={{ width: 300 }} marginTop={2}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  getAriaValueText={valuetext}
                   sx={{color:"#B2905F"}}
                />
              </Box>
              <Box
                marginTop={3}
                alignItems={"center"}
                sx={{borderBottom:"1px solid #ECEAE5"}}
                paddingBottom={4}
              >
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Typography display={"block"}>From</Typography>
                  <Typography display={"block"}>To</Typography>
                </Box>
                <Box gap={5} display={"flex"} alignItems={"center"}>
                  <Box
                    width={150}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ backgroundColor: "white" }}
                    justifyContent={"space-between"}
                  >
                    <Typography>$</Typography>
                    <Typography>0</Typography>
                  </Box>
                  <Typography>-</Typography>
                  <Box
                    width={150}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: "2px solid white", backgroundColor: "white" }}
                    justifyContent={"space-between"}
                  >
                    <Typography>$</Typography>
                    <Typography>75</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{borderBottom:"1px solid #ECEAE5"}} paddingBottom={4}>
              <Typography variant="h5" paddingTop={5} fontWeight={700}>
                Brand
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                paddingTop={2}
              >
                <Typography>0 selected</Typography>
                <Typography sx={{borderBottom:"1px solid black",color:"#92938F","&:hover":{color:"black"}}}>Reset</Typography>
              </Box>
              <Box
                paddingTop={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>
                  <Checkbox color="default" />
                  Aolie
                </Typography>
                <Typography>(12)</Typography>
              </Box>
            </Box>

            <Box sx={{borderBottom:"1px solid #ECEAE5"}} paddingBottom={4}>
              <Typography variant="h5" paddingTop={5} fontWeight={700}>
                Size
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                paddingTop={2}
              >
                <Typography>0 selected</Typography>
                <Typography sx={{borderBottom:"1px solid black",color:"#92938F","&:hover":{color:"black"}}}>Reset</Typography>
              </Box>
              <Box
                paddingTop={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>
                  <Checkbox color="default"/>
                  Selmon
                </Typography>
                <Typography>(1)</Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography>
                  <Checkbox color="default" />
                  Seashell
                </Typography>
                <Typography>(1)</Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography sx={{fontFamily: "Manrope,sans-serif"}}>
                  <Checkbox color="default" />
                  Silver
                </Typography>
                <Typography sx={{fontFamily: "Manrope,sans-serif"}}>(1)</Typography>
              </Box>
            </Box>

            <Box paddingBottom={3}>
              <Typography variant="h5" paddingTop={5} fontWeight={700} sx={{fontFamily: "Manrope,sans-serif"}}>
                Color
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                paddingTop={2}
              >
                <Typography sx={{fontFamily: "Manrope,sans-serif"}}>0 selected</Typography>
                <Typography sx={{borderBottom:"1px solid black",color:"#92938F","&:hover":{color:"black"}}}>Reset</Typography>
              </Box>
              <Box display={"flex"} gap={1} flexWrap={"wrap"} marginTop={3}>
                   <Typography width={26} height={26} backgroundColor="#008B8B" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#CD5C5C" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#E6E6FA" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#87CEFA" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#768798" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#FFDEAD" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#FDF5E6" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#FA8072" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#EEE3DD" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#C0C0C0" borderRadius={5}></Typography> 
                   <Typography width={26} height={26} backgroundColor="#4682B4" borderRadius={5}></Typography> 


                   {/* <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} />
                   <DoneIcon sx={{color:"#B2905F","&:hover":{display:"none"}}} /> */}
              </Box>
            </Box>
            <Box paddingBottom={4}>
              <img
                src={collection02}
                alt="" width={"100%"}
              />
            </Box>
          </Grid>



          <Grid item lg={9} sx={{justifyContent:{md:"center",xs:"center"}}}>

            <Box sx={{borderBottom:"1px solid #ECEAE5"}}>
              <Typography fontWeight={700} variant="h5" paddingBottom={4} sx={{fontFamily: "Manrope,sans-serif"}}>
                Products (12)
              </Typography>
              <img
                src="https://qx-aolie.myshopify.com/cdn/shop/files/collection-01.jpg?v=1696588483&width=1920"
                alt=""
                width={"100%"}
              />
              <Box my={4} alignItems={"center"} justifyContent={"space-between"} display={"flex"}>
                <Box alignItems={"center"} display={"flex"} gap={2}>
                  <GridViewIcon sx={{ color: "#B2905F" }} />
                  <ListIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Box alignItems={"center"} display={"flex"} gap={2}>
                 <Typography sx={{ color: "#B2905F",fontFamily: "Manrope,sans-serif"}}>Sort by:</Typography>
                 <Typography sx={{fontFamily: "Manrope,sans-serif"}}>Alphabetically, A-Z </Typography>
                 <KeyboardArrowDownIcon />
                </Box>
              </Box>
            </Box>


                <Grid item container xs={12} spacing={3} py={3}>
                     {productList.map((item, index) => (
                      <Grid item xs={12} md={6} lg={4} >
                      <Box key={index} >
                        <img
                          srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                          }}
                        />

                         <Box py={3} sx={{backgroundColor:"white"}}>
                         <Typography sx={{color: "#333333", fontFamily: "Manrope,sans-serif",textAlign:"center",fontWeight:"700","&:hover":{color:"#B2905F"}}}>{item.name}</Typography>
                         <Box display={"flex"} alignItems={"center"} gap={1} justifyContent={"center"}>
                         <Typography py={1} sx={{ fontFamily: "Manrope,sans-serif",textAlign:"center",fontWeight:"700",color:"#B2905F"}}>{item.price}</Typography>
                         <Typography sx={{ fontFamily: "Manrope,sans-serif",textAlign:"center",fontWeight:"700",color:"#808080"}}> ~ <s>{item.price2}</s></Typography>
                         </Box>
                            <Box sx={{display:"flex",justifyContent:"center"}}  >
                                 <Box sx={{backgroundColor:{xs:"#F8F6F1",sm:"#F8F6F1",md:"#F8F6F1",lg:"white"},display:"flex"}} py={2} gap={4} px={2}>
                                 <VisibilityIcon sx={{color:"#808080",display:{xs:"block",sm:"block",md:"block",lg:"none"}}}/> 
                                 <LocalMallIcon sx={{color:"#808080",display:{xs:"block",sm:"block",md:"block",lg:"none"}}}/>
                                 <FavoriteBorderIcon sx={{color:"#808080",display:{xs:"block",sm:"block",md:"block",lg:"none"}}}/>
                                 </Box>
                            </Box>
                         </Box>
                      </Box>
                      </Grid>
                    ))}
                </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Product;


const productList = [
  {
    id:"jewellery1",
    img:jewellery1,
    price:"$31.00",
    price2:"$39.00",
    name:"Aadhila nose pin"
  },
  {
    id:"jewellery2",
    img:jewellery2,
    price:"$31.00",
    price2:"$39.00",
    name:"Borisa nose pin"
  },
  {
    id:"jewellery3",
    img:jewellery3,
    price:"$44.00",
    price2:"$49.00",
    name:"Couple band ring"
  },
  {
    id:"jewellery4",
    img:jewellery4,
    price:"$61.00",
    name:"Diamond necklace"
  },
  {
    id:"jewellery5",
    img:jewellery5,
    price:"$49.00",
    price2:"$79.00",
    name:"Earrings 22Kt yellow"
  },
  {
    id:"jewellery6",
    img:jewellery6,
    price:"$25.00",
    price2:"$45.00",
    name:"Eimear necklace"
  },
  {
    id:"jewellery7",
    img:jewellery7,
    price:"$11.00",
    price2:"$19.00",
    name:"Mamba ring"
  },
  {
    id:"jewellery8",
    img:jewellery8,
    price:"$21.00",
    price2:"$25.00",
    name:"Muricelle bangle"
  },
  {
    id:"jewellery9",
    img:jewellery9,
    price:"$31.00",
    price2:"$39.00",
    name:"Simplistic earrings"
  },
  {
    id:"jewellery10",
    img:jewellery10,
    price:"$61.00",
    price2:"$69.00",
    name:"Stud earrings"
  },
  {
    id:"jewellery11",
    img:jewellery11,
    price:"$24.00",
    price2:"$29.00",
    name:"Toggle bangle"
  },
  {
    id:"jewellery12",
    img:jewellery12,
    price:"$52.00",
    price2:"$79.00",
    name:"Yellow ring 18 kt"
  }
]
