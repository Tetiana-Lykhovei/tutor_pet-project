import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { Router } from '@material-ui/icons';
import { Navbar } from "./components/Navbar";

import "materialize-css";
import { Container } from "@material-ui/core";
// import Button from '@material-ui/core/Button';
// import {AppBar, Box, Container, Typography, Toolbar} from "@material-ui/core";
// import SearchIcon from '@material-ui/icons/Search';
// import IconButton from '@material-ui/core/IconButton';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1},
//     menuButton:{
//       marginRight: theme.spacing(1)
//     },
//    title:{
//      flexGrow: 1
//    },
//    }));

function App() {
  // const s = useStyles();

  return (
    <Router>
      <Navbar />
      <div className="container"></div>
    </Router>

    /* <AppBar position="fixed">
       <Container fixed>
         <Toolbar>
         <Typography variant="h6" className={s.title}>TUTORS</Typography>

         <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
         <Box mr={3}>
           <Button color="inherit" variant="outlined">Log in</Button>
          </Box>
         <Button color="secondary" variant="contained">Sign up</Button>
</Toolbar>
       </Container>
     </AppBar> */
  );
}

export default App;
