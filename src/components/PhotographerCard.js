import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';

const PhotographerCard = ({ image, name, skill }) => {
    return (
        <View
            style={{
                marginBottom: heightPercentageToDP('3%'),
                marginHorizontal: heightPercentageToDP('1.6%')
            }}
        >
            <Image
                source={image}
                style={styles.image}
            />
            <Text
                style={{
                    marginTop: heightPercentageToDP('1.5%'),
                    fontSize: heightPercentageToDP('1.6%'),
                    color: colors.black
                }}
            >{name}</Text>
            <Text
                style={{
                    marginTop: heightPercentageToDP('1%'),
                    color: colors.black,
                    fontSize: heightPercentageToDP('1%')
                }}
            >{skill}</Text>
        </View>
    )
}

export default PhotographerCard;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('10%'),
        width: heightPercentageToDP('10%')
    }
})