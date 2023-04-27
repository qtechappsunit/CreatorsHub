import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';

const NotificationCard = ({ follow, image, text }) => {
    return (
        <>
            <View
                style={styles.notificationWrapper}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={image}
                        style={styles.image}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            fontSize: heightPercentageToDP('1.9%'),
                            marginLeft: heightPercentageToDP('1.5%'),
                            width: '60%'
                        }}
                    >{text}</Text>
                </View>
                <TouchableOpacity style={[styles.followButton, { backgroundColor: follow ? 'black' : colors.primary }]}>
                    <Text style={styles.buttonText, { color: follow ? '#ACACAC' : colors.white }}>{follow ? 'Followed' : 'Follow'}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default NotificationCard;

const styles = StyleSheet.create({
    notificationView: {
        padding: heightPercentageToDP('2%'),
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    notificationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: heightPercentageToDP('2%')
    },
    image: {
        height: heightPercentageToDP('4%'),
        width: heightPercentageToDP('4%'),
    },
    followButton: {
        width: '30%',
        padding: heightPercentageToDP('1.5%'),
        backgroundColor: colors.primary,
        alignItems: 'center',
        borderRadius: 50
    },
    buttonText: {
        color: colors.white
    }
})