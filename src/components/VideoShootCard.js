import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Play from 'react-native-vector-icons/Entypo';

const VideoShootCard = ({ image }) => {
    return (
        <View
            style={{
                marginBottom: heightPercentageToDP('5%')
            }}
        >
            <Image
                source={image}
                style={styles.image}
            />
            <View
                style={styles.wrapper}
            >
                <View style={styles.playView}>
                    <Play
                        name={'controller-play'}
                        size={40}
                        color={colors.white}
                        style={{ position: 'absolute', alignSelf: 'center', top: 5, left: 7 }}
                    />
                </View>
            </View>
        </View>
    )
}

export default VideoShootCard;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('25%'),
        width: heightPercentageToDP('42%'),
    },
    wrapper: {
        position: 'absolute',
        right: 140,
        bottom: 85
    },
    playView: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('3%'),
        width: heightPercentageToDP('3%'),
        borderRadius: 100
    }
})