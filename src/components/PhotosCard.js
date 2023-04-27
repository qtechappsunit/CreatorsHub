import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Bookmark from 'react-native-vector-icons/MaterialCommunityIcons';

const PhotosCard = ({ icon, image, profile, name, skill }) => {
    return (
        <ImageBackground
            source={image}
            imageStyle={styles.photoImage}
            style={{ marginBottom: heightPercentageToDP('4%') }}
        >
            <View style={styles.bookmarkView}>
                <Bookmark
                    name={icon ? 'bookmark-minus' : 'bookmark-minus-outline'}
                    size={25}
                    style={{ position: 'absolute', alignSelf: 'center', top: 3 }}
                    color={icon ? 'rgba(0, 0, 255, 1)'  : 'gray'}
                />
            </View>
            <View
                style={{
                    marginLeft: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('2%')
                }}
            >
                <Image
                    source={profile}
                    style={styles.photographerImage}
                />
                <Text
                    style={{
                        color: colors.white,
                        marginTop: heightPercentageToDP('0.7%')
                    }}
                >{name}</Text>
                <Text
                    style={{
                        color: colors.white,
                        fontSize: heightPercentageToDP('1%')
                    }}
                >{skill}</Text>
            </View>
        </ImageBackground>
    )
}

export default PhotosCard;

const styles = StyleSheet.create({
    photoImage: {
        height: heightPercentageToDP('35%'),
        width: widthPercentageToDP('85%'),
        borderRadius: 50
    },
    photographerImage: {
        height: heightPercentageToDP('5%'),
        width: heightPercentageToDP('5%')
    },

    bookmarkView: {
        padding: heightPercentageToDP('2%'),
        backgroundColor: colors.white,
        width: heightPercentageToDP('2%'),
        borderRadius: 100,
        alignSelf: 'flex-end',
        marginVertical: heightPercentageToDP('6%'),
        marginRight: heightPercentageToDP('2%')
    }
})