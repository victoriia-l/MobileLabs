import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Item from "../Item";

export default function Items() {
  const dataURL = "https://dummyjson.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(dataURL)
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.products))
      .catch((error) => {
        console.error(error);
      });
  }, [dataURL]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
