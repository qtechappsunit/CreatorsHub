import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({ linearButton, buttonText, buttonStyle,textStyle}) => {
    return (
        <View>
            {linearButton ?
            <TouchableOpacity
                onPress={() => alert('work in progress')}
                activeOpacity={0.9}
                style={[styles.buttonContainer,buttonStyle]}
            >
                < Text
                    style={
                        [{
                            color: colors.white,
                            fontSize: heightPercentageToDP('2.5%')
                        },textStyle]}
                > {buttonText}</Text >
            </TouchableOpacity>
           :             
          <LinearGradient
                colors={['#101223', 'transparent']}
                start={{ x: 0, y: 1.2 }} end={{ x: 0, y: 0 }}
                style={[styles.buttonContainer, buttonStyle]}
            >
                <TouchableOpacity
                    onPress={() => alert('work in progress')}
                    activeOpacity={0.9}
                >
                    <Text
                        style={[{
                            color: colors.white,
                            fontSize: heightPercentageToDP('2.5%')
                        },]}
                    >{buttonText}</Text>
                </TouchableOpacity>
            </LinearGradient>
        }    
        </View>

    )
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('1.9%'),
        alignItems: 'center',
        borderRadius: 40,
        width: heightPercentageToDP('41%'),
    }
})