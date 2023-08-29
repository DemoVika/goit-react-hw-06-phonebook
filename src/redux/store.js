import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // используем localStorage

// import rootReducer from './reducers'; // ваш корневой редьюсер
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root', // ключ, по которому будут сохранены данные
  storage, // используем localStorage
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  reducer: {
    app: appReducer,
  },
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(persistedReducer);
export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     app: appReducer,
//   },
// });
