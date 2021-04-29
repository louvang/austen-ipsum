import { createSlice } from '@reduxjs/toolkit';
import generateParagraphs from '../../utils/generateParagraphs';

const initialState = {
  text: generateParagraphs(8, 'All'),
};

export const ipsumGenSlice = createSlice({
  name: 'ipsumGen',
  initialState,
  reducers: {
    generateText: (state, action) => {
      state.text = generateParagraphs(action.payload.parCount, action.payload.title);
    },
  },
});

export const { generateText } = ipsumGenSlice.actions;

export const selectText = (state) => state.generatedText.text;

export default ipsumGenSlice.reducer;
