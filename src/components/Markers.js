import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/colors';
import images from '../assets/images';
import { Marker } from 'react-native-maps';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const MarkerImages = ({ image, lat, long, style }) => {
    return (
        <Marker
            coordinate={{
                latitude: lat,
                longitude: long
            }}
            style={style}
        >
            <Image
                source={image}
                style={styles.image}
            />
        </Marker>
    )
}

export default MarkerImages;

const styles = StyleSheet.create({
    image: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        height: heightPercentageToDP('6%'),
        width: heightPercentageToDP('6%'),
    }
})

