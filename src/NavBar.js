import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const pages = ["Home", "About", "Services", "Contact"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "#537FE7", color: "#E9F8F9" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {window.innerWidth > 420 && (
            <img
              src={require("./assets/logo.png")}
              style={{
                height: "5vmax",
              }}
            />
          )}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Swapal Facilitators &amp; Promoters Pvt.Ltd
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/`}
                  >
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/facilitation`}
                  >
                    Facilitation
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/training`}
                  >
                    Training
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/hydroponics`}
                  >
                    Hydroponics
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/construction`}
                  >
                    Construction
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h8"
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Swapal Facilitators &amp; Promoters Pvt.Ltd
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              position: "absolute",
              right: "0",
            }}
          >
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
            <MenuItem>
              <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                <Link
                  style={{ textDecoration: "none", color: "#E9F8F9" }}
                  to={`/`}
                >
                  Home
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                <Link
                  style={{ textDecoration: "none", color: "#E9F8F9" }}
                  to={`/facilitation`}
                >
                  Facilitation
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                <Link
                  style={{ textDecoration: "none", color: "#E9F8F9" }}
                  to={`/training`}
                >
                  Training
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                <Link
                  style={{ textDecoration: "none", color: "#E9F8F9" }}
                  to={`/hydroponics`}
                >
                  Hydroponics
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
                <Link
                  style={{ textDecoration: "none", color: "#E9F8F9" }}
                  to={`/construction`}
                >
                  Construction
                </Link>
              </Typography>
            </MenuItem>

            {/* <MenuItem>
              <Typography sx={{ fontFamily: "Poppins" }} textAlign="center">
              <Link style={{textDecoration: 'none',color: "#E9F8F9"}} to={`/contact`}>Contact</Link>
              </Typography>
            </MenuItem> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
