import * as yup from 'yup';
import { useFormik } from 'formik';

import { Box, Fab, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactEditForm = ({ id, initialValues, onSubmit }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(contactsOperations.update({ id, ...values }));
    resetForm();
    onSubmit();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        mt: 1,
        textAlign: 'center',

        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          mr: 2,
          maxWidth: 305,
        }}
      >
        <TextField
          fullWidth
          required
          variant="standard"
          size="small"
          id="name"
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          autoComplete="name"
          autoFocus
        />
        <TextField
          fullWidth
          required
          variant="standard"
          size="small"
          name="number"
          label="Number"
          id="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          autoComplete="current-number"
        />
      </Box>
      <Fab
        type="submit"
        aria-label="submit"
        color="success"
        size="small"
        sx={{ mr: 2, zIndex: 'auto', minWidth: '40px' }}
      >
        <CheckOutlinedIcon />
      </Fab>
    </Box>
  );
};
