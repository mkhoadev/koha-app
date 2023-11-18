import { NavigationContainer } from "@react-navigation/native";
import MainStackScreen from "./MainStack";
import AuthStack from "./AuthStack";

export default function AppStack() {
  return (
    <NavigationContainer>
      <MainStackScreen />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}
