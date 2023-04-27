import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';

const SideOption = () => {
    return (

        <View
            style={{
                position: 'absolute',
                top: 330,
                left: 15
            }}
        >

            <View
                style={{
                    position: 'absolute',
                    zIndex: 1
                }}
            >

                <Image
                    source={images.barimage}
                    style={styles.image}
                />
            </View>
            <View style={styles.optionView}>
                <Text
                    style={{
                        fontSize: heightPercentageToDP('1.5%'),
                        color: colors.white,
                        width: widthPercentageToDP('50%'),
                        marginLeft: heightPercentageToDP('4%')
                    }}
                > PRIME PHOTOGRAPHY</Text>
            </View>
        </View>

    )
}

export default SideOption;

const styles = StyleSheet.create({
    optionView: {
        padding: heightPercentageToDP('0.5%'),
        backgroundColor: colors.primary ,
        borderRadius: 40,
        width: heightPercentageToDP('22%'),
    },
    image: {
        height: heightPercentageToDP('3.2%'),
        width: heightPercentageToDP('3.2%')
    }
})