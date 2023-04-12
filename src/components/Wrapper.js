import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const Wrapper = ({ style,children }) => {
    return (
        <ImageBackground
            source={images.background}
            style={styles.container}
        >
            {children}
        </ImageBackground>
    )
}

export default Wrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})