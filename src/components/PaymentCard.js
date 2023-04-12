import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import Check from 'react-native-vector-icons/Ionicons';

const PaymentCard = ({ image, card, cardText, cardStyle, selected }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            {selected &&
                <Image
                    source={selected}
                    style={styles.cardImage}
                />
            }
            <View style={[styles.cardView, selected && styles.card, cardStyle
            ]}>
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    {card &&
                        <Image
                            source={card}
                            style={styles.image}
                        />
                    }
                    <View
                        style={{
                            marginLeft: heightPercentageToDP('2%')
                        }}
                    >
                        <Text
                            style={{
                                fontSize: heightPercentageToDP('3%'),
                                color: colors.black,
                                fontFamily: fonts.Bold
                            }}
                        >{cardText}</Text>
                        <Text style={{ fontSize: heightPercentageToDP('2%') }}>1234 - 666 - 9876</Text>
                    </View>
                </View>
                {selected ?
                    <Check
                        name={'md-checkmark-circle'}
                        size={65}
                        color={colors.primary}
                        style={{ alignSelf: 'center', }}
                    />
                    :
                    <View style={styles.iconView}>
                        <Check
                            name={'md-checkmark-sharp'}
                            color={'#3A3A3A'}
                            size={30}
                            style={{ position: 'absolute' }}
                        />
                    </View>

                }
            </View>
        </View>
    )
}

export default PaymentCard;

const styles = StyleSheet.create({
    cardImage: {
        height: heightPercentageToDP('9%'),
        width: heightPercentageToDP('9%')
    },
    image: {
        height: heightPercentageToDP('6%'),
        width: heightPercentageToDP('6%'),
        alignSelf: 'center'
    },
    cardView: {
        padding: heightPercentageToDP('0.5%'),
        backgroundColor: 'rgba(222,222,222,0.5)',
        width: heightPercentageToDP('43%'),
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 15,
        marginBottom: heightPercentageToDP('5%')
    },
    iconView: {
        padding: heightPercentageToDP('4%'),
        width: heightPercentageToDP('4%'),
        borderRadius: 100,
        backgroundColor: '#DEDEDE',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: heightPercentageToDP('1%')
    },
    card: {
        backgroundColor: '#DEDEDE',
        width: heightPercentageToDP('33%'),
        padding: heightPercentageToDP('1%'),
        marginLeft: heightPercentageToDP('1.5%')
    }
})