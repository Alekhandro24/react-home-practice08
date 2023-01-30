import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Avatar, Box, Container, Typography } from '@mui/material';

const Register = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        py: 6,
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <RegisterForm />
      </Box>
    </Container>
  );
};

export default Register;
