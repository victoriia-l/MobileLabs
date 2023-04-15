import { StyleSheet, View, ScrollView } from "react-native";
import Picture from "../Picture";
import { useState, useEffect } from "react";

export default function Gallery() {
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
    <View style={styles.container}>
      <ScrollView>
        {data.map((item) => (
          <Picture key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
