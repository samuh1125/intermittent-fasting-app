import { View } from 'react-native'
import styles from './LoginButtons.style'
import { LoginSignupButton } from '../../../Containers/Buttons/Buttons';
import Colors from '../../../stylesheets/Colors';


export function LoginButtons(props) {

    const { selectedButton, setSelectedButton } = props;
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.buttonLogin}>
                <LoginSignupButton onPress={() => setSelectedButton('login')} text="Login" colorText={selectedButton === 'login' ? Colors.primary : Colors.black} />
                {selectedButton === 'login' && <View style={styles.selectedIndicator} />}
            </View>
            <View style={styles.buttonLogin}>
                <LoginSignupButton onPress={() => setSelectedButton('signup')} text="Sign up" colorText={selectedButton === 'signup' ? Colors.primary : Colors.black} />
                {selectedButton === 'signup' && <View style={styles.selectedIndicator} />}
            </View>
        </View>
    )
}