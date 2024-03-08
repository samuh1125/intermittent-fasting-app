import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screen/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon, { Icons } from "../../stylesheets/Icons";
import Styles from "../../stylesheets/Styles";
import Colors from "../../stylesheets/Colors";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import React, { useEffect, useRef } from 'react'
import stylesBottomBar from "./NavigatorBottomBar.styles";

const BottomTab = createBottomTabNavigator();

const TabArr = [
    { route: 'Home', label: 'Temporizador', type: Icons.MaterialCommunityIcons, icon: 'timer-outline', activeIcon: 'timer-outline', inActiveIcon: 'timer-outline', component: HomeScreen },
    { route: 'Programa', label: 'Programa', type: Icons.MaterialCommunityIcons, icon: 'timer-outline', activeIcon: 'timer-outline', inActiveIcon: 'timer-outline', component: HomeScreen },
    { route: 'Explorar', label: 'Explorar', type: Icons.MaterialCommunityIcons, icon: 'timer-outline', activeIcon: 'timer-outline', inActiveIcon: 'timer-outline', component: HomeScreen },
    { route: 'Perfil', label: 'Perfil', type: Icons.MaterialCommunityIcons, icon: 'timer-outline', activeIcon: 'timer-outline', inActiveIcon: 'timer-outline', component: HomeScreen },
];

export default function NavigatorBottomBar() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BottomTab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                        position: 'absolute',
                        margin: 10,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }}
            >
                {TabArr.map((item, index) => {
                    return (
                        <BottomTab.Screen key={index} name={item.route} component={item.component}
                            options={{
                                tabBarShowLabel: true,
                                tabBarButton: (props) => <TabButton {...props} item={item} />
                            }}
                        />
                    )
                })}
            </BottomTab.Navigator>
        </SafeAreaView>
    )
}


const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[stylesBottomBar.container, { top: 0 }]}>
            <Animatable.View
                style={stylesBottomBar.bottomView}
                ref={viewRef}
                duration={1000}            >
                <Icon type={item.type}
                    name={focused ? item.activeIcon : item.inActiveIcon}
                    color={focused ? Colors.primary : Colors.gray} />
                <Text style={focused ? stylesBottomBar.activeTextBottom : stylesBottomBar.inActiveTextBottom} >
                    {item.label}
                </Text >
            </Animatable.View>
        </TouchableOpacity>
    )
}


