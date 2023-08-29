import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts') || []),
  filter: '',
};

const appSlice = createSlice({
  name: 'app', // Имя слайса
  initialState: initialState, // Начальное состояние редюсера слайса
  reducers: {
    // Объект редюсеров
    addContact(state, action) {
      // if (state.contacts.find(item => item.name === action.payload.name)) {
      //   alert(`${action.payload} is already in contacts`);
      //   return;
      // }
      state.contacts.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        item => item.id === action.payload
      );
      state.contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = appSlice.actions; // Генераторы экшенов
export const appReducer = appSlice.reducer; // Редюсер слайса
