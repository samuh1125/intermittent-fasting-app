import { StyleSheet } from "react-native";

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

export default primaryStyles