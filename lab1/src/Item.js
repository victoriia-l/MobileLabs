import { StyleSheet, Text, View, Image } from 'react-native';

export default function Item() {
    return(
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image style={{ height: 50, width: 50, marginLeft: 20, marginRight: 20 }} source={require('./assets/no-results.png')} />
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{fontSize: 20}}>Title</Text>
                    <Text style={{color: 'gray'}}>Data</Text>
                    <Text>Description</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginTop: 5
    },
});