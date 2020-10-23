import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Header from './components/Header';

//import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    height: '100vh',
    padding: theme.spacing(3),
  },
  toolbar: {
    minHeight: 100,
  }
}));

function Home () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <Container maxWidth="lg" display="flex">
          <Box>
            Conteúdo
          </Box>
        </Container>        
      </main>
    </div>
  )
}

export default Home;