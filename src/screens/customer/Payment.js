import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import PaymentCard from '../../components/PaymentCard';
import images from '../../assets/images';
import colors from '../../assets/colors';
import Button from '../../components/Button';

const cards = [
    {
        id: 1,
        image: images.card1,
        text: 'MasterCard'
    },
    {
        id: 2,
        cardImage: images.card2,
        text: 'Paypal'
    },
    {
        id: 3,
        cardImage: images.card3,
        text: 'Google Pay'
    },
    {
        id: 4,
        cardImage: images.card4,
        text: 'Apple Pay'
    }
]

const Payment = () => {
    return (
        <Wrapper>
            <Header
                text={'Payment Gateway'}
            />
            <ScrollView
                contentContainerStyle={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('0.5%')
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text>Select your card</Text>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('4%')
                    }}
                >
                    {cards.map((item) => (

                        <PaymentCard
                            key={item.id}
                            selected={item.image}
                            card={item.cardImage}
                            cardText={item.text}
                        />
                    ))}

                </View>
                <Text style={styles.heading}>Order Info</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: heightPercentageToDP('2.5%')
                    }}
                >
                    <Text style={[styles.orderText, { marginBottom: heightPercentageToDP('4.5%') }]}>Subtotal</Text>
                    <Text style={styles.orderText}>$12.00</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text style={styles.orderText}>Shipping Cost</Text>
                    <Text style={styles.orderText}>+$10.00</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: '#707070',
                        borderBottomWidth: 1,
                        paddingTop: heightPercentageToDP('2.5%'),
                        marginBottom: heightPercentageToDP('2.2%'),
                    }}>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text style={styles.orderText}>Total</Text>
                    <Text style={styles.orderText}>$22.00</Text>
                </View>
                <Button
                    buttonStyle=
                    {{
                        alignSelf: 'center',
                        marginTop: heightPercentageToDP('4.5%'),
                        marginBottom: heightPercentageToDP('3%'),
                        backgroundColor: '#D4D4D4'
                    }}
                    linearButton
                    buttonText={'Add a Card'}
                    textStyle={{ color: '#707070' }}
                />
                <Button
                    buttonStyle={{ alignSelf: 'center' }}
                    buttonText={'Make Payment'}
                />
            </ScrollView>
        </Wrapper>
    )
}

export default Payment;

const styles = StyleSheet.create({
    heading: {
        fontSize: heightPercentageToDP('3%'),
        color: colors.black,
    },
    orderText: {
        fontSize: heightPercentageToDP('2.5%'),
        color: '#707070',
        // marginBottom: heightPercentageToDP('3%')
    }
})