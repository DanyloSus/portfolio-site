import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { username: localStorage.getItem("user") || "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string }>) {
      state.username = action.payload.username;
      localStorage.setItem("user", action.payload.username);
    },
    quit(state, action) {
      console.log("quit");
      state.username = "";
      localStorage.removeItem("user");
    },
  },
});

export const { login, quit } = userSlice.actions;

export default userSlice.reducer;
