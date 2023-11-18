import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { HeathIcon, HomeIcon, PlusMenuIcon, StatisticIcon, UserIcon } from "../../assets/svgs/icon";
import CreateScreen from "../screens/Create";
import HeathScreen from "../screens/Heath";
import HomeScreen from "../screens/Home";
import BidList from "../screens/Home/BidList";
import BidDetail from "../screens/Home/BidList/BidDetail";
import Statistic from "../screens/Statistic";
import UserScreen from "../screens/User";

const MainTab = createBottomTabNavigator();

export default function MainBottomTab() {
  return (
    <MainTab.Navigator screenOptions={combinedScreenOptions}>
      <MainTab.Screen name="Home" component={BidStackScreen} />
      <MainTab.Screen name="Statistic" component={Statistic} />
      <MainTab.Screen name="Create" component={CreateScreen} />
      <MainTab.Screen name="Heath" component={HeathScreen} />
      <MainTab.Screen name="User" component={UserScreen} />
    </MainTab.Navigator>
  );
}

const BidStack = createStackNavigator();
function BidStackScreen() {
  return (
    <BidStack.Navigator screenOptions={screenOptionsStack}>
      <BidStack.Screen name="Dashboard" component={HomeScreen} />
      <BidStack.Screen name="BidList" component={BidList} />
      <BidStack.Screen name="BidDetail" component={BidDetail} />
    </BidStack.Navigator>
  );
}

const screenOptions = ({ route }: { route: any }) => {
  let iconTab: any;

  return {
    tabBarIcon: ({ focused }: { focused: boolean }) => {
      if (route.name === "Home") {
        iconTab = <HomeIcon color={focused && "#8FFF00"} />;
      } else if (route.name === "User") {
        iconTab = <UserIcon color={focused && "#8FFF00"} />;
      } else if (route.name === "Heath") {
        iconTab = <HeathIcon color={focused && "#8FFF00"} />;
      } else if (route.name === "Statistic") {
        iconTab = <StatisticIcon color={focused && "#8FFF00"} />;
      } else if (route.name === "Create") {
        iconTab = <PlusMenuIcon />;
      } else {
        return null;
      }

      return (
        <View>
          {focused && (
            <LinearGradient
              colors={["transparent", "#8FFF00", "transparent"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.iconActive, { display: route.name === "Create" ? "none" : "flex" }]}
            />
          )}

          <View
            style={[
              styles.icon,
              { transform: [{ translateY: route.name === "Create" ? -35 : 0 }] },
            ]}
          >
            {iconTab}
          </View>
        </View>
      );
    },
  };
};

const combinedScreenOptions = ({ route }: { route: any }) => {
  return {
    ...screenOptions({ route }),
    tabBarButton: ["Intro"].includes(route.name) ? () => null : undefined,
    headerShown: false,
    tabBarShowLabel: false,
    showIcon: true,
    tabBarStyle: styles.navigation,
  };
};

const screenOptionsStack = {
  headerTransparent: true,
  headerTitle: () => null,
  headerBackTitleVisible: false,
  headerShown: false,
};

const styles = StyleSheet.create({
  navigation: {
    height: 85,
    paddingTop: 20,
    backgroundColor: "#000000",
    borderTopWidth: 3.5,
    borderTopColor: "#222222",
  },
  icon: {
    position: "relative",
  },
  iconActive: {
    width: 75,
    height: 3.5,
    position: "absolute",
    top: -26,
    left: -26,
  },
});
