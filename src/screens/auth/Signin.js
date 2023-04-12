import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import images from '../../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import colors from '../../assets/colors';
import Button from '../../components/Button';
import InputField from '../../components/InputField';

const Signin = () => {
    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
        >
            <ImageBackground
                style={styles.container}
                source={images.signin}
            >
                <Text style={styles.text}>SIGN IN</Text>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('17%'),
                    }}
                >
                    <InputField
                        placeholder={'Username'}
                    />
                    <InputField
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
                    <Text style={{
                        color: colors.white,
                        textAlign: 'center',
                        fontSize: heightPercentageToDP('1.9%')
                    }}>Forgot Password</Text>
                </View>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('3%')
                    }}
                >
                    <Button
                        buttonText={'Sign in '}
                    />
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => alert('work in progress')}
                    >
                        <Text
                            style={{
                                color: colors.white,
                                textAlign: 'center',
                                marginTop: heightPercentageToDP('2%'),
                                fontSize: heightPercentageToDP('1.9%')
                            }}
                        >Not having an account? Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default Signin;

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
    }
})