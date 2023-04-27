import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Close from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const UploadPhoto = ({ image }) => {

    const navigation = useNavigation();

    return (
        <View>
            <Image
                source={image}
                style={styles.image}
                borderRadius={20}
                resizeMode='stretch'
            />
            <TouchableOpacity style={styles.closeView}
                onPress={() => navigation.goBack()}
                activeOpacity={1}
            >
                <Close
                    name={'close'}
                    size={15}
                    color={colors.white}
                    style={{ position: 'absolute' }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default UploadPhoto;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('45%'),
        width: '100%'
    },
    closeView: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('2%'),
        width: heightPercentageToDP('2%'),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15,
        top: 10
    }
})