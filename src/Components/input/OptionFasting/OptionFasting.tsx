import { View } from "react-native-animatable";
import styles from "./OptionFasting.styles"
import { SecondaryButton } from "../../../Containers/Buttons/Buttons";



const OptionFasting = () => {
    return (
        <View style={styles.options}>
            <SecondaryButton onPress={() => alert('')} text="18:06" />
            <SecondaryButton onPress={() => alert('')} text="22:00 HORA DE INICIO" />
        </View>
    );
};

export default OptionFasting