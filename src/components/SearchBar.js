import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Search from 'react-native-vector-icons/Feather';
import colors from '../assets/colors';

const SearchBar = () => {
    return (
        <View style={styles.input}>
            <Search
                name={'search'}
                size={25}
                color={'gray'}
                style={{ alignSelf: 'center', marginRight: heightPercentageToDP('1%') }}
                onPress={() => alert('work in progress')}
            />
            <TextInput
                placeholder='Search'
                placeholderTextColor={'gray'}
                style={{ color: colors.black }}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    input: {
        padding: heightPercentageToDP('1%'),
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
        flexDirection: 'row'
    }
})