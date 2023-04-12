import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const CalendarSwitch = ({ text, style }) => {
    return (
        <View style={[styles.switchView, style]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default CalendarSwitch;

const styles = StyleSheet.create({
    switchView: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('1%'),
        width: heightPercentageToDP('18%'),
        borderRadius: 50,
        alignItems: 'center'
    },
    text: {
        fontSize: heightPercentageToDP('2.5%'),
        color: colors.white
    }
})