import React, { useContext } from 'react';
import { StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import images from '../assets/images';
import { OptionContext } from '../routes/Context/Provider';

const Wrapper = ({ children }) => {
    const { navBar, setNavBar } = useContext(OptionContext)

    return (
        <TouchableWithoutFeedback
            onPress={() => setNavBar(false)}
        >
            <ImageBackground
                source={images.background}
                style={styles.container}
            >
                {children}
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

export default Wrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})