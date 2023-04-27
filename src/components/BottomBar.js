import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import images from '../assets/images';
import Location from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { OptionContext } from '../routes/Context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage'
import BuyAndSell from './BuyAndSell';

// const icons = [
//     {
//         id: 1,
//         icon: images.icon1,
//     },
//     {
//         id: 2,
//         icon: images.icon2,
//     },
//     {
//         id: 3,
//         icon: images.icon3,
//     },
//     {
//         id: 4,
//         icon: images.icon4,
//     },
//     {
//         id: 5,
//         icon: images.icon5,
//     },
//     {
//         id: 6,
//         icon: images.icon6,
//     }
// ]

const BottomBar = ({ active, style, activeBar, barStyle, buyandSell }) => {
    const { navBar, setNavBar } = useContext(OptionContext)

    useEffect(() => {
    }, [])

    const onMorePress = async () => {

        const type = await AsyncStorage.getItem('userType')
        // return alert(type)
        if (type == 'customer') {
            return navigation.navigate('CustomerProfile')
        }

        setNavBar(!navBar)

    }

    const onMapPress = () => {
        navigation.navigate('CreatorMap')
    }

    const onMoreActivePress = async () => {
        const type = await AsyncStorage.getItem('userType')
        if (type == "customer") return null;
        setNavBar(!navBar)
        // if (activeBar == 'PROFILE') {
        //     setNavBar(true)
        //     if (navBar) {
        //         setNavBar(false)
        //     }
        // }
    }

    const navigation = useNavigation();

    return (
        <View style={[styles.bottomView, style]}>
            {/* {icons.map((item) => (
                <TouchableOpacity
                    onPress={() => onIconPress(item.id == 1 || 6)}
                    activeOpacity={0.9}
                >
                    <View style={isIcon == item.id && styles.iconView}> 
                        <Image
                            source={item.icon}
                            style={[styles.iconImage, isIcon == item.id && styles.imageStyle]}
                        />
                    </View>
                </TouchableOpacity>
            ))} */}
            {active == 'HOME' ?
                <TouchableOpacity style={styles.iconView}
                    activeOpacity={0.7}
                >
                    <Image
                        source={images.icon7}
                        style={[styles.iconImage, styles.image]}
                    />
                    <Text style={styles.text}>HOME</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={1}
                >
                    <Image
                        source={images.icon1}
                        style={[styles.iconImage, { marginTop: heightPercentageToDP('0.3%') }]}
                    />
                </TouchableOpacity>
            }
            {active == 'BOOK' ?
                <View style={styles.iconView}>
                    <Image
                        source={images.booking}
                        style={[styles.iconImage, styles.image]}
                    />
                    <Text style={styles.text}>BOOK</Text>
                </View>
                :
                <Image
                    source={images.icon2}
                    style={styles.iconImage}
                />
            }
            {active == 'NEWSFEED' ?
                <View style={[styles.iconView, { width: '36%' }]}>
                    <Image
                        source={images.news}
                        style={[styles.iconImage, { height: '110%' }]}
                    />
                    <Text style={styles.text}>NEWS FEED</Text>
                </View>
                :
                <Image
                    source={images.icon3}
                    style={[styles.iconImage, { marginTop: heightPercentageToDP('0.4%') }]}
                />
            }
            {active == 'CREATORS' ?
                <View style={[styles.iconView, { width: widthPercentageToDP('27%') }]}>
                    <Image
                        source={images.creator6}
                        style={[styles.iconImage, styles.image]}
                    />
                    <Text style={styles.text}>CREATORS</Text>
                </View>
                :
                <Image
                    source={images.icon4}
                    style={styles.iconImage}
                />
            }
            <Image
                source={images.icon5}
                style={styles.iconImage}
            />
            {active == 'MORE' ?
                <TouchableOpacity
                    style={styles.iconView}
                    activeOpacity={0.9}
                    onPress={() => onMoreActivePress()}
                >
                    <Image
                        source={images.icon8}
                        style={[styles.iconImage, styles.image]}
                    />
                    <Text style={styles.text}>MORE</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={() => onMorePress()}
                    activeOpacity={0.9}
                >
                    <Image
                        source={images.icon6}
                        style={[styles.iconImage, { marginTop: heightPercentageToDP('0.2%') }]}
                    />
                </TouchableOpacity>
            }
            {/* {buyandSell &&
                <View style={styles.sellView}>
                    <BuyAndSell />
                </View>
            } */}
            {navBar == true &&
                <TouchableOpacity style={[styles.option, barStyle]}
                    activeOpacity={1}
                >
                    {activeBar == 'MAP' ?
                        <View
                            style={{
                                backgroundColor: colors.primary
                            }}
                        >
                            <Location
                                name={'location'}
                                size={32}
                                color={colors.white}
                                style={{ alignSelf: 'center' }}
                            />
                            <Text style={[styles.navText, { marginBottom: heightPercentageToDP('1%'), color: colors.white }]}>NEAR BY CREATORS</Text>
                        </View>
                        :
                        <>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CreatorMap')}
                                activeOpacity={1}
                            >
                                <Location
                                    name={'location'}
                                    size={35}
                                    color={colors.primary}
                                    style={{ alignSelf: 'center' }}
                                    onPress={() => onMapPress()}
                                />
                                <Text style={[styles.navText, { marginBottom: heightPercentageToDP('1%') }]}>NEAR BY CREATORS</Text>
                            </TouchableOpacity>
                        </>
                    }
                    {activeBar == 'PROFILE' ?
                        <View
                            style={{ paddingTop: heightPercentageToDP('1%'), backgroundColor: colors.primary }}
                        >
                            <User
                                name={'user'}
                                size={35}
                                color={colors.white}
                                style={{ marginLeft: heightPercentageToDP('1.8%') }}
                            />
                            <Text style={[styles.navText, { color: colors.white, marginBottom: heightPercentageToDP('1%') }]}>PROFILE</Text>
                        </View>
                        :
                        <>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CreatorProfile')}
                                activeOpacity={1}
                            >
                                <User
                                    name={'user'}
                                    size={35}
                                    color={colors.primary}
                                    style={{ alignSelf: 'center' }}
                                />
                                <Text style={styles.navText}>PROFILE</Text>
                            </TouchableOpacity>
                        </>

                    }
                </TouchableOpacity>
            }
        </View >

    )
}

export default BottomBar;

const styles = StyleSheet.create({
    bottomView: {
        padding: heightPercentageToDP('2%'),
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconImage: {
        height: heightPercentageToDP('3.5%'),
        width: heightPercentageToDP('3.5%'),
        alignSelf: 'center'
    },
    iconView: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('1%'),
        width: heightPercentageToDP('12%'),
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        color: colors.white,
        fontSize: heightPercentageToDP('1.6%'),
        alignSelf: 'center'
    },
    image: {
        height: heightPercentageToDP('2.5%'),
        width: heightPercentageToDP('2.5%')
    },
    option: {
        backgroundColor: colors.white,
        position: 'absolute',
        height: heightPercentageToDP('16%'),
        right: 10,
        bottom: heightPercentageToDP('7.7%'),
        alignItems: 'center',
    },
    navText: {
        color: colors.primary,
        width: heightPercentageToDP('6%'),
        fontSize: heightPercentageToDP('1%'),
        marginTop: heightPercentageToDP('0.5%'),
        marginLeft: heightPercentageToDP('1.5%'),
    },
    sellView: {
        position: 'absolute',
        bottom: heightPercentageToDP('8.4%'),
        right: heightPercentageToDP('1.6%'),
    }
})