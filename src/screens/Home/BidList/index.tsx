import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import {
  ArrowLeftIcon,
  EthIcon,
  HeathOutlineIcon,
  ShareOutlineIcon,
} from "../../../../assets/svgs/icon";
import { useNavigation } from "@react-navigation/native";
import { nfts } from "../data";

function BidList() {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <SafeAreaView>
        <View>
          <View style={styles.headerTitle}>
            <View style={styles.iconArrow}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon />
              </TouchableOpacity>
            </View>
            <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "700" }}>Live Biding</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.nftBid}>
              {nfts.map((nft: any, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("BidDetail", { nft: nft })}
                >
                  <Item data={nft} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default BidList;

const Item = ({ data }) => {
  const { image, name, owner, price } = data;
  return (
    <View style={styles.nftBidItem}>
      <Image
        source={image}
        style={{ width: "100%", height: 175, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
      />
      <View style={styles.icons}>
        <View style={styles.icon}>
          <HeathOutlineIcon />
        </View>
        <View style={styles.icon}>
          <ShareOutlineIcon />
        </View>
      </View>
      <View style={styles.nftInfo}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View>
            <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "500" }}>{owner}</Text>
            <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "700", lineHeight: 24 }}>
              {name}
            </Text>
          </View>
          <View>
            <Text style={{ color: "#8FFF00", fontSize: 14, fontWeight: "500", lineHeight: 24 }}>
              <EthIcon /> {price} ETH
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 24,
          }}
        >
          <View
            style={{
              backgroundColor: "#000000",
              borderWidth: 1,
              borderColor: "#8FFF00",
              padding: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: "#8FFF00" }}>3h 12m 36s Left</Text>
          </View>
          <View
            style={{
              backgroundColor: "#8FFF00",
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text>Place a bid</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: "#000000",
    paddingBottom: 138,
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  iconArrow: {
    position: "absolute",
    left: 0,
  },
  bidList: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  nftBid: { display: "flex", flexDirection: "column", gap: 20, marginTop: 20 },
  nftBidItem: { position: "relative" },
  nftInfo: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#8FFF00",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 20,
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
    position: "absolute",
    right: 16,
    top: 150,
  },
});
