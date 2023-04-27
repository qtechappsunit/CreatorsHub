import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import Like from 'react-native-vector-icons/AntDesign';
import User from 'react-native-vector-icons/Feather';
import ProfilePhotos from '../../components/ProfilePhotos';
import images from '../../assets/images';
import Add from 'react-native-vector-icons/Ionicons';
import BottomBar from '../../components/BottomBar';
import { useNavigation } from '@react-navigation/native';
import CreatorHeader from '../../components/CreatorHeader';
import AsyncStorage from '@react-native-async-storage/async-storage'


const profileImages = [
    {
        id: 1,
        image: images.profile2
    },
    {
        id: 2,
        image: images.profile3
    },
    {
        id: 3,
        image: images.profile4
    },
    {
        id: 4,
        image: images.profile5
    }
]

const CreatorProfile = () => {
    const [edit, setEdit] = useState(false);
    const [user, setUser] = useState()

    const navigation = useNavigation();

    useEffect(() => {

        UserType();

    }, [])

    const UserType = async () => {

        const type = await AsyncStorage.getItem('userType')
        setUser(type)

    }

    return (
        <Wrapper>
            <Image
                source={images.profile}
                style={styles.coverPhoto}
            />
            <View style={styles.headerWrapper}>
                <CreatorHeader
                    iconColor={colors.primary}
                    moreIcon={true}
                    onPress={() => setEdit(true)}
                />
            </View>
            <View style={styles.imageBorder}>
                <Image
                    source={images.profile1}
                    style={styles.image}
                />
            </View>
            <View
                style={{
                    alignItems: 'center',
                    paddingTop: heightPercentageToDP('9%')
                }}
            >
                <Text style={styles.profileName}>Jason</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >
                    <Like
                        name={'like2'}
                        size={12}
                        color={colors.black}
                    />
                    <Text style={styles.text}>6</Text>
                    <User
                        name={'user-plus'}
                        size={12}
                        color={colors.black}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>55</Text>
                    <User
                        name={'user-check'}
                        size={12}
                        color={colors.black}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>153</Text>
                </View>
            </View>
            {user == 'creator' &&
                <>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('3%'),
                            padding: heightPercentageToDP('2%')
                        }}
                    >
                        <FlatList
                            data={profileImages}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: heightPercentageToDP('65%') }}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            renderItem={({ item }) => (
                                <ProfilePhotos
                                    key={item.id}
                                    image={item.image}
                                />
                            )}
                        />
                    </View>
                    <TouchableOpacity style={styles.addView}>
                        <Add
                            name={'ios-add'}
                            size={30}
                            color={colors.white}
                            style={styles.Addicon}
                        />
                    </TouchableOpacity>
                </>
            }
            {
                edit == true &&
                <>
                    <View
                        style={styles.editView}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditProfile')}
                            activeOpacity={1}
                        >
                            <Text style={[styles.editText, { marginBottom: heightPercentageToDP('2%') }]}>Edit Profile</Text>
                        </TouchableOpacity>
                        <View style={styles.border}></View>
                        <Text style={[styles.editText, { marginTop: heightPercentageToDP('2%') }]}>Share</Text>
                    </View>
                    <TouchableOpacity style={styles.cancelView}
                        activeOpacity={1}
                        onPress={() => setEdit(false)}
                    >
                        <Text style={styles.editText}>Cancel</Text>
                    </TouchableOpacity>
                </>
            }
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    bottom: 0
                }}
            >
                <BottomBar
                    active={'MORE'}
                    activeBar={'PROFILE'}
                    barStyle={{ bottom: heightPercentageToDP('9.6%') }}
                />
            </View>
        </Wrapper >
    )
}

export default CreatorProfile;

const styles = StyleSheet.create({
    coverPhoto: {
        height: heightPercentageToDP('32%'),
        width: '100%',
    },
    imageBorder: {
        position: 'absolute',
        top: heightPercentageToDP('24%'),
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: colors.primary,
        borderRadius: 100
    },
    image: {
        padding: heightPercentageToDP('2%'),
        borderWidth: 7,
        borderColor: colors.white,
        borderRadius: 100
    },
    profileName: {
        color: colors.black,
        fontSize: heightPercentageToDP('4%'),
        fontFamily: fonts.Medium
    },
    text: {
        color: colors.black,
        marginLeft: heightPercentageToDP('1%')
    },
    icon: {
        marginLeft: heightPercentageToDP('1%')
    },
    addView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: heightPercentageToDP('15%'),
        alignSelf: 'center',
    },
    Addicon: {
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('1.7%'),
        borderRadius: 100,
    },
    headerWrapper: {
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    editView: {
        padding: heightPercentageToDP('3.7%'),
        width: '94%',
        borderRadius: 15,
        backgroundColor: 'rgba(305,305,305,0.9)',
        alignItems: 'center',
        position: 'absolute',
        bottom: heightPercentageToDP('19%'),
        alignSelf: 'center',
    },
    editText: {
        color: colors.primary,
        fontSize: heightPercentageToDP('2.5%'),
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        width: '119%',
    },
    cancelView: {
        backgroundColor: 'rgba(305,305,305,0.9)',
        padding: heightPercentageToDP('2.2%'),
        width: '94%',
        alignItems: 'center',
        position: 'absolute',
        bottom: heightPercentageToDP('10%'),
        alignSelf: 'center',
        borderRadius: 15,
    },
})