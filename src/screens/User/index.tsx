import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SettingWhiteIcon } from "../../../assets/svgs/icon";

function UserScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width, height }]}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../../../assets/images/background-profile.png")}
        resizeMode="cover"
        style={[styles.bannerImage, { width }]}
      />
      <SafeAreaView>
        <View style={[styles.headerTop, { width }]}>
          <Text style={styles.textHeader}>Profile</Text>
          <TouchableOpacity>
            <SettingWhiteIcon />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  bannerImage: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
