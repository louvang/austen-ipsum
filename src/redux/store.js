import { configureStore } from '@reduxjs/toolkit';
import ipsumGenReducer from './ipsumGen/ipsumGenSlice';

export const store = configureStore({
  reducer: {
    generatedText: ipsumGenReducer,
  },
});
