import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../assets/colors';
import Arrow from 'react-native-vector-icons/EvilIcons';
import DatePicker from 'react-native-date-picker'

const BookingCard = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [time, setTime] = useState(true)

    const onDatePicker = () => {
        setOpen(true)
    }

    return (
        <View style={styles.bookingDate}>
            <TouchableOpacity
                onPress={() => onDatePicker()}
                activeOpacity={0.9}
            >
                <DatePicker
                    modal
                    mode='time'
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                <Text
                    style={styles.time}>{date.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            <View style={styles.availableView}>
                <View>
                    <Text style={styles.availableText}>Available</Text>
                    <Text style={{ fontSize: heightPercentageToDP('1.4%'), color: '#8B9091' }}>Chat, audio or video format</Text>
                </View>
                <Arrow
                    name={'arrow-right'}
                    size={40}
                    color={colors.primary}
                    onPress={() => alert('work in progress')}
                />
            </View>
        </View >
    )
}

export default BookingCard;

const styles = StyleSheet.create({
    bookingDate: {
        padding: heightPercentageToDP('2%'),
        backgroundColor: '#F3F3F3',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    time: {
        fontSize: heightPercentageToDP('2.2%'),
        color: '#8B9091',
    },
    availableView: {
        padding: heightPercentageToDP('1%'),
        backgroundColor: colors.white,
        width: heightPercentageToDP('28%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginLeft: heightPercentageToDP('1.2%')
    },
    availableText: {
        fontSize: heightPercentageToDP('2.4%'),
        color: colors.black
    }
})