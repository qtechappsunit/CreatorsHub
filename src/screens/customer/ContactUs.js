import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import ContactInput from '../../components/ContactInput';
import DescribeInput from '../../components/DescribeInput';
import Button from '../../components/Button';

const ContactUs = () => {
    return (
        <Wrapper>
            <Header
                text={'Contact Us'}
            />
            <View
                style={{
                    marginLeft: heightPercentageToDP('3%')
                }}
            >
                <Text
                    style={{
                        fontSize: heightPercentageToDP('2%')
                    }}
                >Get Help</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingTop: heightPercentageToDP('2.8%')
                    }}
                >
                    <ContactInput
                        placeholder={'First Name'}
                    />
                    <ContactInput
                        placeholder={'Last Name'}
                    />
                </View>
                <View
                    style={{
                        padding: heightPercentageToDP('2.8%')
                    }}
                >
                    <ContactInput
                        placeholder={'Email'}
                        style={{ width: heightPercentageToDP('41%') }}
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
                </View>
            </View>
            <View
                style={{
                    justifyContent: 'flex-end',
                    flex: 1,
                    alignItems: 'center',
                    marginBottom: heightPercentageToDP('5%')
                }}
            >
                <Button
                    buttonText={'Submit'}
                />
            </View>
        </Wrapper>
    )
}

export default ContactUs;

const styles = StyleSheet.create({

})