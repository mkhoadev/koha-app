import React from "react";
import { SafeAreaView, StyleSheet, View, useWindowDimensions } from "react-native";

function CreateScreen() {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width, height }]}>
      <SafeAreaView></SafeAreaView>
    </View>
  );
}

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000000",
  },
});
