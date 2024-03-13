import { Text, View } from 'react-native'
import React from 'react'
import GlobalStyles from '../../../stylesheets/Styles'
import localStyles from './AnimatedFastingClock.styles'


export default function AnimatedFastingClock(props) {
    const { time, percentage } = props

    return (
        <View style={GlobalStyles.card}>
            <View style={localStyles.textFeedingPeriod}>
                <Text>Periodo de alimentación</Text>
                <Text> ({percentage}) </Text>
            </View>

            <View>
                <Text style={localStyles.textHours}>{time}</Text>
            </View>
        </View>
    )
}