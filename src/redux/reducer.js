import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

//localStorage
const storedContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(storedContacts);

const contactsInitialState = parsedContacts || [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [filterContacts]: (_, action) => action.payload,
});
