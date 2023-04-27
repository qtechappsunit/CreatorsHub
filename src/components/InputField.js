import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const InputField = ({ placeholder, inputStyle, secureTextEntry, keyboardType, textColor, value,onChange }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={textColor}
            value={value}
            onChangeText={onChange}
            style={[styles.input, inputStyle]}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
        />
    )
}

export default InputField;

const styles = StyleSheet.create({
    input: {
        padding: heightPercentageToDP('1.9%'),
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 40,
        width: heightPercentageToDP('41%'),
        textAlign: 'center',
        fontSize: heightPercentageToDP('2.5%'),
        color: colors.white,
        marginBottom: heightPercentageToDP('4%')
    }
})