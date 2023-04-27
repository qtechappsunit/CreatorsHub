import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import colors from '../../assets/colors';
import EditProfileHeader from '../../components/EditProfileHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import images from '../../assets/images';
import EditInput from '../../components/EditInput';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import CountryPicker from 'react-native-country-picker-modal'
import BottomBar from '../../components/BottomBar';
import Wrapper from '../../components/Wrapper';

const EditProfile = () => {

    return (
        <View style={styles.container}>
            <EditProfileHeader />
            <ScrollView>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: heightPercentageToDP('6%')
                    }}
                >
                    <View>
                        <View style={styles.imageBorder}>
                            <Image
                                source={images.edit}
                                style={styles.image}
                            />
                        </View>
                    </View>
                    <View>
                        <EditInput
                            style={styles.input}
                            placeholder={'First Name'}
                        />
                        <EditInput
                            placeholder={'Last Name'}
                            style={styles.input}
                        />
                    </View>
                </View>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('4%')
                    }}
                >
                    <Text style={styles.heading}>Company</Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('4%'),
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <CountryPicker
                            region='Asia'
                        />
                        <Arrow
                            name={'keyboard-arrow-right'}
                            size={35}
                            color={colors.black}
                        />
                    </View>
                    <Text style={[styles.heading, { marginTop: heightPercentageToDP('3%') }]}>Website URL</Text>
                </View>
            </ScrollView>
            <View
                style={styles.wrapper}
            >
                <BottomBar
                    style={{
                        width: '107%'
                    }}
                    active={'MORE'}
                />
            </View>
        </View>


    )
}

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        padding: heightPercentageToDP('4%'),
        paddingTop: heightPercentageToDP('7%'),
        flex: 1,
    },
    image: {
        borderRadius: 100,
        borderColor: colors.white,
        borderWidth: 5,
        height: heightPercentageToDP('11%'),
        width: heightPercentageToDP('11%')
    },
    imageBorder: {
        borderColor: colors.primary,
        borderRadius: 100,
        borderWidth: 3
    },
    input: {
        marginLeft: heightPercentageToDP('2%'),
        width: '233%',
    },
    heading: {
        color: colors.black,
        fontSize: heightPercentageToDP('2.1%'),
    },
    wrapper: {
        position: 'absolute',
        bottom: 0,
    }
})