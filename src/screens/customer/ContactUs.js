import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import ContactInput from '../../components/ContactInput';
import DescribeInput from '../../components/DescribeInput';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';

const ContactUs = () => {

    const navigation = useNavigation();

    return (
        <Wrapper>
            <Header
                text={'Contact Us'}
            />
            <View
                style={{
                    marginLeft: heightPercentageToDP('2.5%')
                }}
            >
                <Text
                    style={{
                        fontSize: heightPercentageToDP('2%')
                    }}
                >Get Help</Text>
            </View>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1, padding: heightPercentageToDP('4%'),
                    paddingTop: heightPercentageToDP('3%'),
                    paddingBottom: heightPercentageToDP('10%')
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <ContactInput
                        placeholder={'First Name'}
                        style={styles.inputStyle}

                    />
                    <ContactInput
                        placeholder={'Last Name'}
                        style={styles.inputStyle}
                    />

                </View>
                <ContactInput
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    style={{ marginTop: heightPercentageToDP('2.5%') }}
                />
                <View
                    style={{
                        paddingTop: heightPercentageToDP('6%')
                    }}
                >
                    <DescribeInput
                        placeholder={'Write a message'}
                    />
                </View>
                <View
                    style={{
                        justifyContent: 'flex-end',
                        flex: 1,
                        alignItems: 'center',
                        marginBottom: heightPercentageToDP('5%'),
                        paddingTop: heightPercentageToDP('4%')
                    }}
                >
                    <Button
                        buttonText={'Submit'}
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </ScrollView>
            <View style={styles.wrapper}>
                <BottomBar
                    active={'BOOK'}
                    style={{ width: '97%' }}
                />
            </View>
        </Wrapper>
    )
}

export default ContactUs;

const styles = StyleSheet.create({
    inputStyle: {
        width: heightPercentageToDP('17%')
    },
    wrapper: {
        position: 'absolute',
        bottom: 0
    }
})