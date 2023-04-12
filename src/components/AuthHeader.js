import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../assets/fonts';

const AuthHeader = () => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('6%')
                }}
                onPress={() => alert('work in progress')}
            >
                <Text
                    style={{
                        color: colors.white,
                        fontFamily: fonts.Medium,
                        fontSize: heightPercentageToDP('2.7%')
                    }}
                >Cancel</Text>
            </TouchableOpacity>
            <View
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#707070',
                    paddingTop: heightPercentageToDP('1%'),
                    width: heightPercentageToDP('45%'),
                    alignSelf: 'center'
                }}></View>
        </View>
    )
}

export default AuthHeader;