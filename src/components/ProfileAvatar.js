import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from '../assets/images';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Search from 'react-native-vector-icons/Feather';

const ProfileAvatar = () => {
    return (
        <View
            style={styles.profileWrapper}
        >
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={images.customerProfile}
                    style={styles.image}
                />
                <Text
                    style={{
                        alignSelf: 'center',
                        color: colors.black,
                        fontSize: heightPercentageToDP('2.4%'),
                        marginLeft: -10
                    }}
                >
                    MYRTLE BALDWIN</Text>
            </View>
            <Search
                name={'search'}
                size={30}
                color={'gray'}
                style={{ alignSelf: 'center', marginTop: 2, marginRight: heightPercentageToDP('3%') }}
            />
        </View>
    )
}

export default ProfileAvatar;

const styles = StyleSheet.create({
    profileWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        height: heightPercentageToDP('13%'),
        width: heightPercentageToDP('13%'),
    }
})