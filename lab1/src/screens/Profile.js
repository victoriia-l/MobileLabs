import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Електронна пошта</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Пароль</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Повторіть пароль</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Ім'я</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Прізвище</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ alignItems: "stretch", marginTop: 20, width: 350 }}>
        <Button title="Зареєструватися" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
  },
  inputContainer: {
    alignItems: "stretch", 
    marginTop: 5
  }
});
