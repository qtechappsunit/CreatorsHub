import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Message from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({ icon, text }) => {
    return (
        <View
            style={{
                marginBottom: heightPercentageToDP('2.5%')
            }}
        >
            <View style={styles.cardView}>
                <Message
                    name={icon}
                    size={25}
                    color={colors.white}
                    style={{ position: 'absolute' }}
                />
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: colors.primary,
        height: heightPercentageToDP('6%'),
        width: heightPercentageToDP('6%'),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.black,
        textAlign: 'center',
        marginTop: heightPercentageToDP('1%')
    }
})