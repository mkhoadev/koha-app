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
  BellOutlineIcon,
  CurrencyEthIcon,
  EthIcon,
  HeathOutlineIcon,
  SearchOutlineIcon,
  ShareOutlineIcon,
} from "../../../assets/svgs/icon";
import { nfts, users } from "./data";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={styles.currency}>
            <CurrencyEthIcon />
            <Text style={{ fontSize: 24, fontWeight: "700", color: "#FFFFFF" }}>1000 ETH</Text>
          </View>
          <View style={styles.icons}>
            <View style={styles.icon}>
              <SearchOutlineIcon />
            </View>
            <View style={styles.icon}>
              <BellOutlineIcon />
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerBid}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#8FFF00" }}>Live Biddings</Text>
            <TouchableOpacity onPress={() => navigation.navigate("BidList")}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: "#FFFFFF" }}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.slide}>
              {nfts.map((item) => (
                <Item key={item.id} data={item} />
              ))}
            </View>
          </ScrollView>
          <View style={styles.users}>
            {users.map((user) => (
              <User key={user.id} data={user} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;

const Item = ({ data }) => {
  const { id, name, image, owner, price } = data;
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={image} />
      <View style={styles.info}>
        <View>
          <Text style={{ color: "#929292", fontSize: 10, fontWeight: "500" }}>By {owner}</Text>
          <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "700", lineHeight: 20 }}>
            {name} #{id}
          </Text>
        </View>
        <View>
          <Text style={{ color: "#929292", fontSize: 10, fontWeight: "500" }}>Current Price</Text>
          <View style={styles.price}>
            <EthIcon />
            <Text style={{ color: "#8FFF00", fontSize: 12, fontWeight: "500", lineHeight: 20 }}>
              {price} ETH
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.action}>
        <View style={[styles.button, { paddingHorizontal: 14 }]}>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Place Bid</Text>
        </View>
        <View style={styles.button}>
          <HeathOutlineIcon />
        </View>
        <View style={styles.button}>
          <ShareOutlineIcon />
        </View>
      </View>
    </View>
  );
};

const User = ({ data }) => {
  const { name, follower } = data;
  return (
    <View style={styles.userItem}>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 12 }}
          source={require("../../../assets/images/user.png")}
        />
        <View>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700" }}>{name}</Text>
          <Text style={{ color: "#929292", fontSize: 14, fontWeight: "600", lineHeight: 20 }}>
            {follower}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ color: "#8FFF00", fontSize: 16, fontWeight: "700" }}>Follow</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 24,
    backgroundColor: "#000000",
    paddingBottom: 150,
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
    gap: 10,
  },
  currency: { display: "flex", flexDirection: "row", alignItems: "center", gap: 10 },
  headerBid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  slide: {
    display: "flex",
    flexDirection: "row",
  },
  item: {
    width: 200,
    height: 270,
    marginRight: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#8FFF00",
    borderRadius: 25,
    position: "relative",
  },
  image: {
    width: 198,
    height: 198,
    borderRadius: 25,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  price: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  button: {
    backgroundColor: "#96F122",
    padding: 10,
    borderRadius: 12,
  },
  action: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    position: "absolute",
    bottom: -20,
    left: 15,
    zIndex: 1,
  },
  users: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  userItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#96F122",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },
});
