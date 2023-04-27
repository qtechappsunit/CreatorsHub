import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import images from '../../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import colors from '../../assets/colors';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = () => {
    const [username, setUsername] = useState('')

    const navigation = useNavigation()

    const onSignin = async () => {


        if (!username) {
            alert('enter your username')
        } else if (username.toLowerCase() == 'creator') {

            await AsyncStorage.setItem('userType', 'creator')
            navigation.navigate('CreatorStack')
        } else if (username.toLowerCase() == 'customer') {
            await AsyncStorage.setItem('userType', 'customer')
            navigation.navigate('CustomerStack')
        } else {
            alert('invalid user')
        }

    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
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
                        value={username}
                        onChange={(text) => setUsername(text)}
                        textColor={colors.white}
                    />
                    <InputField
                        placeholder={'Password'}
                        secureTextEntry={true}
                        textColor={colors.white}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NewPassword')}
                    >
                        <Text style={{
                            color: colors.white,
                            textAlign: 'center',
                            fontSize: heightPercentageToDP('1.9%')
                        }}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('3%')
                    }}
                >
                    <Button
                        buttonText={'Sign in '}
                        onPress={() => onSignin()}
                    />
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('Signup')}
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