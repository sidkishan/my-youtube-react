import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchResults: (state, actions) => {
      //changing state logic
      const newEntry = actions.payload;
      //state = Object.assign(state, newEntry);
      //don't do state = { ...state, ...newEntry }, redux wont allow directly mutating the state, we haave to return it
      return { ...state, ...newEntry };
    },
  },
});
export const { cacheSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
