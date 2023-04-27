import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';

const ProfilePhotos = ({ image }) => {
    return (
        <View
            style={{
                height: heightPercentageToDP('27.5%'), width: '48%', marginTop: 20
            }}
        >
            <Image
                source={image}
                style={styles.image}
                borderRadius={20}
            />
        </View>
    )
}

export default ProfilePhotos;

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%'
    },
 
})