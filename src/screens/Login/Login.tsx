import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styleLogin from './Login.styles'
import { create } from 'zustand'
import { LoginSignupButton } from '../../Containers/Buttons/Buttons'
import IconVector from 'react-native-vector-icons/FontAwesome'
import Colors from '../../stylesheets/Colors'
import { LoginButtons } from '../../Components/input/LoginButtons/LoginButtons'

const useStore = create((set) => ({
    selectedButton: 'login',
    setSelectedButton: (button) => set({ selectedButton: button }),
}));

const Login = () => {
    const { selectedButton, setSelectedButton } = useStore();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styleLogin.container}>
            <View style={styleLogin.containerTitle}>
                <Text style={styleLogin.textTitle}>Welcome Back</Text>
                <Text style={styleLogin.textSubTitle}>Login to access your account</Text>
            </View>
            <LoginButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />

            <Text style={styleLogin.textInputs} > Email </Text>

            <View style={styleLogin.inputContainer}>
                <TextInput placeholder='jhon@yourmail.com' style={styleLogin.loginInputs} />
            </View>

            <Text style={styleLogin.textInputs}> Password </Text>

            <View style={styleLogin.inputContainer}>
                <TextInput
                    placeholder='your password'
                    secureTextEntry={showPassword ? true : false}
                    style={styleLogin.loginInputs}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginTop: -35, marginEnd: -265 }}>
                    <IconVector name={showPassword ? 'eye' : 'eye-slash'} size={20} color={Colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login