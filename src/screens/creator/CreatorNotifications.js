import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import CreatorHeader from '../../components/CreatorHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import SearchBar from '../../components/SearchBar';
import colors from '../../assets/colors';
import images from '../../assets/images';
import fonts from '../../assets/fonts';
import MessageCard from '../../components/MessageCard';
import { useNavigation } from '@react-navigation/native';
import NotificationCard from '../../components/NotificationCard';
import BottomBar from '../../components/BottomBar';

const notifications = [
    {
        id: 1,
        image: images.notification1,
        text: 'Mirachel followed you. 05m',
        follow: false
    },
    {
        id: 2,
        image: images.notification2,
        text: 'Dinda Mara followed you. 12m',
        follow: false
    },
    {
        id: 3,
        image: images.notification3,
        text: 'Doni Gabrika followed you. 32m',
        follow: true
    },
    {
        id: 4,
        image: images.notification4,
        text: 'Dianne followed you. 40m',
        follow: true
    },
    {
        id: 5,
        image: images.notification5,
        text: 'Selena followed you. 54m',
        follow: false
    }
]

const messages = [
    {
        id: 1,
        image: images.message1,
        text: 'Dianne Hello,',
        text2: 'My name is Dianne Thank you for Followed me',
    },
    {
        id: 2,
        image: images.message2,
        text: 'Hi Jason',
    }
]

const CreatorNotifications = () => {

    const navigation = useNavigation();

    return (
        <Wrapper>
            <CreatorHeader
                headerText={'Notifications'}
                backIcon
                iconStyle={{ marginTop: heightPercentageToDP('1.5%') }}
                iconColor={colors.black}
            />
            <View
                style={styles.container}
            >
                <SearchBar />
                <ScrollView
                    contentContainerStyle={{
                        paddingTop: heightPercentageToDP('3%'),
                        paddingBottom: heightPercentageToDP('40%')
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.Card}>
                        <View style={styles.wrapper}>
                            <Text style={styles.heading}>Notifications</Text>
                            <Text style={styles.viewText}>View All</Text>
                        </View>
                        <Text style={styles.headingText}>Today</Text>
                        {notifications.map((item) => (
                            <NotificationCard
                                key={item.id}
                                text={item.text}
                                image={item.image}
                                follow={item.follow}
                            />
                        ))}
                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('3%')
                        }}
                    >
                        <View style={styles.Card}>
                            <View style={styles.wrapper}>
                                <Text style={styles.heading}>Messages</Text>
                                <Text style={styles.viewText}>View All</Text>
                            </View>
                            {messages.map((item) => (
                                <MessageCard
                                    key={item.id}
                                    image={item.image}
                                    text={item.text}
                                    text2={item.text2}
                                />
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0
                }}
            >
                <BottomBar
                    style={{ width: '95%' }}
                />
            </View>
        </Wrapper>
    )
}

export default CreatorNotifications;

const styles = StyleSheet.create({
    container: {
        padding: heightPercentageToDP('2%'),
        paddingTop: heightPercentageToDP('2%')
    },
    Card: {
        padding: heightPercentageToDP('2%'),
        backgroundColor: colors.white,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headingText: {
        color: colors.primary,
        marginTop: heightPercentageToDP('2%'),
        fontSize: heightPercentageToDP('2%')
    },
    heading: {
        fontSize: heightPercentageToDP('2.7%'),
        color: colors.black,
        fontFamily: fonts.Medium
    },
    viewText: {
        color: colors.black,
        fontSize: heightPercentageToDP('2.1%'),
        fontFamily: fonts.Medium,
    },
})