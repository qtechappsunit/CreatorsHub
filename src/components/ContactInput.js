import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const ContactInput = ({placeholder,style, keyboardType}) => {
    return (
        <View style={[styles.inputContainer,style]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#BDBDBD'}
                style={styles.input}
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
        width: heightPercentageToDP('18%')
    },
    input: {
        fontSize: heightPercentageToDP('2%')
    }
})