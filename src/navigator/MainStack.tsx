/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainBottomTab from "./MainBottom";
import OnboardingScreen from "../screens/Onboarding";

const MainStack = createStackNavigator();
export default function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      {/* <MainStack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      <MainStack.Screen name="MainTab" component={MainBottomTab} />
    </MainStack.Navigator>
  );
}
const screenOptions = {
  headerTransparent: true,
  headerTitle: () => null,
  headerBackTitleVisible: false,
  headerShown: false,
};
