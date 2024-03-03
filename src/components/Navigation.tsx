import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function Navigation({ logoText }: { logoText: string }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav className="flex items-center">
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon
            sx={{
              color: "#ffffff",
            }}
          />
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
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center" component={Link} to={`/menu`}>
              Меню
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center" component={Link} to={`/about`}>
              Про нас
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center" component={Link} to={`/delivery`}>
              Доставка
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      {/* <Typography
        variant="h5"
        noWrap
        component={Link}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "Lobster, cursive",
          color: "#000",
          textDecoration: "none",
          fontSize: "24px",
        }}
      >
        {logoText}
      </Typography> */}
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          component={Link}
          to="/menu"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Меню
        </Button>
        <Button
          component={Link}
          to="/about"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          О нас
        </Button>
        <Button
          component={Link}
          to="/delivery"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Доставка
        </Button>
      </Box>
    </nav>
  );
}
export default Navigation;
