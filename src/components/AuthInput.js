import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import colors from '../assets/colors';
import Email from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Lock from 'react-native-vector-icons/Feather';
import Eye from 'react-native-vector-icons/Entypo';

const AuthInput = ({ placeholder, secureTextEntry, keyboardType, label, inputStyle, email }) => {
    return (
        <View>
            {label &&
                <Text
                    style={{
                        color: '#9CA3AF',
                        fontSize: heightPercentageToDP('2.1%')
                    }}
                >{label}</Text>
            }
            <View style={[styles.input, inputStyle]}>
                {email &&
                    <Email
                        name={'email-outline'}
                        size={27}
                        color={'#9CA3AF'}
                        style={{ position: 'absolute', top: 10, left: 5 }}
                    />
                }
                {secureTextEntry &&
                    <>
                        <Lock
                            name={'lock'}
                            size={22}
                            color={'#9CA3AF'}
                            style={{ position: 'absolute', top: 15, left: 5 }}
                        />
                        <Eye
                            name={'eye-with-line'}
                            size={22}
                            color={'#9CA3AF'}
                            style={{ position: 'absolute', top: 16, right: heightPercentageToDP('4%') }}
                        />
                    </>
                }
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'#9CA3AF'}
                    style={{ color: colors.white, marginLeft: heightPercentageToDP('5%') }}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                />
            </View>
        </View>
    )
}

export default AuthInput;

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        flexDirection: 'row'
    }
})