import { configureStore } from '@reduxjs/toolkit';
import telephoneFormReducer from './features/landing/telephone-form/telephone-form-slice';

export default configureStore({
  reducer: {
    telephoneForm: telephoneFormReducer,
  },
});
