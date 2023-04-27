import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const EditProfileHeader = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Edit Profile</Text>
            <Text style={[styles.text, { color: colors.primary }]}>Save</Text>
        </View>
    )
}

export default EditProfileHeader;

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#707070',
        borderBottomWidth: 1
    },
    text: {
        color: colors.black,
        fontSize: heightPercentageToDP('2.2%'),
        marginBottom: heightPercentageToDP('3%')
    }
})