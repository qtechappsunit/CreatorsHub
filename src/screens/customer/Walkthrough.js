import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import SideOption from '../../components/SideOption';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import images from '../../assets/images';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import VideoShootCard from '../../components/VideoShootCard';
import BuyAndSell from '../../components/BuyAndSell';
import BottomBar from '../../components/BottomBar';
import { useNavigation } from '@react-navigation/native';
import Profile from '../../components/Profile';


const photoShoot = [
    {
        id: 1,
        image: images.photoshoot
    },
    {
        id: 2,
        image: images.photoshoot1
    },
    {
        id: 3,
        image: images.photoshoot2
    }
]

const videoShoot = [
    {
        id: 1,
        image: images.video,
        buy: false
    },
    {
        id: 2,
        image: images.video2,
        buy: true
    }
]

const Walkthrough = () => {


    return (
        <Wrapper>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        padding: heightPercentageToDP('3.5%'),
                        paddingTop: heightPercentageToDP('7%')
                    }}
                >
                    <Profile
                        name={'Crystal Phillips'}
                        image={images.photographer1}
                        book
                    />
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2.5%')
                        }}
                    >
                        <Text
                            style={{
                                fontSize: heightPercentageToDP('2%'),
                                color: colors.black,
                                fontFamily: fonts.Medium,
                            }}
                        >PHOTO SHOOT</Text>
                        <View
                            style={{
                                paddingTop: heightPercentageToDP('1%'),
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            {photoShoot.map((item) => (
                                <Image
                                    key={item.id}
                                    source={item.image}
                                    style={styles.shootImage}
                                />
                            ))}
                        </View>
                        <Text
                            style={{
                                fontSize: heightPercentageToDP('2%'),
                                color: colors.black,
                                fontFamily: fonts.Medium
                            }}
                        >VIDEO SHOOT</Text>
                        <View
                            style={{
                                paddingTop: heightPercentageToDP('2%'),
                            }}
                        >
                            {videoShoot.map((item) => (
                                <VideoShootCard
                                    key={item.id}
                                    buy={item.buy}
                                    image={item.image}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <SideOption />
            <BottomBar
                active={'CREATORS'}
            // buyandSell
            />
        </Wrapper>
    )
}

export default Walkthrough;

const styles = StyleSheet.create({
    buttonOption: {
        padding: heightPercentageToDP('1.2%'),
        backgroundColor: colors.primary,
        borderRadius: 10,
        width: heightPercentageToDP('11%'),
        marginRight: heightPercentageToDP('-2%')
    },
    buttonStyle: {
        padding: heightPercentageToDP('1.2%'),
        backgroundColor: '#DEDEDE',
        borderRadius: 10,
        width: heightPercentageToDP('11%'),
        marginRight: heightPercentageToDP('-2%')
    },
    text: {
        color: colors.white,
        fontSize: heightPercentageToDP('2%'),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text2: {
        color: colors.black,
        fontSize: heightPercentageToDP('2%'),
        textAlign: 'center'
    },
    shootImage: {
        height: heightPercentageToDP('20%'),
        width: widthPercentageToDP('25%')
    },
})