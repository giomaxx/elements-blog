import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
      backgroundColor: '#e0e0e0'
    },
  }));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Elements Blog
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
	{
		title: 'Elements Blog',
		description: ['Team', 'About', 'Contact us', 'Locations'],
  },
  {
		title: 'Elements',
		description: [
			'Earth',
			'Water',
			'Fire',
      'Aether',
		],
	},
	{
		title: 'Features',
		description: [
			'Cool stuff',
			'Random feature',
			'Team feature',
			'Developer stuff',
			'Another one',
		],
	},
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
	},
];

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <Grid container spacing={4} justify="space-evenly">
		  {footers.map((footer) => (
			<Grid item xs={6} sm={3} key={footer.title}>
			  <Typography variant="h6" color="textPrimary" gutterBottom>
				{footer.title}
			  </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
            ))}
        </Grid>
        <Box mt={5}>
            <Copyright />
        </Box>
      </Container>
    </footer>
  );
}
