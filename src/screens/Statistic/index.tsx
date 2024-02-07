import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { LeftArrowWhiteIcon } from "../../../assets/svgs/login";
import RNPickerSelect from "react-native-picker-select";

const RankingsRoute = () => <View style={{ flex: 1, backgroundColor: "#000000" }} />;

const ActivityRoute = () => <View style={{ flex: 1, backgroundColor: "#000000" }} />;

const renderScene = SceneMap({
  rankings: RankingsRoute,
  activity: ActivityRoute,
});

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Statistic() {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "rankings", title: "Rankings" },
    { key: "activity", title: "Activity" },
  ]);

  const renderTabBar = (props) => {
    return (
      <View>
        <TabBar
          {...props}
          renderLabel={({ route, color, focused }) => (
            <Text style={{ color: "#8FFF00", opacity: focused ? 1 : 0.5 }}>{route.title}</Text>
          )}
          style={{ backgroundColor: "#000" }}
          indicatorStyle={{ backgroundColor: "#8FFF00" }}
        />
        <View style={{ flex: 0, flexDirection: "row", gap: 10, marginTop: 20 }}>
          <RNPickerSelect
            placeholder={{
              label: "All categories",
              value: null,
              color: "#FFF",
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Football", value: "football" },
              { label: "Baseball", value: "baseball" },
              { label: "Hockey", value: "hockey" },
            ]}
            style={pickerSelectStyles}
          />
          <RNPickerSelect
            placeholder={{
              label: "All chains",
              value: null,
              color: "#FFF",
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Football", value: "football" },
              { label: "Baseball", value: "baseball" },
              { label: "Hockey", value: "hockey" },
            ]}
            style={pickerSelectStyles}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <SafeAreaView
        style={{
          marginTop: Platform.OS === "android" ? 20 : 0,
        }}
      >
        <View style={{}}>
          <View style={[styles.title, { width: width - 48 }]}>
            <TouchableOpacity
              style={{ position: "absolute", left: 0 }}
              onPress={() => navigation.goBack()}
            >
              <LeftArrowWhiteIcon />
            </TouchableOpacity>
            <Text style={styles.textTitle}>Statistics</Text>
          </View>
          <View style={{ width: width - 48, height }}>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width }}
              renderTabBar={renderTabBar}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Statistic;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 24,
    backgroundColor: "#000000",
    paddingBottom: 150,
  },
  title: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 30 },
  textTitle: { fontSize: 18, fontWeight: "700", color: "#FFFFFF" },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: (windowWidth - 58) / 2,
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#8FFF00",
    borderRadius: 12,
    color: "#FFF",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: (windowWidth - 58) / 2,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});
