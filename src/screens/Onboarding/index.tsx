import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { ArrowLefIcon, ArrowRightIcon } from "../../../assets/svgs/onboarding";
import { slides } from "./slides";

function OnboardingScreen() {
  const { width, height } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollNext = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const scrollPrevious = () => {
    if (currentIndex > 0) {
      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <View style={{ width: width, height: height, backgroundColor: "#000000" }}>
      <Image
        source={require("../../../assets/images/onboarding/gradient.png")}
        resizeMode="contain"
        style={{ position: "absolute", top: 0, right: 0 }}
      />
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={{ fontSize: 14, fontWeight: "700" }}>Skip</Text>
            </View>
          </TouchableOpacity>
          <Paginator data={slides} scrollX={scrollX} />
        </View>

        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item: any) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

        <View style={styles.center}>
          {currentIndex === 3 ? (
            <TouchableOpacity>
              <View
                style={[
                  styles.buttonNavigation,
                  {
                    width: 200,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 10,
                  },
                ]}
              >
                <Text style={{ fontSize: 18, fontWeight: "700" }}>Let’s Get Started</Text>
                <ArrowRightIcon />
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonNavigation}>
              <TouchableOpacity style={{ padding: 20 }} onPress={scrollPrevious}>
                <ArrowLefIcon />
              </TouchableOpacity>
              <View style={styles.center}>
                <Text>|</Text>
              </View>
              <TouchableOpacity style={{ padding: 20 }} onPress={scrollNext}>
                <ArrowRightIcon />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

export default OnboardingScreen;

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width }}>
      <View style={[styles.bannerOnboard, { width: width }]}>
        <LinearGradient
          colors={["#8FFF00", "#599F00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: 250, height: 350, padding: 8, borderRadius: 32 }}
        >
          <Image source={item?.image} style={{ width: "100%", height: "100%", borderRadius: 28 }} />
        </LinearGradient>
      </View>
      <Text
        style={{
          paddingHorizontal: 20,
          textAlign: "center",
          fontSize: 40,
          fontWeight: "700",
          color: "#FFF",
          marginTop: 20,
        }}
      >
        {item?.title}
      </Text>
      <Text
        style={{
          paddingHorizontal: 20,
          textAlign: "center",
          fontSize: 14,
          fontWeight: "400",
          color: "#FFF",
          marginTop: 10,
        }}
      >
        {item?.description}
      </Text>
    </View>
  );
};

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[{ flexDirection: "row", gap: 5 }]}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 24, 12],
          extrapolate: "clamp",
        });
        const colorWidth = scrollX.interpolate({
          inputRange,
          outputRange: ["#96F122B2", "#8FFF00", "#96F122B2"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, backgroundColor: colorWidth }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  dot: { width: 12, height: 4, borderRadius: 4, backgroundColor: "#96F122B2" },
  bannerOnboard: { flexDirection: "row", justifyContent: "center", marginTop: 43 },
  buttonNavigation: {
    width: 150,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#8FFF00",
    marginTop: 27,
    marginHorizontal: "auto",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#8FFF00B2",
    borderRadius: 90,
  },
});
