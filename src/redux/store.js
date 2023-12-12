import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactSlice';
import filterReducer from './contacts/filterSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const filterPersistConfig = {
  key: 'filter',
  storage,
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);
const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);

const rootReducer = {
  contacts: persistedContactsReducer,
  filter: persistedFilterReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
