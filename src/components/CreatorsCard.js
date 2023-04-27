import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Play from 'react-native-vector-icons/Entypo';
import colors from '../assets/colors';
import Add from 'react-native-vector-icons/Ionicons';
import fonts from '../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const CreatorsCard = ({ image, text, style }) => {

    const navigation = useNavigation();

    return (
        <View style={[styles.container, style]}>
            <Image borderRadius={20} style={{ height: '100%', width: '100%' }} source={image} />
            <TouchableOpacity onPress={() => navigation.navigate('SubCategory')} style={styles.iconView}>
                <Add
                    name={'add'}
                    size={40}
                    color={colors.white}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    )
}

export default CreatorsCard;

const styles = StyleSheet.create({
    container: {
        height: heightPercentageToDP('27.5%'), width: '48%', borderRadius: 20, marginTop: 20
    },
    iconView: {
        position: 'absolute',
        left: 0, top: 0, bottom: 0, right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('1%'),
        borderRadius: 100,
    },
    textStyle: {
        color: colors.white,
        fontSize: heightPercentageToDP('2.25%'),
        fontFamily: fonts.Medium,
        position: 'absolute',
        bottom: 10,
        left: 10
    }
})