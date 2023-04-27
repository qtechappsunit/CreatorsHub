import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CalendarSwitch from '../../components/CalendarSwitch';
import CalendarPicker from 'react-native-calendar-picker';
import colors from '../../assets/colors';
import SideOption from '../../components/SideOption';
import BookingCard from '../../components/BookingCard';
import BottomBar from '../../components/BottomBar';

const ChooseOption = [
    {
        id: 1,
        text: 'Current',
    },
    {
        id: 2,
        text: 'History',
    }
]


const ShootCalendar = () => {
    const [button, setButton] = useState(1)

    const onOptionPress = (ID) => {
        setButton(ID)
    }


    return (
        <Wrapper>
            <Header
                text={'Shoot on Calendar'}
            />
            <View
                style={{
                    padding: heightPercentageToDP('3%'),
                    paddingTop: heightPercentageToDP('2%')
                }}
            >
                <View style={styles.switchView}>
                    {ChooseOption.map((item) => (
                        <TouchableOpacity
                            onPress={() => onOptionPress(item.id)}
                            key={item.id}
                        >
                            <CalendarSwitch
                                key={item.id}
                                text={item.text}
                                style={button != item.id && { backgroundColor: '#CACACA' }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('5%')
                    }}
                >
                    <View
                        style={{
                            padding: heightPercentageToDP('1%'),
                            backgroundColor: colors.white,
                            borderRadius: 20,
                            width: '108%',
                            alignSelf: 'center'
                        }}
                    >
                        <CalendarPicker
                            startFromMonday={true}
                            selectedDayColor={colors.primary}
                            selectedDayTextColor={colors.white}
                            todayBackgroundColor={colors.primary}
                            allowRangeSelection={true}
                            previousTitleStyle={{ color: colors.black }}
                            nextTitleStyle={{ color: colors.black }}
                            headerWrapperStyle={{ padding: heightPercentageToDP('2%') }}
                        />
                    </View>
                    <View
                        style={{ paddingTop: heightPercentageToDP('4%') }}
                    >
                        <BookingCard />
                    </View>
                </View>
            </View>
            <SideOption />
            <View style={styles.wrapper}>
                <BottomBar
                    active={'BOOK'}
                    style={{ width: '97%' }}
                />
            </View>
        </Wrapper>
    )
}

export default ShootCalendar;

const styles = StyleSheet.create({
    switchView: {
        backgroundColor: '#F3F3F3',
        padding: heightPercentageToDP('1%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        borderRadius: 50,
        alignSelf: 'center'
    },
    wrapper: {
        position: 'absolute',
        bottom: 0
    }
})