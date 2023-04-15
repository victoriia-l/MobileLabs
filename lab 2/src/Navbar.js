import { StyleSheet, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Navbar() {
  const navigation = useNavigation();
  const [items, setMain] = useState(true);
  const [gallery, setGallery] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleMain = () => {
    setMain(true);
    setGallery(false);
    setProfile(false);
    navigation.navigate("Головна");
  };

  const handleGallery = () => {
    setMain(false);
    setGallery(true);
    setProfile(false);
    navigation.navigate("Галерея");
  };

  const handleProfile = () => {
    setMain(false);
    setGallery(false);
    setProfile(true);
    navigation.navigate("Профіль");
  };

  return (
    <View style={styles.container}>
      <View style={styles.customButton}>
        <Image style={styles.image} source={require("./assets/main.png")} />
        <Button
          title="Головна"
          onPress={handleMain}
          nam
          disabled={items}
          color="#e6b400"
        ></Button>
      </View>
      <View style={styles.customButton}>
        <Image style={styles.image} source={require("./assets/gallery.png")} />
        <Button
          title="Галерея"
          onPress={handleGallery}
          disabled={gallery}
          color="#e6b400"
        ></Button>
      </View>
      <View style={styles.customButton}>
        <Image style={styles.image} source={require("./assets/user.png")} />
        <Button
          title="Профіль"
          onPress={handleProfile}
          disabled={profile}
          color="#e6b400"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#dddddd",
    justifyContent: "space-between",
  },
  customButton: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 10,
  },
  image: {
    marginBottom: 3,
    width: 33,
    height: 33,
  },
});
