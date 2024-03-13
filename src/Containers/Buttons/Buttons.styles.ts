import { StyleSheet } from "react-native";
import Colors from "../../stylesheets/Colors";

export const primaryStyles = StyleSheet.create({
    optionButton: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: '90%'
    },
    optionButtonText: {
        textAlign: 'center'
    }
})

export const secondaryStyles = StyleSheet.create({
    optionButton: {
        alignSelf: 'center',
        borderRadius: 5,
        paddingVertical: 5,
        marginHorizontal: 4,
    },
    optionButtonText: {
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 15,
        textAlign: 'center',
        fontWeight: '500'
    }
})

export const loginSignupStyles = StyleSheet.create({
    conteiner: {
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        

    },
    textButton: {
        flex:1,
        textAlign: 'center',
        fontWeight: '500'
    }
})

export default primaryStyles