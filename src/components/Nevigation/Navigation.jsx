import { Button, Stack } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Stack component="nav" direction="row" spacing={2}>
      <Button
        component={RouterLink}
        to="/login"
        variant="outlined"
        color="inherit"
        sx={{
          '&.active': {
            bgcolor: 'background.paper',
            color: 'primary.main',
          },
        }}
      >
        Sign in
      </Button>
      <Button
        component={RouterLink}
        to="/register"
        variant="outlined"
        color="inherit"
        sx={{
          '&.active': {
            bgcolor: 'background.paper',
            color: 'primary.main',
          },
        }}
      >
        Sign up
      </Button>
    </Stack>
  );
};
