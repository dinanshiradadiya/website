import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

function LastHeader() {
    return (
        <div>
            <div>
                <Grid container item xs={12} sx={{ justifyContent: "space-between", display: "flex", textAlign: "center", padding: "20px 0" }}>
                    <Grid item xs={3}>
                        <Box display={"flex"} justifyContent={"center"} >
                            <LocalShippingOutlinedIcon sx={{ color: "#b2905f" }} />
                            <Typography fontFamily={"Manrope, sans-serif"} sx={{ paddingLeft: "10px", color: "#808080" }}>
                                Worldwide shipping
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display={"flex"} justifyContent={"center"} >
                            <ReplayOutlinedIcon sx={{ color: "#b2905f" }} />
                            <Typography fontFamily={"Manrope, sans-serif"} sx={{ paddingLeft: "10px", color: "#808080" }}>
                                30 Days return policy
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display={"flex"} justifyContent={"center"} >
                            <LockOutlinedIcon sx={{ color: "#b2905f" }} />
                            <Typography fontFamily={"Manrope, sans-serif"} sx={{ paddingLeft: "10px", color: "#808080" }}>
                                Secure payment method
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display={"flex"} justifyContent={"center"} >
                            <CardGiftcardOutlinedIcon sx={{ color: "#b2905f" }} />
                            <Typography fontFamily={"Manrope, sans-serif"} sx={{ paddingLeft: "10px", color: "#808080" }}>
                                Every most gift voucher
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default LastHeader