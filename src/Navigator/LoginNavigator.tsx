import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Signup from '../screens/Login/Signup';

const Stack = createStackNavigator();
export const LoginNavigator = {    
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Login} />
                <Stack.Screen name="Register" component={Signup} />
            </Stack.Navigator>
        )
    }
}

export default LoginNavigator