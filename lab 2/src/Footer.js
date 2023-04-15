import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return(
        <View style={styles.container}>
            <Text>Лещишина Вікторія ІПЗ-19-2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 25,
        backgroundColor: '#dddddd',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});