import { IconButton, InputBase, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/contactsSlice';
import SearchIcon from '@mui/icons-material/Search';

export const ContactFilter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  // const handleChange = e => {
  //   dispatch(setNameFilter(e.target.value));
  // };

  // if (contacts.length === 0) {
  //   return null;
  // }

  return (
    <Paper
      component="form"
      elevation={2}
      sx={{
        p: '2px 4px',
        maxWidth: '320px',
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search ..."
        value={filter}
        inputProps={{ 'aria-label': 'search' }}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Paper>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string,
// };

// export default Filter;
