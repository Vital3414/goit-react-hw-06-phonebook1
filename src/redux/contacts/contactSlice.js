// import { createSlice } from '@reduxjs/toolkit';
// import { initialState } from './initialState';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState.contacts,
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export default contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, action) => {
      if (!Array.isArray(state.contacts)) {
        state.contacts = [];
      }
      const updatedContacts = [...state.contacts, { ...action.payload }];
      state.contacts = updatedContacts;
      return state;
    },
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
