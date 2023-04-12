import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import fonts from '../assets/fonts';

const Header = ({ text }) => {
    return (
        <View
            style={{
                marginLeft: heightPercentageToDP('4%'),
                paddingTop: heightPercentageToDP('5%')
            }}
        >
            <Text
                style={styles.text}
            >{text}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    text: {
        fontSize: heightPercentageToDP('4%'),
        color: colors.black,
        fontFamily: fonts.Medium
    }
})