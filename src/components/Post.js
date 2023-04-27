import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Message from 'react-native-vector-icons/MaterialCommunityIcons';
import Heart from 'react-native-vector-icons/Ionicons';
import Bookmark from 'react-native-vector-icons/Feather';
import images from '../assets/images';
import fonts from '../assets/fonts';
import Dot from 'react-native-vector-icons/Entypo';
import Card from './Card';

const card = [
    {
        id: 1,
        text: '9',
        icon: 'message-text-outline',
    },
    {
        id: 2,
        text: '76',
        icon: 'cards-heart-outline',
    },
    {
        id: 3,
        text: '2',
        icon: 'bookmark-outline',
    }
]



const Post = ({ image }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginBottom: heightPercentageToDP('3.5%')
            }}
        >
            <View>
                {card.map((item) => (
                    <Card
                        key={item.id}
                        icon={item.icon}
                        text={item.text}
                    />
                ))
                }
            </View>
            <View>
                <Image
                    source={image}
                    style={styles.image}
                    borderRadius={20}
                />
                <Text style={styles.heading}>Street Exploring Today</Text>
                <Text style={styles.imageText}>More street art within walking distance of my place in New York</Text>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('3%'),
                        flexDirection: 'row'
                    }}>
                    <Image
                        source={images.feed3}
                        style={styles.profileImage}
                    />
                    <View>
                        <Text style={styles.profileText}>By David Watson in Art</Text>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Text style={[styles.profileText, { marginTop: heightPercentageToDP('0.5%') }]}>1 days ago</Text>
                            <Dot
                                name={'dot-single'}
                                size={22}
                                color={colors.black}
                                style={{ alignSelf: 'center', marginTop: heightPercentageToDP('0.5%') }}
                            />
                            <Text style={[styles.profileText, { marginTop: heightPercentageToDP('0.5%') }]}>8 min read</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Post;

const styles = StyleSheet.create({
    cardView: {
        padding: heightPercentageToDP('3%'),
        width: heightPercentageToDP('3%'),
        borderRadius: 100,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: heightPercentageToDP('1%')
    },
    icon: {
        position: 'absolute'
    },
    text: {
        alignSelf: 'center',
        color: colors.black,
        marginTop: heightPercentageToDP('1%')
    },
    wrapper: {
        paddingTop: heightPercentageToDP('1%')
    },
    image: {
        height: heightPercentageToDP('32%'),
        width: '70%',
        marginLeft: heightPercentageToDP('1%')
    },
    heading: {
        fontSize: heightPercentageToDP('2.7%'),
        fontFamily: fonts.Bold,
        color: colors.black,
        marginLeft: heightPercentageToDP('2%')
    },
    imageText: {
        fontSize: heightPercentageToDP('1.7%'),
        color: colors.black,
        width: '75%',
        marginLeft: heightPercentageToDP('2%'),
        marginTop: heightPercentageToDP('1%')
    },
    profileImage: {
        height: heightPercentageToDP('4%'),
        width: heightPercentageToDP('4%'),
        marginLeft: heightPercentageToDP('1%')
    },
    profileText: {
        marginLeft: heightPercentageToDP('1%'),
        color: colors.black,
    }
})