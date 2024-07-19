import React from 'react'
import { Box, Container, ListItem, Typography, Grid } from '@mui/material';
import Logo from '../../assets/images/Header/logo.avif';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function SecondHeader(props) {

    const drawerWidth = 240;
    const navItems = ['HOME', 'PRODUCT', 'COLLECTION', 'BLOG', 'PAGE'];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'end', padding: "10px" }}>
            <CloseIcon sx={{ padding: "10px" }} />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding sx={{ borderBottom: "1px solid #3333", textAlign: "center", padding: "10px" }}>
                        <Typography variant="h6" fontWeight={"600px"} >
                            <ListItemText primary={item} />
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div style={{ borderBottom: "1px solid #33333338" }}>
            <Container maxWidth >
                <Grid container item xs={12} sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }} >
                    <Grid item xs={12} sm={6} lg={1} style={{ display: "flex", alignItems: "center" }} >
                        <Box><img src={Logo} alt="" width={"120px"} /></Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ display: { sx: "none", sm: "none", md: "none", lg: "block", } }} >
                        <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
                            <Typography sx={{ display: "flex", padding: "20px 0", alignItems: "center", fontWeight: "600", fontSize: "16px", color: "#333333" }} id="Nav">
                                <Typography px={2} sx={{ "&:hover": { color: "#B2905F", transition: ".5s" } }} onClick={() => navigate("/product1")}>HOME</Typography>
                                <Typography px={2} sx={{ "&:hover": { color: "#B2905F", transition: ".5s" } }} onClick={() => navigate("/collection")}>PRODUCT</Typography>
                                <Typography px={2} className='menu'
                                    sx={{
                                        display: "flex",
                                        "&:hover":
                                        {
                                            color: "#B2905F",
                                            "& .subMenu": {
                                                opacity: "1",
                                                visibility: "visible",
                                                transition: ".5s",
                                                color: "#000"
                                            }

                                        }
                                    }} onClick={() => navigate("/blogs")}>COLLECTION <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                                    <Grid className='subMenu' sx={{ display: "flex", position: "absolute", padding: "20px", whiteSpace: "nowrap", boxShadow: "0 0 10px #00000026", top: "100%", left: "-25%", visibility: "hidden", opacity: "0", backgroundColor: "#fff", width: "207%", justifyContent: "space-around" }}>
                                        <Typography x={{ "&:hover": { color: "#B2905F", transition: ".5s" } }}>
                                            <ListItem sx={{ fontWeight: "600", fontSize: "19px" }}>Gold necklace</ListItem>
                                            <ListItem>Chocolate brownie</ListItem>
                                            <ListItem>Cream origin biscuit</ListItem>
                                            <ListItem>Crunchy bagel 20gm</ListItem>
                                            <ListItem>Healthy cream rolls</ListItem>
                                            <ListItem>Sandwich soft bread</ListItem>
                                            <ListItem>Sweet chocolate cake</ListItem>
                                        </Typography>
                                        <Typography>
                                            <ListItem sx={{ fontWeight: "600", fontSize: "19px" }}>Hand harness</ListItem>
                                            <ListItem>Sandwich soft bread</ListItem>
                                            <ListItem>Healthy cream rolls</ListItem>
                                            <ListItem>Crunchy bagel 20gm</ListItem>
                                            <ListItem>Baked cremy muffin</ListItem>
                                            <ListItem>Austrian flaky croissant</ListItem>
                                            <ListItem>Doughnut healthy food</ListItem>
                                        </Typography>
                                        <Typography sx={{ display: "flex" }}><ListItem><img src="https://qx-aolie.myshopify.com/cdn/shop/collections/menu-banner-01_1_604d45f7-477b-43cc-8bb8-99ad51c834fe.jpg?v=1696589132" alt="" width={"300px"} /></ListItem>
                                            <ListItem><img src="https://qx-aolie.myshopify.com/cdn/shop/collections/menu-banner-01_1.jpg?v=1696589121" alt="" width={"300px"} /></ListItem>
                                        </Typography>
                                    </Grid>
                                </Typography>
                                <Typography px={2} sx={{ "&:hover": { color: "#B2905F", transition: ".5s" } }}>BLOG</Typography>
                                <Typography px={2} className='menu'
                                    sx={{
                                        display: "flex", position: "relative",
                                        "&:hover": {
                                            color: "#B2905F",
                                            "& .subMenu": {
                                                opacity: "1",
                                                visibility: "visible",
                                                color: "#333333"
                                            }
                                        }
                                    }}
                                >PAGS <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                                    <Typography className='subMenu' sx={{ whiteSpace: "nowrap", position: "absolute", top: "100%", left: "0", visibility: "hidden", opacity: "0", boxShadow: "0 0 10px #00000026", backgroundColor: "#fff", padding: "30px 30px 0" }}>
                                        <ListItem xs={{ padding: "12px 30px 0" }}>About us</ListItem>
                                        <ListItem xs={{ padding: "12px 30px 0" }}>Contact us</ListItem>
                                        <ListItem xs={{ padding: "12px 30px 0" }}>Faqs</ListItem>
                                        <ListItem xs={{ padding: "12px 30px 0" }}>Return policy</ListItem>
                                        <ListItem xs={{ padding: "12px 30px 0" }}>Privacy policy</ListItem>
                                        <ListItem xs={{ padding: "12px 30px 0" }}>Payment policy</ListItem>
                                        <ListItem xs={{ padding: "12px 30px 0" }}>Terms & condition</ListItem>
                                    </Typography>
                                </Typography>
                            </Typography>
                            <Typography xs={{ display: "flex", alignItems: "center", Text: "center" }}><input type="text" placeholder='Find our search' style={{ outline: "none", border: "none", fontSize: "16px" }} /></Typography>
                            <Typography sx={{ fontSize: "60px", display: { sx: "block", sm: "block", md: "block", lg: "none" } }}></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }} >
                        <Box sx={{ display: "flex", color: "#333333" }}>
                            <Typography aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle} sx={{ display: { sx: "block", sm: "block", md: "block", lg: "none" }, padding: "0 15px" }}><MenuIcon /></Typography>
                            <Typography ><SearchIcon sx={{ fontSize: "23px" }}></SearchIcon></Typography>
                            <Typography><PermIdentityIcon sx={{ fontSize: "23px", margin: "0 20px" }}></PermIdentityIcon></Typography>
                            <Typography><FavoriteBorderIcon sx={{ fontSize: "23px", margin: "0 20px" }}></FavoriteBorderIcon></Typography>
                            <Typography sx={{
                                backgroundColor: "#000", width: "25px", height: "26px", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex", color: "#fff", marginLeft: "10px", transition: ".5S", "&:hover": {
                                    backgroundColor: "#B2905F",
                                }
                            }}>0</Typography>
                        </Box>
                        <Box sx={{ backgroundColor: "#B2905F", display: "flex", color: "#fff", alignItems: "center", margin: "0 0 0 20px", padding: "7px 13px 7px 13px" }}>
                            <Typography><WorkOutlineIcon /></Typography>
                            <Typography sx={{ margin: "0 5px 0 13px", whiteSpace: "nowrap" }}>My Cart</Typography>
                            <Typography className='zero' sx={{
                                backgroundColor: "#000", width: "25px", height: "26px", borderRadius: "50%", justifyContent: "center", alignItems: "center", display: "flex", color: "#fff", marginLeft: "10px", transition: ".5S", "&:hover": {
                                    backgroundColor: "#FFF",
                                    color: "#B2905F"
                                }
                            }}>0</Typography>
                            <Typography></Typography>
                        </Box>
                    </Grid>
                    <nav>
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </nav>
                </Grid>
            </Container>
        </div>
    )
}

export default SecondHeader