import { StyleSheet, View } from 'react-native';
import Item from '../Item';

export default function Items() {
    return(
        <View style={styles.container}>
            <Item />
            <Item />
            <Item />
            <Item />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});
