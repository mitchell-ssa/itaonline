import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';

//import './style.css';
const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
    padding: 10,
  },
  logo: {
    maxHeight: 80,
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  buttom: {
    marginRight: 50,
  },
  bell: {
    marginRight: 20,
  }
});

function Header () {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <img src="/images/logo.png" alt="ItaOnline - Serviços e Conteúdo!" className={classes.logo} />

          <div className={classes.grow}>
            <span>Menu</span>
          </div>

          <div className={classes.userSection}>
            <Button variant="contained" color="primary" className={classes.buttom}>Quero Anunciar!</Button>
            <SvgIcon className={classes.bell}>
              <Bell/>
            </SvgIcon>            
            <Avatar alt="Michell Mendes" src="" />             
          </div>
        </Toolbar>
      </AppBar>
  );
}

export default Header;