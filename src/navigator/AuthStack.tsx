/* eslint-disable prettier/prettier */
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/Login/indext";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const screenOptions = {
  headerTransparent: true,
  headerTitle: () => null,
  headerBackTitleVisible: false,
  headerShown: false,
};
