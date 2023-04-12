import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import fonts from '../assets/fonts';

const OptionCircle = ({ text, style, textStyle, selected, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.optionView, style, selected && { backgroundColor: colors.primary }]}
            onPress={onPress}
        >

            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

const SwitchOptions = ({ heading, text1, text2, text3, text4, viewStyle, selectedValue, onOptionPress }) => {

    const selectOption = (value) => {
        onOptionPress(value)
    }
    return (
        <View
            style={{
                alignItems: 'center',
                marginBottom: heightPercentageToDP('3%')
            }}
        >
            <Text
                style={{
                    color: colors.black,
                    fontSize: heightPercentageToDP('2.5%')
                }}
            >{heading}</Text>
            <View
                style={{
                    paddingTop: heightPercentageToDP('3%')
                }}
            >
                <View style={[styles.switchView, viewStyle]}>
                    {text1 &&
                        <OptionCircle
                            text={text1}
                            // style={selected && { backgroundColor: colors.primary }}
                            onPress={() => selectOption(text1)}
                            selected={selectedValue == text1}
                        />
                    }
                    <OptionCircle
                        text={text2}
                        // style={selected && { backgroundColor: colors.primary }}
                        onPress={() => selectOption(text2)}
                        selected={selectedValue == text2}
                    />
                    <OptionCircle
                        text={text3}
                        // style={selected && { backgroundColor: colors.primary }}
                        onPress={() => selectOption(text3)}
                        selected={selectedValue == text3}
                    />
                    <OptionCircle
                        text={text4}
                        textStyle={{ fontSize: heightPercentageToDP('1.8%'), fontFamily: fonts.Medium }}
                        style={[styles.optionStyle]}
                        onPress={() => selectOption(text4)}
                        selected={selectedValue == text4}
                    />
                </View>
            </View>
        </View>
    )
}

export default SwitchOptions;

const styles = StyleSheet.create({
    switchView: {
        padding: heightPercentageToDP('0.8%'),
        backgroundColor: '#E2E2E2',
        width: heightPercentageToDP('42%'),
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optionView: {
        padding: heightPercentageToDP('3%'),
        width: heightPercentageToDP('3%'),
        borderRadius: 100,
        backgroundColor: '#9795E6',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: heightPercentageToDP('3%'),
        position: 'absolute',
        fontFamily: fonts.Medium,
    },
    optionStyle: {
        padding: heightPercentageToDP('2.5%'),
        width: heightPercentageToDP('15%'),
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})