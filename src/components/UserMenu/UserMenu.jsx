import { Avatar, Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    // children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    children: `${name[0]}`,
  };
}

export const UserMenu = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Avatar {...stringAvatar(userEmail)} sx={{ mr: 2 }} />
      <Typography component="p" sx={{ mr: 2 }}>
        {userEmail}
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Box>
  );
};
