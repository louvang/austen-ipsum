import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ipsumGenReducer from '../features/ipsumGen/ipsumGenSlice';

// Create store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    generatedText: ipsumGenReducer,
    // You can add more reducers here
  },
});
