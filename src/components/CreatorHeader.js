import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fonts from '../assets/fonts';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Notification from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/Ionicons';
import More from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreatorHeader = ({ headerText, backIcon, moreIcon, iconColor, iconStyle, onPress }) => {
    const [option, setOption] = useState();

    const navigation = useNavigation();

    useEffect(() => {

        userType();

    }, [])

    const userType = async () => {

        const type = await AsyncStorage.getItem('userType')
        setOption(type)
    }

    return (
        <View style={styles.headerWrapper}>
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                {backIcon &&
                    <Back
                        name={'arrow-back-sharp'}
                        size={30}
                        color={colors.black}
                        style={{ alignSelf: 'center', marginRight: heightPercentageToDP('2%'), marginTop: 4 }}
                        onPress={() => navigation.goBack()}
                    />
                }
                <Text style={styles.headerText}>{headerText}</Text>
            </View>
            {option == 'creator' &&
                <>
                    <Notification
                        name={'notifications'}
                        size={32}
                        color={iconColor}
                        style={iconStyle}
                        onPress={() => navigation.navigate('CreatorNotifications')}
                    />
                    {moreIcon &&
                        <More
                            name={'more-vertical'}
                            size={32}
                            color={colors.white}
                            onPress={onPress}
                            style={{ alignSelf: 'center' }}
                        />
                    }
                </>
            }
        </View>
    )
}

export default CreatorHeader;

const styles = StyleSheet.create({
    headerWrapper: {
        padding: heightPercentageToDP('3%'),
        paddingTop: heightPercentageToDP('5.5%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontFamily: fonts.Bold,
        fontSize: heightPercentageToDP('3.5%'),
        color: colors.black
    },

})