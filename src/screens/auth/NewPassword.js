import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../assets/images';
import AuthHeader from '../../components/AuthHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import AuthInput from '../../components/AuthInput';
import Button from '../../components/Button';

const NewPassword = () => {
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
                        paddingTop: heightPercentageToDP('3%'),
                        padding: heightPercentageToDP('2%')
                    }}
                >
                    <Text
                        style={{
                            color: colors.white,
                            fontSize: heightPercentageToDP('3.2%'),
                            fontFamily: fonts.Medium
                        }}
                    >Reset Password</Text>
                    <Text
                        style={{
                            color: colors.white,
                            fontSize: heightPercentageToDP('2%'),
                            width: heightPercentageToDP('40%'),
                            marginTop: 4
                        }}
                    >
                        Enter the email address you used when you joined and we’ll send you instructions to reset your password.
                    </Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('3%')
                        }}
                    >
                        <AuthInput
                            placeholder={'Enter your email...'}
                            keyboardType={'email-address'}
                            email
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: 1,
                        marginBottom: heightPercentageToDP('6%'),
                    }}
                    onPress={() => alert('work in progress')}
                    activeOpacity={0.9}
                >
                    <Text style={{ color: '#9CA3AF', fontSize: heightPercentageToDP('2%') }}>You remember your password <Text style={{
                        color: colors.primary
                    }}> Login</Text></Text>
                    <Button
                        buttonText={'Request password reset'}
                        buttonStyle={{ marginTop: heightPercentageToDP('3%') }}
                    />
                </TouchableOpacity>
            </LinearGradient>
        </ImageBackground>
    )
}

export default NewPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})