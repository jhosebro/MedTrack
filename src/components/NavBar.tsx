import { LocalHospital } from "@mui/icons-material";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const paginas = [
  {
    nombre: "Dashboard",
    ruta: "/dashboard",
  },
  { nombre: "Formulas", ruta: "/formulas" },
  { nombre: "Promociones", ruta: "/promotions" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const redirigir = (ruta: string) => {
    navigate(ruta);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar sx={{ bgcolor: "#2A5EC9" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalHospital sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MEDTRACK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <IconButton
            size="large"
            aria-label="cuenta del usuario actual"
            aria-controls="menu-appbar"
            aria-hashpopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {paginas.map((page) => (
              <MenuItem key={page.nombre} onClick={() => redirigir(page.ruta)}>
                <Typography sx={{textAlign: 'center'}}>{page.nombre}</Typography>
              </MenuItem>
              ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
