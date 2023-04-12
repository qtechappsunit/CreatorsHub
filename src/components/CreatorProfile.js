import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import StarRating from 'react-native-star-rating-widget';
import Button from './Button';


const CreatorProfile = () => {


    let ratingStar = 5;



    return (
        <View>
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={images.photographer1}
                    style={styles.image}
                />
                <View
                    style={{
                        marginLeft: heightPercentageToDP('2%')
                    }}
                >
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('3%'),
                            color: colors.black,
                            fontFamily: fonts.Medium,
                        }}
                    >Crystal Philips</Text>
                    <Text
                        style={{
                            color: colors.black
                        }}
                    >Photographer Editor</Text>
                    <Text
                        style={{
                            marginTop: heightPercentageToDP('2%'),
                            fontSize: heightPercentageToDP('2.3%'),
                            color: colors.black
                        }}
                    >Rating</Text>
                    <View
                        style={{
                            marginLeft: -8,
                            paddingTop: heightPercentageToDP('1%'),
                            flexDirection: 'row'
                        }}
                    >
                        <StarRating
                            rating={ratingStar}
                            color={colors.primary}
                            starSize={13}
                        />
                        <Text
                            style={{
                                color: colors.primary,
                                marginLeft: heightPercentageToDP('1%'),
                                marginTop: -2
                            }}>3.8</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingTop: heightPercentageToDP('5%'),
                            marginLeft: heightPercentageToDP('-1%')
                        }}
                    >
                        <Button
                            buttonStyle={styles.button}
                            buttonText={'BOOK'}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CreatorProfile;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('15%'),
        width: heightPercentageToDP('15%'),
    },
    button: {
        padding: heightPercentageToDP('1%'),
        borderRadius: 10,
        width: heightPercentageToDP('15%')
    },
    text: {
        color: colors.white,
        fontSize: heightPercentageToDP('2%'),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    shootImage: {
        height: heightPercentageToDP('20%'),
        width: widthPercentageToDP('25%')
    }
})