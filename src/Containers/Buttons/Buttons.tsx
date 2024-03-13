import { View, Text } from "react-native-animatable";
import { TouchableOpacity } from "react-native";
import Colors from "../../stylesheets/Colors";
import { primaryStyles, secondaryStyles, loginSignupStyles } from "./Buttons.styles";

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

export function LoginSignupButton(props) {
    const { onPress, text, colorText } = props
    return (
        <TouchableOpacity
            style={{
                ...loginSignupStyles.conteiner,
            }}
            onPress={onPress}
        >
            <Text style={{ ...loginSignupStyles.textButton, color: colorText }} >
                {text}
            </Text>
        </TouchableOpacity>

    )
}