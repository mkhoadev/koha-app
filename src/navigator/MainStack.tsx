/* eslint-disable prettier/prettier */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainBottomTab from "./MainBottom";
import LoginScreen from "../screens/Login/indext";
import RegisterScreen from "../screens/Register";
import ForgotPasswordScreen from "../screens/ForgotPassword";
import OnboardingScreen from "../screens/Onboarding";

const MainStack = createStackNavigator();
export default function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={screenOptions}>
      <MainStack.Screen name="MainTab" component={MainBottomTab} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Register" component={RegisterScreen} />
      <MainStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <MainStack.Screen name="Onboarding" component={OnboardingScreen} />
    </MainStack.Navigator>
  );
}
const screenOptions = {
  headerTransparent: true,
  headerTitle: () => null,
  headerBackTitleVisible: false,
  headerShown: false,
};
