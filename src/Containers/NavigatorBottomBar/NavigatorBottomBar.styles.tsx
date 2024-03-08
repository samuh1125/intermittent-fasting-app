import { StyleSheet } from "react-native";
import Colors from "../../stylesheets/Colors";

const NavigatorBottomBar = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    activeTextBottom: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: '500',
    },
    inActiveTextBottom: {
        color: Colors.gray,
        fontSize: 12,
        fontWeight: '500',
    },
    bottomView: {
        alignItems: 'center'
    }
})

export default NavigatorBottomBar