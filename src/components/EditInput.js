import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../assets/colors';

const EditInput = ({ style,placeholder }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#BDBDBD'}
            style={[styles.inputContainer, style]}
        />
    )
}

export default EditInput;

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        // alignSelf: 'center',
        color:colors.black
    }
})