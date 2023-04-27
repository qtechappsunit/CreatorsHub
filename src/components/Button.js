import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Arrow from 'react-native-vector-icons/Ionicons';


const Button = ({ linearButton, buttonText, buttonStyle, textStyle, onPress, arrowIcon }) => {
    return (
        <View>
            {linearButton ?
                <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={0.9}
                    style={[styles.buttonContainer, buttonStyle]}
                >
                    < Text
                        style={
                            [{
                                color: colors.white,
                                fontSize: heightPercentageToDP('2.5%')
                            }, textStyle]}
                    > {buttonText}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={0.9}>
                    <LinearGradient
                        colors={['#101223', 'transparent']}
                        start={{ x: 0, y: 1.2 }} end={{ x: 0, y: 0 }}
                        style={[styles.buttonContainer, buttonStyle]}
                    >

                        {arrowIcon ?
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}
                            >
                                <Arrow
                                    name={'arrow-up-sharp'}
                                    color={colors.white}
                                    size={22}
                                    style={{ marginRight: heightPercentageToDP('1%'), alignSelf: 'center', top: 2 }}
                                />
                                <Text
                                    style={[{
                                        color: colors.white,
                                        fontSize: heightPercentageToDP('2.5%')
                                    },]}
                                >{buttonText}</Text>
                            </View>
                            :
                            <Text
                                style={[{
                                    color: colors.white,
                                    fontSize: heightPercentageToDP('2.5%')
                                },]}
                            >{buttonText}</Text>
                        }
                    </LinearGradient>
                </TouchableOpacity>
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