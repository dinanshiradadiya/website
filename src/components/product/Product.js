import React from "react";
import Box from "@mui/material/Box";
import {Checkbox,Grid,ListItem,ListItemButton,ListItemText,Slider,Typography,} from "@mui/material";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { FixedSizeList } from "react-window";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import jewellerypro1 from '../assets/image/product/Jewellery-pro-1.webp'
import jewellery1 from '../../assets/images/product/jewellery-1.webp'
import jewellery2 from '../../assets/images/product/jewellery-2.webp'
import jewellery3 from '../../assets/images/product/jewellery-3.webp'
import jewellery4 from '../../assets/images/product/jewellery-4.webp'
import jewellery5 from '../../assets/images/product/jewellery-5.webp'
import jewellery6 from '../../assets/images/product/jewellery-6.webp'
import jewellery7 from '../../assets/images/product/jewellery-7.webp'
import jewellery8 from '../../assets/images/product/jewellery-8.webp'
import jewellery9 from '../../assets/images/product/jewellery-9.webp'
import jewellery10 from '../../assets/images/product/jewellery-10.webp'
import jewellery11 from '../../assets/images/product/jewellery-11.webp'
import jewellery12 from '../../assets/images/product/jewellery-12.webp'

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

function renderRow() {
  return itemList.map((data) => (
    <ListItem component="div" disablePadding>
      <ListItemButton sx={{ justifyContent: "space-between" }}>
        <Checkbox color="default" />
        <ListItemText primary={data.list} sx={{fontFamily: "Manrope,sans-serif"}}/>
        <ListItemText justifyContent="end" width="100%" primary={data.number} />
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
                fontFamily: "Manrope,sans-serif"
              }}
            >
              <FixedSizeList
                height={400}
                width={450}
                itemSize={46}
                itemCount={1}
                overscanCount={5}
                fontFamily="Manrope,sans-serif"
              >
                {renderRow}
              </FixedSizeList>
            </Box>

            <Typography
              variant="h5"
              paddingTop={5}
              paddingBottom={2}
              borderTop={"1px solid black"}
              fontWeight={700}
              fontFamily="Manrope,sans-serif"
            >
              Filter
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              borderBottom={"1px solid black"}
              paddingBottom={4}
            >
              <Typography variant="h7">12 products</Typography>
              <CircularProgress color="inherit" size={25} />
            </Box>

            <Box borderBottom={"1px solid black"} paddingBottom={4}>
              <Typography variant="h5" paddingTop={5} fontWeight={700}>
                Availability
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                paddingTop={2}
              >
                <Typography>0 selected</Typography>
                <Typography borderBottom={"1px solid black"}>Reset</Typography>
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
                <Typography borderBottom={"1px solid black"}>Reset</Typography>
              </Box>
              <Box sx={{ width: 300 }} marginTop={2}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  getAriaValueText={valuetext}
                  color="#B2905F"
                />
              </Box>
              <Box
                marginTop={3}
                alignItems={"center"}
                borderBottom={"1px solid black"}
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
                    sx={{ border: "2px solid white", backgroundColor: "white" }}
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

            <Box borderBottom={"1px solid black"} paddingBottom={4}>
              <Typography variant="h5" paddingTop={5} fontWeight={700}>
                Brand
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                paddingTop={2}
              >
                <Typography>0 selected</Typography>
                <Typography borderBottom={"1px solid black"}>Reset</Typography>
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

            <Box borderBottom={"1px solid black"} paddingBottom={4}>
              <Typography variant="h5" paddingTop={5} fontWeight={700}>
                Size
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                paddingTop={2}
              >
                <Typography>0 selected</Typography>
                <Typography borderBottom={"1px solid black"}>Reset</Typography>
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
                <Typography>
                  <Checkbox color="default" />
                  Silver
                </Typography>
                <Typography>(1)</Typography>
              </Box>
            </Box>

            <Box paddingBottom={3}>
              <Typography variant="h5" paddingTop={5} fontWeight={700}>
                Color
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                paddingTop={2}
              >
                <Typography>0 selected</Typography>
                <Typography borderBottom={"1px solid black"}>Reset</Typography>
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
              </Box>
            </Box>
            <Box paddingBottom={4}>
              <img
                src="https://qx-aolie.myshopify.com/cdn/shop/files/collection-02.jpg?v=1696588694&width=352"
                alt="" width={"100%"}
              />
            </Box>
          </Grid>



          <Grid item lg={9} sx={{justifyContent:{md:"center",xs:"center"}}}>

            <Box borderBottom={"1px solid black"}>
              <Typography fontWeight={700} variant="h5" paddingBottom={4}>
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
                 <Typography sx={{ color: "#B2905F" }}>Sort by:</Typography>
                 <Typography>Alphabetically, A-Z </Typography>
                 <KeyboardArrowDownIcon />
                </Box>
              </Box>
            </Box>

            <Grid item xs={12} container spacing={3} sx={{paddingTop:"30px"}}>
                   <Grid item xs={12} md={6} lg={4} >
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery1} alt="" width={"100%"}/>
                       <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Aadhila nose pin</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$31.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$39.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery2} alt="" width={"100%"}/>
                       <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Borisa nose pin</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$31.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$39.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery3} alt="" width={"100%"}/>
                        <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Couple band ring</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$44.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$49.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4} >
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery4} alt="" width={"100%"}/>
                       <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Diamond necklace</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$61.00 </Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery5} alt="" width={"100%"}/>
                       <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Earrings 22Kt yellow</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$49.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$79.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery6} alt="" width={"100%"}/>
                        <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Eimear necklace</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$25.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$45.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
          </Grid>

           <Grid item xs={12} container spacing={3} sx={{paddingTop:"30px"}}>
                   <Grid item xs={12} md={6} lg={4} >
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery7} alt="" width={"100%"}/>
                       <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Mamba ring</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$11.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$19.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery8} alt="" width={"100%"}/>
                       <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Muricelle bangle</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$21.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$25.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery9} alt="" width={"100%"}/>
                        <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Simplistic earrings</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$31.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$39.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4} >
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery10} alt="" width={"100%"}/>
                       <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Stud earrings</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$61.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$69.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery11} alt="" width={"100%"}/>
                       <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Toggle bangle</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$24.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$29.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
                   <Grid item xs={12} md={6} lg={4}>
                   <Box sx={{backgroundColor:"white"}}>
                       <img src={jewellery12} alt="" width={"100%"}/>
                        <Typography   sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",
                            textAlign: "center",
                            fontWeight: 700,
                            paddingTop:1
                            }}>Yellow ring 18 kt</Typography>
                      <Box display={"flex"} justifyContent={"center"} paddingBottom={2} >
                        <Typography
                          sx={{fontFamily: "Manrope,sans-serif",
                          backgroundColor: "white",textAlign: "center",
                          fontWeight: 700,paddingTop:1,color: "#B2905F",
                          }}>$52.00 </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Manrope,sans-serif",
                            backgroundColor: "white",textAlign: "center",
                            fontWeight: 700,paddingTop:1
                            }}> ~ <s>$79.00</s></Typography>
                      </Box>
                   </Box>
                   </Grid>
          </Grid>

          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Product;

