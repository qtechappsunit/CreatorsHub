import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import images from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import AuthHeader from '../../components/AuthHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import AuthInput from '../../components/AuthInput';
import Button from '../../components/Button';

const option = [
    {
        id: 1,
        text: 'Reset your password'
    },
    {
        id: 2,
        text: 'Sign in to a different account'
    }
]

const RequestPassword = () => {

    onOptionPress = (ID) => {
        if (ID == '1') {
            alert('working in progress')
        }
        else if (ID == '2') {
            alert('working in progress')
        }
    }

    return (
        <ImageBackground
            source={images.creator1}
            style={styles.container}
        >
            <LinearGradient
                colors={['#000', 'transparent']}
                start={{ x: 0, y: 0.7 }} end={{ x: 0, y: 0 }}
                style={{
                    flex: 1,
                }}
            >
                <AuthHeader />
                <View
                    style={{
                        paddingTop: heightPercentageToDP('2%'),
                        padding: heightPercentageToDP('2%')
                    }}
                >
                    <Text
                        style={{
                            color: colors.white,
                            fontSize: heightPercentageToDP('3.2%'),
                            fontFamily: fonts.Medium
                        }}
                    >Enter Your Password</Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('3%'),
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={styles.imageBorder}
                        >
                            <Image
                                source={images.user}
                                style={styles.userImage}
                            />
                        </View>
                        <View
                            style={{
                                marginLeft: heightPercentageToDP('3%')
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.white,
                                    fontSize: heightPercentageToDP('2.3%'),
                                    marginTop: heightPercentageToDP('1.2%')
                                }}
                            >
                                Jason@yourmail.com</Text>
                            <Text
                                style={{
                                    color: colors.white,
                                    marginTop: heightPercentageToDP('0.7%')
                                }}
                            >
                                Personal Account</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('4%'),
                        }}
                    ><View
                        style={{
                            marginBottom: heightPercentageToDP('4%')
                        }}
                    >
                            <AuthInput
                                label={'Create new password'}
                                placeholder={'Enter your new password'}
                                inputStyle={{ marginTop: heightPercentageToDP('4%') }}
                                secureTextEntry={true}
                            />
                        </View>
                        <AuthInput
                            label={'Password must be at least 8 characters'}
                            placeholder={'Re-type your  password'}
                            inputStyle={{ marginTop: heightPercentageToDP('4.5%') }}
                            secureTextEntry={true}
                        />
                        <Text
                            style={{
                                color: '#9CA3AF',
                                marginTop: heightPercentageToDP('3%')
                            }}
                        >Both password must match</Text>
                        <View
                            style={{
                                paddingTop: heightPercentageToDP('4%'),
                                padding: heightPercentageToDP('2%'),
                            }}
                        >
                            {option.map((item) => (
                                <TouchableOpacity
                                    style={{
                                        marginBottom: heightPercentageToDP('2%')
                                    }}
                                    onPress={() => onOptionPress(item.id)}
                                >
                                    <Text
                                        style={{
                                            color: colors.white,
                                            fontSize: heightPercentageToDP('2%')
                                        }}
                                    >{item.text}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: 1,
                        marginBottom: heightPercentageToDP('5%')
                    }}
                >
                    <Button
                        buttonText={'Reset password'}
                    />
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

export default RequestPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userImage: {
        height: heightPercentageToDP('8%'),
        width: heightPercentageToDP('8%'),
        borderWidth: 7,
        borderColor: colors.white,
        borderRadius: 100

    },
    imageBorder: {
        padding: heightPercentageToDP('0.3%'),
        backgroundColor: colors.primary,
        borderRadius: 100,
    }
})