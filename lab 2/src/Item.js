import { StyleSheet, Text, View, Image } from 'react-native';

export default function Item(props) {
    const {item} = props;

    return(
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image style={{ height: 50, width: 50, marginLeft: 20, marginRight: 20 }} source={{uri: item.images[0]}} />
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{fontSize: 20}}>{item.title}</Text>
                    <Text style={{color: 'gray'}}>{item.brand}</Text>
                    <Text>{item.description}</Text>
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