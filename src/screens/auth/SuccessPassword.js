import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import images from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import Button from '../../components/Button';

const SuccessPassword = () => {
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
                <View
                    style={{
                        justifyContent: 'center',
                        flex: 1,
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={images.success}
                        style={styles.image}
                    />
                    <Text
                        style={{
                            color: '#BDBDBD',
                            width: heightPercentageToDP('35%'),
                            fontSize: heightPercentageToDP('2%'),
                            marginTop: heightPercentageToDP('2%'),
                            marginLeft: heightPercentageToDP('6%')
                        }}
                    >Your password has been changed successfully, we will let you know if there are more problems with your account</Text>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        marginBottom: heightPercentageToDP('6%')
                    }}
                >
                    <Button
                        buttonText={'Open email app'}
                    />
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

export default SuccessPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: heightPercentageToDP('36%'),
        width: heightPercentageToDP('44%')
    }
})