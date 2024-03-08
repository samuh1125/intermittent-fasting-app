import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigatorBottomBar from '../Containers/NavigatorBottomBar/NavigatorBottomBar'

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <NavigatorBottomBar />
        </NavigationContainer>
    )
}

export default MainNavigator