// import React from 'react'
import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography,Box } from '@mui/material';


function CollectionSection() {
    return (
        <div>
            <Box py={10} marginBottom={5} sx={{ justifyContent: "center", display: "flex", alignItems: "center",background:`url("https://qx-aolie.myshopify.com/cdn/shop/files/breadcrumb.jpg?v=1696586356")`}}>
                    <Container maxWidth="lg">
                        <Box width={"100%"} textAlign={"center"} sx={{display:{lg:"flex",md:"block",xs:"block"},justifyContent:{lg:"space-between",md:"center",xs:"center"}}}>
                            <Typography variant="h1" component="h2" fontSize={"37px"} fontWeight={"600"} color={"white"}>
                                Collections
                            </Typography>
                            <Typography variant="h1" component="h2" fontSize={"20px"} color={"white"}>
                                Home | Collections
                            </Typography>
                        </Box>
                    </Container>
                    

                </Box>
                   

                {/* <div className='mainImage' style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>
                    <Container maxWidth="lg">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="h1" component="h2" fontSize={"37px"} fontWeight={"600"} color={"white"}>
                                Collections
                            </Typography>
                            <Typography variant="h1" component="h2" fontSize={"20px"} color={"white"}>
                                Home | Collection
                            </Typography>
                        </div>
                    </Container>

                </div> */}
        </div>
    )
}

export default CollectionSection;