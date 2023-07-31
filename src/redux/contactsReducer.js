import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, { payload }) => {
      state.contacts = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { setContacts, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
