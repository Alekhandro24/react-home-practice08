import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contactsApi';

const get = createAsyncThunk('contacts/get', async (_, { rejectWithValue }) => {
  try {
    const contacts = await contactsApi.fetchContacts();
    return contacts;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const add = createAsyncThunk(
  'contacts/add',
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.addContact(newContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const remove = createAsyncThunk(
  'contacts/remove',
  async (contactId, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.removeContact(contactId);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const update = createAsyncThunk(
  'contacts/update',
  async (updatedContact, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.updateContact(updatedContact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  get,
  add,
  remove,
  update,
};
export default operations;
