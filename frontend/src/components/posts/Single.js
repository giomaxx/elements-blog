import React, { useState, useEffect, Fragment } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Single() {
  // useParams() -> Allows us to extract from the url the paramethers, in this case slug
  const { slug } = useParams();
  const classes = useStyles();

  const [data, setData] = useState({
    posts: [],
  });

  useEffect(() => {
    // Request the single page based on the slug
    axiosInstance.get('post/' + slug).then((res) => {
      setData({
        posts: res.data,
      });
      console.log(res.data);
    });
  }, [setData]);



  return (
    <React.Fragment>
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${data.posts.image})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={data.posts.image} alt={data.posts.imageText} />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {data.posts.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {data.posts.excerpt}
              </Typography>
            </div>
          </Grid>
        </Grid>

      </Paper>

      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Container maxWidth="lg">

          <Typography
            variant="p"
            color="textPrimary"
            paragraph
          >
            {data.posts.content}
          </Typography>
        </Container>
      </Container>
    </React.Fragment>
  );
}