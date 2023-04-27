import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import images from '../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BuyAndSell = () => {
    const [sellOption, setSellOption] = useState();

    useEffect(() => {

        userType()

    }, [])

    const userType = async () => {

        const type = await AsyncStorage.getItem('userType')
        setSellOption(type)
    }

    return (
        <View>
            {sellOption == 'customer' &&
                <View style={styles.sellView}>
                    <Image
                        source={images.sell}
                        style={styles.image}
                    />
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('1%'),
                            color: colors.primary,
                            alignSelf: 'center',
                        }}
                    >BUY&SELL</Text>
                </View>
            }
        </View>
    )
}

export default BuyAndSell;

const styles = StyleSheet.create({
    sellView: {
        backgroundColor: colors.white,
        padding: heightPercentageToDP('2%'),
        alignItems: 'center'
    },
    image: {
        height: heightPercentageToDP('4%'),
        width: heightPercentageToDP('4%'),
        alignSelf: 'center'
    }
})