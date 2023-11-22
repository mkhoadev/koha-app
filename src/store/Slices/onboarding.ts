import { createSlice } from "@reduxjs/toolkit";

export interface OnboardingState {
  isOnboarding: boolean;
}

const initialState: OnboardingState = {
  isOnboarding: false,
};

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setOnboarding: (state, action) => {
      state.isOnboarding = action.payload.isOnboarding;
    },
  },
});

export const { setOnboarding } = onboardingSlice.actions;

export default onboardingSlice.reducer;
