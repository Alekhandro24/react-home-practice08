import { Fab, ListItem, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { ContactEditForm } from 'components/ContactEditForm/ContactEditForm';
import { useState } from 'react';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const isContactsLoading = useSelector(contactsSelectors.isContactsLoading);

  // const handleContactDelete = () => {
  //   setIsDeleting(true);
  //   dispatch(deleteContact(id));
  // };

  return (
    <ListItem>
      <PhoneAndroidRoundedIcon
        color="primary"
        fontSize="large"
        sx={{ mr: 2 }}
      />
      {isEdit ? (
        <ContactEditForm
          id={id}
          initialValues={{ name, number }}
          onSubmit={() => setIsEdit(false)}
        />
      ) : (
        <ListItemText
          primary={name}
          secondary={number}
          sx={{ maxWidth: 320 }}
        />
      )}
      {!isEdit && (
        <Fab
          color="secondary"
          aria-label="edit"
          size="small"
          sx={{ mr: 2, zIndex: 'auto' }}
        >
          <EditIcon onClick={() => setIsEdit(true)} />
        </Fab>
      )}
      <Fab
        aria-label="delete"
        size="small"
        sx={{ zIndex: 'auto', minWidth: '40px' }}
      >
        <DeleteIcon
          disabled={isContactsLoading}
          type="button"
          onClick={() => dispatch(contactsOperations.remove(id))}
        />
      </Fab>
    </ListItem>
  );
};

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

// export default ContactListItem;
