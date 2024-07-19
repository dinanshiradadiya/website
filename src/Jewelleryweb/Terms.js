import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import policy from '../Assets/policy/policy.webp'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Terms() {
    return (
        <Box>
            <Box py={10} marginBottom={5} sx={{ justifyContent: "center", display: "flex", alignItems: "center", backgroundImage: `url(${policy})` }}>
                <Container maxWidth="lg">
                    <Box width={"100%"} textAlign={"center"} sx={{ display: { lg: "flex", md: "block", xs: "block" }, justifyContent: { lg: "space-between", md: "center", xs: "center" } }}>
                        <Typography variant="h1" component="h2" fontSize={"37px"} fontWeight={"600"} color={"white"}>
                            Terms & Condition
                        </Typography>
                        <Typography variant="h1" component="h2" fontSize={"20px"} color={"white"}>
                            Home | Terms & Condition
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Box display={"flex"} justifyContent={"center"} padding={5}>
                <Typography fontSize={40} fontWeight={600} marginRight={2}>Terms</Typography>
                <Typography fontSize={40} fontFamily={"'Marcellus', sans-serif"}>& Conditions</Typography>
            </Box>
            <Box display={'flex'} justifyContent={"center"} padding={5}>
                <Box>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> It uses a dictionary of over 200 latin words, combined with a handful of model sentence structures, to generate lorem ipsum which looks reasonable.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> The generated lorem ipsum is t herefore always free from repetition, injected humour, or non-characteristic words etc.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> It was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pageMaker including versions of lorem ipsum.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</Typography>
                    <Typography lineHeight={2} color={"#808080"}><FiberManualRecordIcon sx={{fontSize:"small",color:'#B2905F'}} /> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Terms