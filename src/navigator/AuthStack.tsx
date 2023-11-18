/* eslint-disable prettier/prettier */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/Login/indext";
import RegisterScreen from "../screens/Register";
import ForgotPasswordScreen from "../screens/ForgotPassword";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}

const screenOptions = {
  headerTransparent: true,
  headerTitle: () => null,
  headerBackTitleVisible: false,
  headerShown: false,
};
