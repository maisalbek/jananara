import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AccountCircleIcon } from "@mui/icons-material";
import { MoreIcon } from "@mui/icons-material";
import { Button } from "@mui/material";
// import "./Navbar.css";
import { useAuth } from "../context/AuthContextProvider";
// import { PersonIcon } from "@mui/icons-material";
import { AdminPanelSettingsIcon } from "@mui/icons-material";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { currentUser, logOutUser } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ fontFamily: "Libre Caslon Display" }}
    >
      {currentUser?.isLogged && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          Log Out
        </MenuItem>
      )}

      {currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>{currentUser?.user}</MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="mobile-link" to="/register">
            Register
          </NavLink>
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="mobile-link" to="/login">
            Login
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/*===> here is my items */}
      <MenuItem>
        <NavLink to="/" className="mobile-link">
          <p>Главная</p>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/specialist" className="mobile-link">
          <p>Специалисты</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/admin/add" className="mobile-link">
          <IconButton>
            {currentUser?.isAdmin ? (
              <AdminPanelSettingsIcon />
            ) : currentUser?.isLogged ? (
              <PersonIcon />
            ) : (
              <AccountCircleIcon />
            )}
          </IconButton>
          <p>Добавить пациента</p>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/products" className="mobile-link">
          <p>Пациенты</p>
        </NavLink>
      </MenuItem>

      {/* end of my items */}

      {/* material */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          sx={{
            color: currentUser?.isLogged ? "green" : "black",
          }}
        >
          {currentUser?.isLogged ? <PersonIcon /> : <AccountCircleIcon />}
        </IconButton>
        <p
          style={{
            color: currentUser?.isLogged ? "green" : "black",
          }}
        >
          Profile
        </p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        zIndex: "5",
      }}
    >
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <div className="navbar">
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                sx={{
                  my: 2,
                  color: "#f0e7d1",
                  display: "block",
                  fontSize: "16px",
                  fontFamily: "Libre Caslon Display",
                }}
                component={NavLink}
                to="/"
              >
                Главная
              </Button>

              <Button
                sx={{
                  my: 2,
                  color: "#f0e7d1",
                  display: "block",
                  fontSize: "16px",
                  fontFamily: "Libre Caslon Display",
                }}
                component={NavLink}
                to="/specialist"
              >
                Специалисты{" "}
              </Button>

              {currentUser?.isAdmin && (
                <Button
                  sx={{
                    my: 2,
                    color: "#f0e7d1",
                    display: "block",
                    fontSize: "16px",
                    fontFamily: "Libre Caslon Display",
                  }}
                  component={NavLink}
                  to="/products 
              "
                >
                  Пациенты
                </Button>
              )}

              {currentUser?.isAdmin && (
                <Button
                  sx={{
                    my: 2,
                    color: "#f0e7d1",
                    display: "block",
                    fontSize: "16px",
                    fontFamily: "Libre Caslon Display",
                  }}
                  component={NavLink}
                  to="/admin/add 
              "
                >
                  Добавить пациента
                </Button>
              )}
            </Box>
          </div>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{
                color: currentUser?.isLogged ? "darkblue" : "white",
              }}
            >
              {currentUser?.isAdmin ? (
                <AdminPanelSettingsIcon />
              ) : currentUser?.isLogged ? (
                <PersonIcon />
              ) : (
                <AccountCircleIcon />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
