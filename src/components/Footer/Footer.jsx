import { Box, Container, Link, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © Created by '}
      <Link
        color="inherit"
        href="https://github.com/Alekhandro24"
        target="_blank"
        rel="noreferrer noopener"
      >
        Alekhandro Lago Navarro
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        position: 'fixed',
        bottom: 0,
        width: 1,
        textAlign: 'center',
        backgroundColor: theme => theme.palette.secondary.light,
      }}
    >
      <Container>
        {/* <Link
          color="inherit"
          href="https://u24.gov.ua/"
          target="_blank"
          rel="noreferrer noopener"
        >
          #standWithUkraine
        </Link> */}
        <Copyright />
      </Container>
    </Box>
  );
};
