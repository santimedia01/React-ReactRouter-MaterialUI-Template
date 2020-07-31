import React from 'react';

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles, Button } from '@material-ui/core';
/*
import { InputBase, Badge, fade } from '@material-ui/core';
*/

import MenuIcon from '@material-ui/icons/Menu';
import BusinessIcon from '@material-ui/icons/Business';
/*
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
*/


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  brandLogo: {
    marginRight: theme.spacing(2),
  },
  /* CAJA DE BÚSQUEDA
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    maxHeight: '39px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1.4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.only('sm')]: {
      marginLeft: '-30px',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1.5, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.only('sm')]: {
      paddingLeft: '1em',
    },
    [theme.breakpoints.up('md')]: {
      width: '17ch',
      '&:focus': {
        width: '28ch',
      },
    },
  },
  */
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobileMenuTrigger: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navBarOffset: theme.mixins.toolbar,
}));

export default function PrimarySearchAppBar() {
  /** ------------------------------------
   *  DECLARACION DE ESTADOS, SUS HANDLERS Y ESTILOS 
   *  ------------------------------------
  */
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  /* MENU PERFIL DE USUARIO
  const [anchorEl, setAnchorEl] = React.useState(null);
  */

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  /* MENU PERFIL DE USUARIO
  const isMenuOpen = Boolean(anchorEl);
  */

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  /* MENU PERFIL DE USUARIO
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  */
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  /** ------------------------------------
   *  RENDERS DE SECCIONES
   *  ------------------------------------
  */
  
  /* MENU PERFIL DE USUARIO
  const renderAccountMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
    </Menu>
  );
  const renderProfileUserMenu = (
    <IconButton
      aria-label="cuenta del usuario actual"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );
  */

  /* CAJA DE BÚSQUEDA
  const renderSearchBox = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase placeholder="Buscar..." classes={{root: classes.inputRoot, input: classes.inputInput}} inputProps={{ 'aria-label': 'search' }} />
    </div>
  );
  */

  /* ICONO DE NOTIFICACIONES
  const renderNotificationsIcon = (
    <IconButton aria-label="mostrar 17 nuevas notificaciones" color="inherit">
      <Badge badgeContent={17} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
  */
  
  const renderLoginButton = (
    <Button href="#" color="inherit" disableRipple>Iniciar Sesión</Button>
  );
  const renderCreateAccountButton = (
    <Button href="#" color="inherit" disableRipple>Crear Cuenta</Button>
  );
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu-mobile'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* CAJA DE BUSQUEDA
      <MenuItem>
        {renderSearchBox}
      </MenuItem>
      <hr />
      */}
      {/* ICONO DE NOTIFICACIONES
      <MenuItem>
        {renderNotificationsIcon}
        <p>Notificaciones</p>
      </MenuItem>
      */}
      {/* MENU PERFIL DE USUARIO
      <MenuItem onClick={handleProfileMenuOpen}>
        {renderProfileUserMenu}
        <p>Perfil</p>
      </MenuItem>
      */}
      <MenuItem>
        {renderLoginButton}
      </MenuItem>
      <hr />
      <MenuItem>
        {renderCreateAccountButton}
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <BusinessIcon className={classes.brandLogo} />
          <Typography variant="h6" noWrap>App con React</Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* CAJA DE BÚSQUEDA {renderSearchBox} */}
            {/* ICONO DE NOTIFICACIONES {renderNotificationsIcon} */}
            {/* MENU DE PERFIL DE USUARIO {renderProfileUserMenu} */}
            {renderLoginButton}
            <hr />
            {renderCreateAccountButton}
          </div>
          <div className={classes.sectionMobileMenuTrigger}>
            <IconButton
              aria-label="ver más"
              aria-controls='primary-search-account-menu-mobile'
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* MENU PERFIL DE USUARIO renderAccountMenu */}
      <div className={classes.navBarOffset}></div>
    </div>
  );
}