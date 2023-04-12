import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import MoVideoPlayer from 'react-native-mo-video-player';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import InformationRow from '../../components/InformationRow';
import Button from '../../components/Button';
import SideOption from '../../components/SideOption';

const information = [
    {
        id: 1,
        icon: 'ios-location-outline',
        text: '18 Marina Gardens Dr, Singapore 018953'
    },
    {
        id: 2,
        icon: 'ios-calendar-outline',
        text: 'Sunday - Saturday'
    },
    {
        id: 3,
        icon: 'time-outline',
        text: '05:00 AM - 02:00 AM'
    }
]

const BookingDetails = () => {

    const width = Dimensions.get('window').width;

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <MoVideoPlayer
                source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" }}
                style={{ width: width, height: heightPercentageToDP('45%') }}
                // autoPlay

            />
            <ScrollView style={styles.container}
                contentContainerStyle={{
                    paddingTop: heightPercentageToDP('1.5%'),
                    padding: heightPercentageToDP('3%')
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.heading}>Fitness</Text>
                <Text
                    style={{
                        color: colors.black
                    }}
                >Marina Gardens, Singapore</Text>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('2.5%')
                    }}
                >
                    <Text style={styles.text}>About</Text>
                    <Text
                        style={{
                            color: colors.black,
                            marginTop: heightPercentageToDP('1%'),
                            fontSize: heightPercentageToDP('1.7%')
                        }}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus sed mauris nec molestie. Mauris eget nibh ligula. Praesent maximus urna ex, eu dignissim metus aliquam ac. </Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2.5%')
                        }}
                    >
                        <Text style={styles.text}>Information</Text>
                        <View
                            style={{
                                paddingTop: heightPercentageToDP('2.5%')
                            }}
                        >
                            {information.map((item) => (
                                <InformationRow
                                    icon={item.icon}
                                    text={item.text}
                                />
                            ))
                            }
                        </View>
                    </View>
                </View>
                <Button
                    linearButton
                    buttonStyle={{ backgroundColor: '#D4D4D4' }}
                    buttonText={'Submit Videos'}
                    textStyle={{ color: '#707070' }}
                />
                <Button
                    buttonText={'Booking details'}
                    buttonStyle={{ marginTop: heightPercentageToDP('2.5%') }}
                />
            </ScrollView>
            <SideOption />
        </View>
    )
}

export default BookingDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: heightPercentageToDP('68%'),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        left: 0.1,
        right: 0.1,
        bottom: 2
    },
    heading: {
        color: colors.black,
        fontSize: heightPercentageToDP('3.5%'),
        fontFamily: fonts.Medium
    },
    text: {
        fontFamily: fonts.Bold,
        fontSize: heightPercentageToDP('2.5%'),
        color: colors.black
    }
})