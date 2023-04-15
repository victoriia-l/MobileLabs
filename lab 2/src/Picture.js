import { StyleSheet, View, Image } from 'react-native';

export default function Picture(props) {
    const {item} = props;
    return(
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginRight: 5 }}>
                <Image style={{ height: 100, width: 100 }} source={item.images[1] ? {uri: item.images[1]} : require('./assets/no-results.png')} />
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginLeft: 5 }}>
                <Image style={{ height: 100, width: 100 }} source={item.images[2] ? {uri: item.images[2]} : require('./assets/no-results.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
    },
});