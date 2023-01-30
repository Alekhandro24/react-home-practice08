import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [contactsOperations.get.pending](state, _) {
      state.isLoading = true;
    },
    [contactsOperations.get.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [contactsOperations.get.rejected](state, { payload }) {
      state.error = `${payload}`;
      state.isLoading = false;
    },
    [contactsOperations.add.pending](state, _) {
      state.isLoading = true;
    },
    [contactsOperations.add.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
    },
    [contactsOperations.add.rejected](state, { payload }) {
      state.error = `${payload}`;
      state.isLoading = false;
    },
    [contactsOperations.remove.pending](state, _) {
      state.isLoading = true;
    },
    [contactsOperations.remove.fulfilled](state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
    },
    [contactsOperations.remove.rejected](state, { payload }) {
      state.error = `${payload}`;
      state.isLoading = false;
    },
    [contactsOperations.update.pending](state, _) {
      state.isLoading = true;
    },
    [contactsOperations.update.fulfilled](state, { payload }) {
      const updItemIndx = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(updItemIndx, 1, payload);
      state.isLoading = false;
    },
    [contactsOperations.update.rejected](state, { payload }) {
      state.error = `${payload}`;
      state.isLoading = false;
    },
  },
});
export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
