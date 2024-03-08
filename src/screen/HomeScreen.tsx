import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OptionFasting from '../Components/input/OptionFasting/OptionFasting'
import stylesText from './HomeScreen.styles'
import { PrimaryButton } from '../Containers/Bottoms/Bottoms'
import AnimatedFastingClock from '../Components/Display/AnimatedFastingClock/AnimatedFastingClock'
import WaterConsumption from '../Components/Display/WaterConsumption/WaterConsumption'


const HomeScreen = () => {

    return (
        <View>
            <Text style={stylesText.textHeader}> ¿Estás listo para ayunar? </Text>
            <Text style={stylesText.textDescriptionHeader}> 1,222 personas están ayunando con SunsTag </Text>
            <OptionFasting />
            <AnimatedFastingClock time="20:00:02" percentage="80%" />
            <PrimaryButton onPress={() => alert('')} text="Empieza tu ayuno" /> 
            <Text style={stylesText.textWaterRegister}>Registro de Agua</Text> 
            <WaterConsumption />
        </View>
    )

}

export default HomeScreen

const styles = StyleSheet.create({})