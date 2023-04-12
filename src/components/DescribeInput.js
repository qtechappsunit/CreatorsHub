import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const DescribeInput = ({ placeholder }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                multiline
                textAlignVertical='top'
                style={{
                    borderWidth: 1.8,
                    borderColor: '#686868',
                    height: 150,
                    borderRadius: 20,
                    padding: 20,
                }}
            />
        </View>
    )
}

export default DescribeInput;

const styles = StyleSheet.create({

})