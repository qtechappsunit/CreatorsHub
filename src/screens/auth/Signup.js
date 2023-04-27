import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import images from '../../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import colors from '../../assets/colors';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const stackOptions = [
    {
        id: 1,
        text: 'Customer'
    },
    {
        id: 2,
        text: 'Creator'
    }
]

const Signup = () => {
    const [stackButton, setStackButton] = useState(1)

    const navigation = useNavigation()

    const onOptionPress = (id) => {
        setStackButton(id)
    }

    const onSignUp = async () => {
        if (stackButton == '1') {
            await AsyncStorage.setItem('userType', 'customer')
            navigation.navigate('CustomerStack')
        } else {
            await AsyncStorage.setItem('userType', 'creator')
            navigation.navigate('CreatorStack')
        }
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <ImageBackground
                source={images.signup}
                style={styles.container}
            >
                <Text style={styles.text}>SIGN UP</Text>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('6%')
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        {stackOptions.map((item) => (
                            <TouchableOpacity style={[styles.option, { backgroundColor: stackButton == item.id ? colors.primary : 'rgba(255,255,255,0.2)' }]}
                                onPress={() => onOptionPress(item.id)}
                                key={item.id}
                            >
                                <Text
                                    key={item.id}
                                    style={styles.optionText}>{item.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <InputField
                        placeholder={'Full Name'}
                        textColor={colors.white}
                    />
                    <InputField
                        placeholder={'Email Address'}
                        keyboardType={'email-address'}
                        textColor={colors.white}
                    />
                    <InputField
                        placeholder={'Phone Number'}
                        keyboardType={'numeric'}
                        textColor={colors.white}
                    />
                    <InputField
                        placeholder={'Password'}
                        secureTextEntry={true}
                        textColor={colors.white}
                    />
                    <Button
                        buttonText={'Sign up'}
                        onPress={() => onSignUp()}
                        buttonStyle={{
                            marginTop: heightPercentageToDP('1%')
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signin')}
                        activeOpacity={0.9}
                    >
                        <Text
                            style={{
                                fontSize: heightPercentageToDP('1.9%'),
                                color: colors.white,
                                textAlign: 'center',
                                marginTop: heightPercentageToDP('2.2%')
                            }}
                        >Already have an account? Sign in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingVertical: heightPercentageToDP('5%')
    },
    text: {
        fontSize: heightPercentageToDP('4%'),
        fontFamily: fonts.Medium,
        color: colors.white,
        // marginTop: heightPercentageToDP('5%')
    },
    option: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('1.5%'),
        marginBottom: heightPercentageToDP('4%'),
        width: heightPercentageToDP('13%'),
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center'
    },
    optionText: {
        color: colors.white,
        fontSize: heightPercentageToDP('2%')
    }
})