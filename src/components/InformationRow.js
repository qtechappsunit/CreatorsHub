import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const InformationRow = ({icon,text}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginBottom: heightPercentageToDP('2.5%')
            }}
        >
            <Icon
                name={icon}
                size={22}
                color={colors.primary}
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default InformationRow;

const styles = StyleSheet.create({
    text: {
        color: colors.black,
        fontSize: heightPercentageToDP('2%'),
        marginLeft: heightPercentageToDP('1.5%')
    }
})