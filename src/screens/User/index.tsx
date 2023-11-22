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
import { useNavigation } from "@react-navigation/native";

function UserScreen() {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
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
        <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.button}>
              <Text style={styles.textButton}>Login/Register</Text>
            </View>
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
  button: {
    width: 150,
    height: 45,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 16,
    backgroundColor: "#8FFF00",
  },
  textButton: {
    fontSize: 14,
    fontWeight: "700",
  },
});
