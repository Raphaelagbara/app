import React, { useState, useEffect } from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import diary from "./images/diary.jpg";

import Posts from "./components/Posts/Posts";

import Form from "./components/Form/Form";

import useStyles from './styles';

const App = () => {
    const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Online Diary
        </Typography>
        <img className={classes.image} src={diary} alt="icon" height="100" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
