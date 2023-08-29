import { configureStore } from '@reduxjs/toolkit';
import { contactFormReducer } from './contactFormReducer';
import { appReducer } from './appReducer';

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    app: appReducer,
  },
});
