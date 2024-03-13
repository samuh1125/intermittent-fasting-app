import { StyleSheet } from "react-native";
import Colors from "../stylesheets/Colors";

const Styles = StyleSheet.create({
    textHeader: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    textDescriptionHeader: {
        marginTop: 5,
        color: Colors.primary,
        textAlign: 'center'
    },
    textWaterRegister: {
        marginTop: 20,
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: '500'
    }
})

export default Styles;