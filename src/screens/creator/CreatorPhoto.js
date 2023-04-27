import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import CreatorHeader from '../../components/CreatorHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import SearchBar from '../../components/SearchBar';
import colors from '../../assets/colors';
import Photos from '../../components/Photos';
import { launchImageLibrary } from 'react-native-image-picker';
import AddIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';

const CreatorPhoto = () => {

    const navigation = useNavigation();

    const onAddImage = async () => {
        const options = {
            title: 'Select image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
                quality: 0.5,
            }
        }

        await launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('1234', response.didCancel)
            } else {
                navigation.navigate('CreatorUpload', { imageURL: response.assets[0].uri })
            }
        });
    }

    return (
        <Wrapper>
            <CreatorHeader
                headerText={'Photo'}
                iconStyle={{ marginTop: heightPercentageToDP('1.5%') }}
                iconColor={colors.black}
            />
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <SearchBar />
                <View
                    style={{
                        paddingTop: heightPercentageToDP('3%'),
                    }}
                >
                    <Photos />
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.addView}
                onPress={() => onAddImage()}
                activeOpacity={1}
            >
                <AddIcon
                    name={'ios-add'}
                    size={25}
                    color={colors.white}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <BottomBar />
        </Wrapper>
    )
}

export default CreatorPhoto;

const styles = StyleSheet.create({
    container: {
        padding: heightPercentageToDP('2%'),
        paddingTop: heightPercentageToDP('4%'),
        paddingBottom: heightPercentageToDP('10%')
    },
    addView: {
        position: 'absolute',
        bottom: heightPercentageToDP('12%'),
        alignSelf: 'center'
    },
    icon: {
        padding: heightPercentageToDP('2%'),
        borderRadius: 100,
        backgroundColor: colors.primary,
    }
})