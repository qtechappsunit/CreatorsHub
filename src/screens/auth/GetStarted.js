import Reac, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import images from '../../assets/images';
import Button from '../../components/Button';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../assets/colors';

const GetStarted = () => {
    return (
        <ImageBackground
            source={images.start}
            style={styles.container}
        >
            <Image
                source={images.logo}
                style={styles.logoImage}
            />
            <View
                style={{
                    paddingTop: heightPercentageToDP('25%')
                }}
            >
                <Button
                    buttonText={'Sign in'}
                />
            </View>
            <View
                style={{
                    paddingTop: heightPercentageToDP('4%'),
                    marginBottom: heightPercentageToDP('10%')
                }}
            >
                <Button
                    buttonText={'Sign up'}
                    buttonStyle={styles.button}
                />
            </View>
        </ImageBackground>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: colors.white,
    },
    logoImage: {
        height: heightPercentageToDP('15%'),
        width: heightPercentageToDP('26%')
    },
})