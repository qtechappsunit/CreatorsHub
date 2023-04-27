import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Bookmark from 'react-native-vector-icons/Feather'
import colors from '../assets/colors';


const OptionsCard = ({ background, image, text }) => {
    return (
        <View>
            <Image
                source={image}
                style={styles.image}
                borderRadius={20}
            />
            <View style={[styles.bookmarkview, { backgroundColor: background ? colors.primary : 'gray' }]}>
                <Bookmark
                    name={'bookmark'}
                    size={17}
                    color={colors.white}
                    style={{ position: 'absolute' }}
                />
            </View>
            <Text style={styles.text}
            >{text}</Text>
        </View>
    )
}

export default OptionsCard;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('22%'),
        width: '97%',
        alignSelf: 'center',
        marginBottom: heightPercentageToDP('5%')
    },
    bookmarkview: {
        padding: heightPercentageToDP('2%'),
        width: heightPercentageToDP('2%'),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'flex-end',
        top: heightPercentageToDP('2%'),
        right: heightPercentageToDP('2.2%'),
        backgroundColor: colors.primary
    },
    text: {
        color: colors.white,
        fontSize: heightPercentageToDP('3%'),
        position: 'absolute',
        bottom: heightPercentageToDP('7%'),
        left: 20
    }
})