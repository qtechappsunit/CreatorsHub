import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import { useNavigation } from '@react-navigation/native';

const VideoCard = ({ image }) => {

    const navigation = useNavigation();

    return (

        <View style={styles.cardView}>
            <Image
                source={image}
                style={styles.image}
            />
            <View
                style={{
                    paddingTop: heightPercentageToDP('2%'),
                    padding: heightPercentageToDP('2.5%')
                }}
            >
                <Text
                    style={{
                        color: colors.black,
                        fontSize: heightPercentageToDP('2.5%')
                    }}
                >Video</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: heightPercentageToDP('1%')
                    }}
                >
                    <Image
                        source={images.creatorVideo3}
                        style={styles.profile}
                    />
                    <Text
                        style={{
                            color: colors.black,
                            marginLeft: heightPercentageToDP('1.2%'),
                            fontSize: heightPercentageToDP('2%')
                        }}
                    >Jason</Text>
                </View>
            </View>
        </View>

    )
}

export default VideoCard;

const styles = StyleSheet.create({
    cardView: {
        height: heightPercentageToDP('49%'),
        backgroundColor: colors.white,
        width: '96.8%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: heightPercentageToDP('5%'),
        alignSelf: 'center'
    },
    image: {
        height: heightPercentageToDP('38%'),
        width: '100%',
        borderRadius: 20
    },
    profile: {
        height: heightPercentageToDP('3%'),
        width: '8%',
    },
 
})