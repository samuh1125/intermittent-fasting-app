import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import Colors from "../../../stylesheets/Colors";

const StatusBarHeight = Constants.statusBarHeight;

export const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },

    buttonLogin: {
        flex: 1,
        paddingHorizontal: 5,
        height: 50,
    },
    selectedIndicator: {
        height: 2,
        backgroundColor: Colors.primary,
    },
})

export default styles

