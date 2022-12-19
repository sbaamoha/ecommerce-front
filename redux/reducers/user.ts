import { createSlice } from "@reduxjs/toolkit";

interface InitState {
  username: string;
}
const initialState: InitState = {
  username: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state: InitState, action) => {
      state.username = action.payload;
    },
    logoutUser: (state: InitState) => {
      state.username = "";
    },
  },
});
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
