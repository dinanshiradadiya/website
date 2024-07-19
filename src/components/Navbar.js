import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RefreshIcon from '@mui/icons-material/Refresh';
import HttpsIcon from '@mui/icons-material/Https';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}  xs={12}>
      <Toolbar
          style={{
            backgroundColor: "#b2905f",
            color: "white",
            alignItems: "center",
          }}>
      <Grid
          container
          item
        >
          <Grid item xs={3}>
            <Typography>Get20% off your first order: 20%OFF</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography display={"flex"} justifyContent={'space-evenly'}>
              <ArrowBackIcon title="Add" place/>
              Its time to save more
              <ArrowForwardIcon sx={{alignItems:'end'}}/>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography display={"flex"}>
              AUD $
              <KeyboardArrowDownIcon />
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Order Online: +62 0123 456 789</Typography>
          </Grid>
        </Grid>
      </Toolbar>
      </Box>
{/* -------------------------------------------------- */}
      <Grid container item xs={12} sx={{justifyContent:"space-between",display:"flex",textAlign:"center",margin:"15px"}}>
        <Grid item xs={3} display={"flex"} justifyContent={"center"}>
            <LocalShippingIcon />
            <Typography >
                Worldwide shipping
            </Typography>
        </Grid>
        <Grid item xs={3} display={"flex"} justifyContent={"center"}>
            <RefreshIcon />
            <Typography>
                30 Days return policy
            </Typography>
        </Grid>
        <Grid item xs={3} display={"flex"} justifyContent={"center"}>
            <HttpsIcon />
            <Typography>
                Secure payment method
            </Typography>
        </Grid>
        <Grid item xs={3} display={"flex"} justifyContent={"center"}>
            <CardGiftcardIcon />
            <Typography>
               Every most gift voucher
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;

