import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={_styles.NQjALIdV}>
      <Pressable onPress={() => navigation.navigate("Untitled2")} style={_styles.wezIWKHU}><View style={_styles.fbyFUaMt}></View></Pressable></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  NQjALIdV: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  fbyFUaMt: {
    left: 70,
    top: 160,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  wezIWKHU: {
    position: "unset"
  }
});