import { createSlice } from "@reduxjs/toolkit";

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      q: '',
      subject: '',
      orderBy: '',
      startIndex: 0
    }
    },
  reducers: {
    search: (state, action) => {
      state.value = action.payload

    },
  },
});

export const { search } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;

