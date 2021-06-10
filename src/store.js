import { configureStore } from '@reduxjs/toolkit';
import telephoneFormReducer from './landing/telephoneForm/TelephoneFormSlice';

export default configureStore({
  reducer: {
    telephoneForm: telephoneFormReducer,
  },
});
