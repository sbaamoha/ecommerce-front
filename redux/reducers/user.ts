import { createSlice } from "@reduxjs/toolkit";

interface InitState {
  user: {};
}
const initialState: InitState = {
  user: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export const {} = userSlice.actions;
export default userSlice.reducer;
