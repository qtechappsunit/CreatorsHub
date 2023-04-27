import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';

const ContactInput = ({placeholder,style, keyboardType}) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#BDBDBD'}
                style={[styles.inputContainer,style]}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export default ContactInput;

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomColor: '#686868',
        borderBottomWidth: 3,
        fontSize: heightPercentageToDP('2%'),
        color:colors.black
    },
})