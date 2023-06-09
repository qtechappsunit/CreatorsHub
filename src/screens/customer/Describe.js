import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import DescribeInput from '../../components/DescribeInput';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';

const Describe = () => {

    const navigation = useNavigation();

    return (
        <Wrapper>
            <Header
                text={'Describe'}
            />
            <View
                style={{
                    paddingTop: heightPercentageToDP('2%'),
                    padding: heightPercentageToDP('6%')
                }}
            >
                <DescribeInput
                    placeholder={'Describe a message'}
                />
            </View>
            <View
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flex: 1,
                    marginBottom: heightPercentageToDP('5%')
                }}
            >
                <Button
                    buttonText={'Next'}
                    onPress={() => navigation.navigate('Map')}
                />
            </View>
            <BottomBar
                active={'BOOK'}
            />
        </Wrapper>
    )
}

export default Describe;

const styles = StyleSheet.create({

})