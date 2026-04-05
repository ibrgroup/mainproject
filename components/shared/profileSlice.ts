
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface ProfileState {
  name: string;
}

const initialState: ProfileState = {
  name: Cookies.get("profileName") || "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name; 
      Cookies.set("profileName", action.payload.name); 
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;