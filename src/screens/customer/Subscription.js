import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import images from '../../assets/images';
import colors from '../../assets/colors';
import Button from '../../components/Button';

const Subscription = () => {
    return (
        <Wrapper>
            <Header
                text={'Subscription'}
            />
            <Text
                style={{
                    marginLeft: heightPercentageToDP('2%'),
                    fontSize: heightPercentageToDP('1.8%'),
                    color: '#707070'
                }}
            >Successful</Text>
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: heightPercentageToDP('8%')
                }}
            >
                <Image
                    source={images.subscription}
                    style={styles.image}
                />
                <Text style={styles.text}>Congratulations</Text>
                <Text style={[styles.text, { marginTop: heightPercentageToDP('1%') }]}>Your Subscription is Complete.</Text>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('5%')
                    }}
                >
                    <Text
                        style={styles.textStyle}
                    >We have emailed the details of your subscription on your registered email id. You can proceed with your downloads now.</Text>
                    <Text
                        style={[styles.textStyle, { marginTop: heightPercentageToDP('4%') }]}
                    >Your Subscription No. is 42-2323-6564
                        Subscription End Date: 11th June 2020</Text>
                </View>
                <Button
                    buttonStyle={{
                        backgroundColor: '#CACACA',
                        marginTop: heightPercentageToDP('6%'),
                        marginBottom: heightPercentageToDP('3%')
                    }}
                    linearButton
                    buttonText={'Contact Us'}
                    textStyle={{ color: '#707070' }}
                />
                <Button
                    buttonText={'Done'}
                />
            </ScrollView>
        </Wrapper>
    )
}

export default Subscription;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('15%'),
        width: heightPercentageToDP('15%')
    },
    text: {
        fontSize: heightPercentageToDP('2.8%'),
        color: colors.black,
        marginTop: heightPercentageToDP('3%')
    },
    textStyle: {
        fontSize: heightPercentageToDP('2.5%'),
        color: colors.black,
        width: heightPercentageToDP('41%')
    }
})