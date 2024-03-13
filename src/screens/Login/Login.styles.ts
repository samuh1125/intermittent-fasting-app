import { StyleSheet } from "react-native";
import Colors from "../../stylesheets/Colors";
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

export const styleLogin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        flexDirection: 'column',
        alignItems: 'stretch',
        marginTop: StatusBarHeight,
    },
    containerTitle: {
        marginTop: 80,
        marginHorizontal: 30
    },
    textTitle: {
        fontSize: 40,
        fontWeight: '800',
    },
    textSubTitle: {
        height: 40,
        color: Colors.primary,
    },
    inputContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    loginInputs: {
        height: 48,
        width: '90%',
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
    },
    textInputs: {
        marginTop: 30,
        width: '90%',
        color: Colors.primary,
        paddingHorizontal: 20,
        margin: 10,
    },
})

export default styleLogin

