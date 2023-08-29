import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};
const contactFormSlice = createSlice({
  name: 'contactForm', // Имя слайса
  initialState: initialState, // Начальное состояние редюсера слайса
  reducers: {
    // Объект редюсеров
    setName(state, action) {
      state.name = action.payload; // return { ...state, name: action.payload }
    },
    setNumber(state, action) {
      state.number = action.payload; // return { ...state, number: action.payload }
    },
  },
});

// export const setName = payload => {//Action creator функция возвращает инструкцию
//   return {
//     type: 'contactForm/setName',
//     payload,
//   };
// };
// Генераторы экшенов
export const { setName, setNumber } = contactFormSlice.actions;
// Редюсер слайса
export const contactFormReducer = contactFormSlice.reducer;
