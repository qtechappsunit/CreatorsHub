import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import colors from '../assets/colors';

const DescribeInput = ({ placeholder, style }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#BDBDBD'}
                multiline
                textAlignVertical='top'
                style={[{
                    borderWidth: 1.8,
                    borderColor: '#686868',
                    height: 150,
                    borderRadius: 20,
                    padding: 20,
                    color: colors.black
                },style]}
            />
        </View>
    )
}

export default DescribeInput;

const styles = StyleSheet.create({

})