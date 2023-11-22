import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  access_token: string;
  user: object;
}

const initialState: UserState = {
  access_token: "",
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    connectWallet: (state, action) => {
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
    },
    disconnectWallet: (state) => {
      state.access_token = "";
      state.user = {};
    },
  },
});

export const { connectWallet, disconnectWallet } = userSlice.actions;

export default userSlice.reducer;
