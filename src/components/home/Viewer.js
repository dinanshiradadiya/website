import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';


function Viewer() {
    return (
        <div>
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
                <Typography color={"#808080"} lineHeight={2}>There are many variations of passages of lorem Ipsum available, but the majority have an
                    <br />suffered alteration in some form, by injected humour, or randomised words which don't a look
                    <br />even slightly believable.</Typography>
            </Box>
            <Box textAlign={'center'} marginTop={5}>
               <img src='https://qx-aolie.myshopify.com/cdn/shop/files/quotes-icon.png?v=1696573837&width=832' width={50} height={50}/>
            </Box>   
            <Box >
                <Stack>
                 <Box display={'flex'} justifyContent={'center'} marginTop={5} gap={5}>
                    <Avatar
                        src="https://qx-aolie.myshopify.com/cdn/shop/files/testi-04.png?v=1696573757&width=512"
                        sx={{ width:75, height:75 }}
                    />
                     <Avatar
                        src="https://qx-aolie.myshopify.com/cdn/shop/files/testi-01.png?v=1696573758&width=512"
                        sx={{ width:80, height:80 }}
                    />
                     <Avatar
                        src="https://qx-aolie.myshopify.com/cdn/shop/files/testi-02.png?v=1696573757&width=512"
                        sx={{ width:75, height:75 }}
                    />
                    </Box>
                </Stack>
            </Box>
            <Box marginTop={3}>
                <Typography variant='h6' textAlign={'center'} color={"#b2905f"} fontFamily={'Holligate Signature Demo'}>Jack Aranda</Typography>
            </Box>
            <Box>
                <Typography textAlign={"center"} fontWeight={600}>Store owner</Typography>
            </Box>

        </div>
    )
}

export default Viewer