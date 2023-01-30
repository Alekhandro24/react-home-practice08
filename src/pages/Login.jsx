import { LoginForm } from 'components/LoginForm/LoginForm';
import { Alert, Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Login = () => {
  const isError = useSelector(authSelectors.getAuthError);

  return (
    <Grid container component="main" sx={{ height: '100vh', py: 6 }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            'url(https://source.unsplash.com/random?phone&call&contact)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <LoginForm />
          {isError && (
            <Alert
              severity="error"
              sx={{ width: '100%', textAlign: 'center', maxWidth: '320px' }}
            >
              Please, enter valid email and password <br /> or
              <br /> Sign up!
            </Alert>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
