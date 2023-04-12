import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import BookMark from 'react-native-vector-icons/FontAwesome';

const ImageWithText = ({ image, text, flex, selected }) => {
    return (
        <View style={{ flex }}>
            <Image
                source={image}
                style={[
                    { height: heightPercentageToDP('20%') },
                    flex
                        ? { flex, width: undefined }
                        : { width: '100%' },
                ]}
            />
            <View
                style={[styles.bookmarkStyle, { backgroundColor: selected ? colors.primary : 'gray' }]}
            >
                <BookMark
                    name={'bookmark-o'}
                    size={20}
                    color={colors.white}
                    style={{ position: 'absolute', alignSelf: 'center' }}
                />
            </View>
            <View>
                <Text
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        fontSize: heightPercentageToDP('2%'),
                        color: colors.white,
                    }}
                >
                    {text}
                </Text>
            </View>
        </View>
    )
}

const SubCategoryCard = ({ image1, image2, image3, imageStyle, text1, text2, text3, imageStyle2 }) => {
    return (
        <View >
            <View style={{ flexDirection: 'row', height: heightPercentageToDP('20%') }}>
                <ImageWithText
                    flex={1.75}
                    image={image1}
                    text={text1}
                    selected
                />
                <ImageWithText
                    flex={1}
                    image={image2}
                    text={text2}
                />
            </View>
            <ImageWithText
                image={image3}
                text={text3}
            />
        </View>
    )
}

export default SubCategoryCard;

const styles = StyleSheet.create({
    image: {
        flex: 2,
        height: heightPercentageToDP('26%'),
    },
    image2: {
        flex: 1,
        marginLeft: heightPercentageToDP('0.5%')
    },
    bookmarkStyle: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('2%'),
        width: heightPercentageToDP('2%'),
        borderRadius: 100,
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        top: 10
    },
    image3: {
        flex: 1,
        height: heightPercentageToDP('26%'),
        backgroundColor: 'red',
        width: '100%'
    },
})
