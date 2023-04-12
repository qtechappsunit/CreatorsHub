import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Play from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors';
import Add from 'react-native-vector-icons/Ionicons';
import fonts from '../assets/fonts';

const CreatorsCard = ({ imageStyle, image, wrapperStyle,text,componentWrapper,textStyle,addStyle,iconStyle, add }) => {
    return (
        <View
            style={componentWrapper}
        >
            <Image
                source={image}
                style={[styles.image, imageStyle]}
            />
            <View
                style={[styles.wrapper, wrapperStyle]}
            >  
                <View style={styles.View}>
                    <Play
                        name={'controller-play'}
                        size={40}
                        color={colors.white}
                        style={{ position: 'absolute', alignSelf: 'center', left: -1, top: -2 }}
                    />
                </View>
            </View>
            <View>
             {add &&   
                <View style={styles.viewWrapper}>
                    <View style={[styles.addView,addStyle]}>
                        <Add
                            name={'add'}
                            size={32}
                            color={colors.white}
                            style={[{ position: 'absolute', alignSelf: 'center', top: -5, left: -2 },iconStyle]}
                        />
                    </View>
                </View>
                }
            </View>
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 17,
                        left: 15
                    }}
                >
                    <Text
                        style={[{
                            color: colors.white,
                            fontSize: heightPercentageToDP('3%'),
                            fontFamily: fonts.Medium
                        },textStyle]}
                    >{text}</Text>
                </View>
            </View>
        </View>
    )
}

export default CreatorsCard;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('27%'),
        width: heightPercentageToDP('44%'),
        borderRadius: 30
    },
    wrapper: {
        position: 'absolute',
        right: 155,
        bottom: 95
    },
    View: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('2%'),
        width: heightPercentageToDP('2%'),
        borderRadius: 100
    },
    viewWrapper: {
        position: 'absolute',
        right: 15,
        bottom: 15
    },
    addView: {
        borderRadius: 100,
        padding: heightPercentageToDP('1.6%'),
        width: heightPercentageToDP('1.6%'),
        backgroundColor: colors.primary
    }
})