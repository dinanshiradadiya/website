import { Box, CardContent, Container, Typography } from '@mui/material'
import React from 'react'
import poster1 from '../../assets/images/home/Poster/poster1.webp'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Poster() {
    return (
        <Container maxWidth>
            <Box sx={{ backgroundImage: `url(${poster1})`,backgroundRepeat:"no-repeat",backgroundSize:'cover'}}  width={"100%"} >
            <Box display={'flex'} justifyContent={'center'} gap={10}>
                <Box marginTop={10}>
                    <Typography fontSize={40} color={"white"} fontWeight={600}>Get 30% off</Typography>
                    <Typography fontSize={40} color={"white"} fontFamily={"'Marcellus', sans-serif"}>good offer !</Typography>
                </Box>
                <Box marginTop={15}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} backgroundColor={"black"} height={"20px"} padding={2}>
                        <Typography color={"white"}>USE CODE :</Typography>
                        <Typography color={"#b2905f"}>TR80TR</Typography>
                        <Typography color={"white"} marginLeft={5}><ContentCopyIcon/></Typography>
                    </Box>
                </Box>
                </Box>   
            </Box>
        </Container>
    )
}

export default Poster