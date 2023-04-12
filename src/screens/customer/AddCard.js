import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import PaymentCard from '../../components/PaymentCard';
import images from '../../assets/images';
import colors from '../../assets/colors';
import Button from '../../components/Button';

const newCardButtons = [
    {
        id: 1,
        text: 'Scott Wolfe'
    },
    {
        id: 1,
        text: '2343 4545 6567 6789'
    },
    {
        id: 1,
        text: 'Issue on: March 2019'
    },
    {
        id: 1,
        text: 'Expire on: March 2024'
    }
]

const AddCard = () => {
    return (
        <Wrapper>
            <Header
                text={'Add a Card'}
            />
            <ScrollView
                contentContainerStyle={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('7%')
                }}
                showsVerticalScrollIndicator={false}
            >
                <PaymentCard
                    selected={images.card1}
                    cardText={'MasterCard'}
                />
                <View
                    style={{
                        paddingTop: heightPercentageToDP('4%')
                    }}
                >
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('2.5%'),
                            color: colors.black
                        }}
                    >Add New Card</Text>
                </View>
                {newCardButtons.map((item) => (
                    <Button
                        buttonStyle={{
                            backgroundColor: '#D4D4D4',
                            alignSelf: 'center',
                            marginTop: heightPercentageToDP('4%')
                        }}
                        buttonText={item.text}
                        linearButton
                    />
                ))}
                <View
                    style={{
                        alignItems: 'center',
                        paddingTop: heightPercentageToDP('10%')
                    }}
                >
                    <Button
                        buttonStyle={{ backgroundColor: '#D4D4D4', marginBottom: heightPercentageToDP('3%') }}
                        buttonText={'Add a Card'}
                        linearButton
                    />
                    <Button
                        buttonText={'Continue'}
                    />
                </View>
            </ScrollView>
        </Wrapper>
    )
}

export default AddCard;

const styles = StyleSheet.create({

})