import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const AuthHeader = () => {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('6%')
                }}
                onPress={() => navigation.navigate('Signin')}
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
                    width: '92%',
                    alignSelf: 'center',
                }}></View>
        </View>
    )
}

export default AuthHeader;