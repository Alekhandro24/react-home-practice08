import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import { authSelectors } from 'redux/auth';
import { Navigation } from 'components/Nevigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const ApplicationBar = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <LocalLibraryRoundedIcon
          fontSize="medium"
          color="inherit"
          sx={{ mr: 2 }}
        />

        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
          PhoneBook App
        </Typography>
        {isLoggedIn ? (
          <>
            <UserMenu />
          </>
        ) : (
          <Navigation />
        )}
      </Toolbar>
    </AppBar>
  );
};
