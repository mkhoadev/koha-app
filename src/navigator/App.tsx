import { NavigationContainer } from "@react-navigation/native";
import MainStackScreen from "./MainStack";

export default function AppStack() {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}
