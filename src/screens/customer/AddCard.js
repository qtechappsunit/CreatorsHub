import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import PaymentCard from '../../components/PaymentCard';
import images from '../../assets/images';
import colors from '../../assets/colors';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';
import InputField from '../../components/InputField';

const newCardButtons = [
    {
        id: 1,
        text: 'Scott Wolfe'
    },
    {
        id: 2,
        text: '2343 4545 6567 6789'
    },
    {
        id: 3,
        text: 'Issue on: March 2019'
    },
    {
        id: 4,
        text: 'Expire on: March 2024'
    }
]

const AddCard = () => {
    const [cardAdd, setCardAdd] = useState(false);

    const navigation = useNavigation();

    return (
        <Wrapper>
            <Header
                text={'Add a Card'}
            />
            <ScrollView
                contentContainerStyle={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('5%')
                }}
                showsVerticalScrollIndicator={false}
            >
                {cardAdd ?
                    <>
                        {newCardButtons.map((item) => (
                            <InputField
                                key={item.id}
                                placeholder={item.text}
                                textColor={colors.white}
                                inputStyle={{ backgroundColor: '#D4D4D4', alignSelf: 'center' }}
                            />
                        ))}
                        <Button
                            buttonText={'Continue'}
                            buttonStyle={{ alignSelf: 'center', marginTop: heightPercentageToDP('7%') }}
                            onPress={() => navigation.navigate('Payment')}
                        />
                    </> : <>
                        {/* <Text
                            style={{
                                fontSize: heightPercentageToDP('2.5%'),
                                color: colors.black
                            }}
                        >Add New Card</Text> */}
                        <View
                            style={{
                                paddingTop: heightPercentageToDP('20%'),
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.primary,
                                    fontSize: heightPercentageToDP('3%'),
                                    fontWeight: 'bold',
                                }}
                            >Currently there are no cards</Text>
                        </View>
                    </>
                }
            </ScrollView>
            {!cardAdd &&
                <Button
                    buttonStyle={{ backgroundColor: '#D4D4D4', marginBottom: heightPercentageToDP('7%'), alignSelf: 'center' }}
                    buttonText={'Add a Card'}
                    onPress={() => setCardAdd(true)}
                    linearButton
                />
            }
            <BottomBar
                active={'BOOK'}
            />
        </Wrapper>
    )
}

export default AddCard;

const styles = StyleSheet.create({

})