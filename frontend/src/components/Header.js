import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#c7c7c7'
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'auto',
    backgroundColor: '#e0e0e0'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const sections = [
    { title: 'Earth', url: '#' },
    { title: 'Water', url: '#' },
    { title: 'Fire', url: '#' },
    { title: 'Aether', url: '#' },
  ];


export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            className={classes.toolbarTitle} 
          >
          	<Link
							component={NavLink}
							to="/"
							underline="none"
							color="textPrimary"
						>
							Elements Blog
						</Link>
          </Typography>
          <Box mr={1}>
            <Button 
              variant="contained" 
              size="small" 
              component={NavLink}
              to="/admin"
              >
              Post Manager
            </Button>
          </Box>
          <Box mr={1}>
            <Button 
              variant="outlined" 
              size="small" 
              component={NavLink}
              to="/signup"
              >
              Sign Up
            </Button>
          </Box>
          <Box mr={1}>
            <Button 
              variant="outlined" 
              size="small" 
              component={NavLink}
              to="/login"
              >
              Login
            </Button>
          </Box>
          <Box mr={1}>
            <Button
              href="#"
              variant="outlined"
              size="small" 
              className={classes.link}
              component={NavLink}
              to="/logout"
            >
              Logout
            </Button>
          </Box>
        </Toolbar>

        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
