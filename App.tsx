import MainNavigator from './src/Navigator/MainNavigator';
import Login from './src/screens/Login/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      {/* <MainNavigator /> */}
      <Login />
    </SafeAreaProvider>
  );
}

