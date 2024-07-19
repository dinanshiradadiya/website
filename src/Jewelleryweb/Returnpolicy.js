import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import policy from '../Assets/policy/policy.webp'


function Returnpolicy() {
    return (
        <Box>
            <Box py={10} marginBottom={5} sx={{ justifyContent: "center", display: "flex", alignItems: "center", backgroundImage: `url(${policy})` }}>
                <Container maxWidth="lg">
                    <Box width={"100%"} textAlign={"center"} sx={{ display: { lg: "flex", md: "block", xs: "block" }, justifyContent: { lg: "space-between", md: "center", xs: "center" } }}>
                        <Typography variant="h1" component="h2" fontSize={"37px"} fontWeight={"600"} color={"white"}>
                            Return Policy
                        </Typography>
                        <Typography variant="h1" component="h2" fontSize={"20px"} color={"white"}>
                            Home | Return Policy
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box padding={5}>
                <Box display={'flex'} padding={2}>
                    <Typography fontSize={40} fontFamily={"'Manrope', sans-serif"} marginRight={2} fontWeight={600}>Free & </Typography>
                    <Typography fontSize={40} fontFamily={"'Marcellus', sans-serif"}>easy return</Typography>
                </Box>
      
            <Box padding={3}>
                <Grid container spacing={2} xs={12}>
                    <Grid item xs={12} md={6}>
                        <Box marginBottom={3}>
                            <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                            <Typography sx={{borderBottom:"1px solid lightgrey"}} marginTop={2}></Typography>
                        </Box>
                        <Box marginBottom={3}>
                            <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                            <Typography sx={{borderBottom:"1px solid lightgrey"}} marginTop={2}></Typography>
                        </Box>
                        <Box marginBottom={3}>
                            <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box marginBottom={3}>
                            <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                            <Typography sx={{borderBottom:"1px solid lightgrey"}} marginTop={2}></Typography>
                        </Box>
                        <Box marginBottom={3}>
                            <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                            <Typography sx={{borderBottom:"1px solid lightgrey"}} marginTop={2}></Typography>
                        </Box>
                        <Box marginBottom={3}>
                            <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                           
                        </Box>

                    </Grid>

                </Grid>
             </Box>
            
             <Box padding={4}>
                <Grid container spacing={2} xs={12}>
                  <Grid item xs={12} md={6}>
                    <Box marginBottom={3}>
                        <Typography fontSize={40} fontWeight={600}>What is a return policy</Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                        <Typography sx={{borderBottom:"1px solid lightgrey"}} marginTop={2}></Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                        <Typography sx={{borderBottom:"1px solid lightgrey"}} marginTop={2}></Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                     <Box marginBottom={3}>
                        <Typography fontSize={40} fontWeight={600}>Secure with your payment</Typography>
                     </Box>
                     <Box marginBottom={3}>
                        <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                        <Typography sx={{borderBottom:"1px solid lightgrey"}} marginTop={2}></Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                        <Typography sx={{borderBottom:"1px solid lightgrey"}} marginTop={2}></Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography lineHeight={2} color={"#808080"}>As sample store uses some of the latest graphics designs which may not be supported in lower version of browsers designs which may not be supported in lower version of browsers</Typography>
                    </Box>

                  </Grid>

                </Grid>
             </Box>
            </Box>
        </Box>

    )
}

export default Returnpolicy