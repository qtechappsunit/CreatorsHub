import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';

const MessageCard = ({ text, image, text2 }) => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={image}
                style={styles.image}
            />
            <View
                style={{
                    marginLeft: heightPercentageToDP('3%')
                }}
            >
                <Text style={styles.text}
                >
                    {text}
                </Text>
                <Text style={styles.text2}>{text2}</Text>
            </View>
        </View>
    )
}

export default MessageCard;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        paddingTop: heightPercentageToDP('3%'),
    },
    image: {
        height: heightPercentageToDP('7%'),
        width: heightPercentageToDP('7%')
    },
    text: {
        color: colors.black,
        marginTop: heightPercentageToDP('1%')
    },
    text2: {
        color: colors.black,
        width: heightPercentageToDP('30%'),
        marginTop: heightPercentageToDP('3%')
    }
})