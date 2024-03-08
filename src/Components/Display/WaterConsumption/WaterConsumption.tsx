import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome6 } from '@expo/vector-icons';
import GlobalStyles from '../../../stylesheets/Styles';
import componentStyles from './WaterConsumption.styles';
import Colors from '../../../stylesheets/Colors';

const WaterConsumption = () => {
    const water = "0"
    return (
        <View style={[GlobalStyles.card, { flexDirection: 'row' }]}>
            <View>
                <View style={componentStyles.textMeta}>
                    <Text> Meta: </Text>
                    <Text> 3.1 L</Text>
                </View>
                <View>
                    <Text style={componentStyles.textWater} > {water} L </Text>
                </View>
                <View style={componentStyles.textMeta}>
                    <Text> 0% </Text>
                    <Text> completado </Text>
                </View>
            </View>

            <View>
                <View style={componentStyles.columnGh}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={componentStyles.itemColumnGh}>
                            <MaterialIcons name="remove-circle-outline" size={30} color={Colors.lightBlue} />
                        </View>
                    </TouchableOpacity>

                    <FontAwesome6 name="glass-water" size={60} color='grey' />

                    <TouchableOpacity onPress={() => { }}>
                        <View style={componentStyles.itemColumnGh}>
                            <Ionicons name="add-circle-outline" size={30} color={Colors.lightBlue} />

                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ textAlign: 'center', color: 'grey', fontWeight: 'bold' }}>250ml</Text>
                </View>
            </View>
        </View>
    );
};

export default WaterConsumption