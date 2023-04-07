import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <View style={styles.image}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.text}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Доброго дня</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  image: {
    flex: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
  },
  text: {
    flex: 10, 
    alignItems: "center", 
    justifyContent: "center"
  }
});
