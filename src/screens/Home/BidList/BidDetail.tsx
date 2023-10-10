import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {
  ArrowLeftIcon2,
  HeathOutlineIcon,
  OptionDotVerticalIcon,
  ShareOutlineIcon,
} from "../../../../assets/svgs/icon";

export default function BidDetail() {
  const { width, height } = useWindowDimensions();
  const router = useRoute();
  const navigate = useNavigation();
  const { nft } = router.params as any;

  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <LinearGradient
        colors={["#8FFF00", "transparent", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          width: width,
          height: height,
          paddingHorizontal: 24,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 24,
              paddingTop: 24,
            }}
          >
            <TouchableOpacity onPress={() => navigate.goBack()}>
              <View style={{}}>
                <ArrowLeftIcon2 />
              </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Avenir Tree</Text>
            <View>
              <OptionDotVerticalIcon />
            </View>
          </View>
          <View style={{ paddingHorizontal: 24, marginTop: 40 }}>
            <Image source={nft.image} style={{ width: "100%", height: 250, borderRadius: 16 }} />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor: "#8FFF00",
                }}
              >
                <Text>3h 12m 36s Left</Text>
              </View>
              <View style={styles.icons}>
                <View style={styles.icon}>
                  <HeathOutlineIcon />
                </View>
                <View style={styles.icon}>
                  <ShareOutlineIcon />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    paddingBottom: 138,
    position: "relative",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#96F122",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
