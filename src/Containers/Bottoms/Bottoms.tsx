import { View, Text } from "react-native-animatable";
import { primaryStyles, secondaryStyles } from "./Bottoms.styles"
import { TouchableOpacity } from "react-native";
import Colors from "../../stylesheets/Colors";

export function PrimaryButton(props) {

    const { onPress, text } = props

    return (
        <TouchableOpacity
            style={{
                ...primaryStyles.optionButton,
                backgroundColor: Colors.primary,
                marginTop: 15
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    ...primaryStyles.optionButtonText,
                    color: '#f1f1f1',
                    fontWeight: 'bold',
                    fontSize: 20
                }}
            >
                {text}</Text>
        </TouchableOpacity>

    )
}

export function SecondaryButton(props) {
    const { onPress, text } = props
    return (
        <TouchableOpacity
            style={{
                ...secondaryStyles.optionButton,
                backgroundColor: '#e6ebef',
                marginTop: 15
            }}
            onPress={onPress}
        >
            <Text style={{ ...secondaryStyles.optionButtonText, color: Colors.gray }} >
                {text}
            </Text>
        </TouchableOpacity>

    )
}