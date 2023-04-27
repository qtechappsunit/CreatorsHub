import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Play from 'react-native-vector-icons/Entypo';
import images from '../assets/images';

const VideoShootCard = ({ image }) => {
    return (
        <View
            style={{
                marginBottom: heightPercentageToDP('5%'),
                alignItems: 'center'
            }}
        >
            <Image
                source={image}
                style={styles.image}
            />
            <View style={styles.playView}>
                <Play
                    name={'controller-play'}
                    size={35}
                    color={colors.white}
                    style={{ position: 'absolute' }}
                />
            </View>
        </View>
    )
}

export default VideoShootCard;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('25%'),
        width: '100%'
    },
    playView: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('3%'),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 80
    },

})