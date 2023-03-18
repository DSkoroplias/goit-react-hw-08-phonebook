import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/contacts';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toUpperCase();
      const result = contacts.items.find(({ name }) => {
        return name.toUpperCase() === normalizedName;
      });
      if (result) {
        alert(`${name} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
