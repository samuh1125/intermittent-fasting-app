import { StyleSheet } from 'react-native';
import Colors from '../../../stylesheets/Colors';

const styles = StyleSheet.create({
    textMeta: {
        flexDirection: 'row'
    },

    textAccumulated: {
        textAlign: 'left',
    },
    columnGh: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 40,
        justifyContent: 'center',
    },
    itemColumnGh: {
        padding: 10,
    },
    textWater: {
        color: Colors.lightBlue,
        fontSize: 18,
        fontWeight: '500'
    }
});

export default styles;