import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import CreatorHeader from '../../components/CreatorHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import images from '../../assets/images';
import fonts from '../../assets/fonts';
import colors from '../../assets/colors';
import Button from '../../components/Button';
import Post from '../../components/Post';
import BottomBar from '../../components/BottomBar';

const optionsCategory = [
    {
        id: 1,
        text: 'All',
    },
    {
        id: 2,
        text: 'Design & Art',
    },
    {
        id: 3,
        text: 'Startups',
    },
    {
        id: 4,
        text: 'Programming',
    }
]

const newsFeed = [
    {
        id: 1,
        image: images.feed2
    },
    {
        id: 2,
        image: images.feed2
    },
    {
        id: 3,
        image: images.feed2
    }
]

const Feed = () => {
    const [category, setCategory] = useState(1);

    const onOptionPress = (ID) => {
        setCategory(ID)
    }

    return (
        <Wrapper>
            <CreatorHeader
                iconStyle={{ marginTop: heightPercentageToDP('1.5%') }}
                iconColor={colors.black}
            />
            <ScrollView
                contentContainerStyle={{
                    paddingTop: heightPercentageToDP('1%'),
                    padding: heightPercentageToDP('3%'),
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Image
                        source={images.feed}
                        style={styles.image}
                    />
                    <View
                        style={{
                            marginLeft: heightPercentageToDP('1.7%')
                        }}
                    >
                        <Text style={styles.name}>Adolfo Hess</Text>
                        <Text
                            style={{
                                color: '#797980',
                                fontSize: heightPercentageToDP('1.9%')
                            }}>@adohe</Text>
                        <Text
                            style={{
                                color: colors.black,
                                fontSize: heightPercentageToDP('1.6%'),
                                marginTop: heightPercentageToDP('2%'),
                                width: heightPercentageToDP('32%')
                            }}
                        >Specialized in delivering End to End
                            product design for a Web app & Mobile </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: heightPercentageToDP('2%')
                            }}
                        >
                            <View>
                                <Text style={styles.heading}
                                >4K</Text>
                                <Text
                                    style={{
                                        color: '#797980',
                                        fontSize: heightPercentageToDP('1.9%')
                                    }}
                                >Followers</Text>
                            </View>
                            <View
                                style={{
                                    marginRight: heightPercentageToDP('6%')
                                }}
                            >
                                <Text style={styles.heading}>639</Text>
                                <Text
                                    style={{
                                        color: '#797980',
                                        fontSize: heightPercentageToDP('1.9%')
                                    }}
                                >Following</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Button
                    buttonText={'Follow'}
                    buttonStyle={styles.button}
                    onPress={() => alert('work in progress')}
                />
                <View
                    style={{
                        paddingTop: heightPercentageToDP('4%'),
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    {optionsCategory.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => onOptionPress(item.id)}
                        >
                            <Text
                                key={item.id}
                                style={[category == item.id ? { color: '#131314', fontSize: heightPercentageToDP('1.9%'), fontFamily: fonts.Bold } : { fontSize: heightPercentageToDP('1.9%'), fontFamily: fonts.Bold, color: '#797980' }]}
                            >{item.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('4%'),
                    }}
                >
                    {newsFeed.map((item) => (
                        <Post
                            key={item.id}
                            image={item.image}
                        />
                    ))}
                </View>
            </ScrollView>
            <BottomBar
                active={'NEWSFEED'}
            />
        </Wrapper>
    )
}

export default Feed;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('10%'),
        width: heightPercentageToDP('10%')
    },
    name: {
        fontFamily: fonts.Bold,
        fontSize: heightPercentageToDP('2.5%'),
        color: colors.black
    },
    heading: {
        fontFamily: fonts.Bold,
        color: colors.black,
        fontSize: heightPercentageToDP('2.4%')
    },
    button: {
        alignSelf: 'center',
        marginTop: heightPercentageToDP('4%'),
        padding: heightPercentageToDP('1.4%'),
        width: '60%',
        borderRadius: 15,
        marginLeft: heightPercentageToDP('5%')
    }
})