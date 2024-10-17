import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { AccountCircle, LocalHospital } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext";

const pages = {
  routes: [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Formulas de pacientes",
      path: "/formulas",
    },
    {
      name: "Promociones",
      path: "/promotions",
    },
    {
      name: "Perfil",
      path: "/profile",
    }
  ],
};

function NavBar() {
  const { user, logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate(); // con esta constante hacemos la navegación entre rutas

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (page: string) => {
    navigate(page);
    handleCloseNavMenu()
  }

  return (
      <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalHospital sx={{ display: { xs: 'none', md:'flex'}, mr: 1 }} />
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
          >
            MedTrack
          </Typography>
          {user ? (
            <>
              <IconButton
                size="large"
                aria-label="acount of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              color="inherit"
              sx={{ color: "white" }}
              component={Link}
              to="/Login"
            >
              Login
            </Button>
          )}
        </Toolbar>
        </Container>
      </AppBar>
  );
}

export default NavBar;
