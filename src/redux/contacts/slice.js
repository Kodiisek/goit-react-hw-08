import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // Inicjujemy items jako pustą tablicę
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        // Upewniamy się, że action.payload jest tablicą
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        // Upewniamy się, że items to tablica przed użyciem .push
        if (Array.isArray(state.items)) {
          state.items.push(action.payload);
        } else {
          state.items = [action.payload]; // Jeśli to nie jest tablica, zamień na tablicę z jednym elementem
        }
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        // Upewniamy się, że items to tablica przed wykonaniem filter
        if (Array.isArray(state.items)) {
          state.items = state.items.filter(
            (contact) => contact.id !== action.payload
          );
        } else {
          state.items = []; // Jeśli to nie jest tablica, ustawiamy pustą tablicę
        }
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
