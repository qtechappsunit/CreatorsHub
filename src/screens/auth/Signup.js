import React from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import images from '../../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import colors from '../../assets/colors';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const Signup = () => {
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
                    <InputField
                        placeholder={'Full Name'}
                    />
                    <InputField
                        placeholder={'Email Address'}
                        keyboardType={'email-address'}
                    />
                    <InputField
                        placeholder={'Phone Number'}
                        keyboardType={'numeric'}
                    />
                    <InputField
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                    <Button
                        buttonText={'Sign up'}
                        buttonStyle={{
                            marginTop: heightPercentageToDP('1%')
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => alert('work in progress')}
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
    }
})