import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import SwitchOptions from '../../components/SwitchOptions';
import { ScrollView } from 'react-native-gesture-handler';
import SideOption from '../../components/SideOption';
import fonts from '../../assets/fonts';
import Button from '../../components/Button';

const options = [
    {
        id: 1,
        type: "camera",
        heading: 'How many cameras are needed?',
        text1: '1',
        text2: '2',
        text3: '3',
        text4: 'im not sure'
    },
    {
        id: 2,
        type: "lighting",
        heading: 'Lighting?',
        text2: 'YES',
        text3: 'NO',
        text4: 'im not sure',
    },
    {
        id: 3,
        type: "drone",
        heading: 'Drone?',
        text2: 'YES',
        text3: 'NO',
        text4: 'im not sure',
    },
    {
        id: 4,
        type: "editing",
        heading: 'Editing?',
        text2: 'YES',
        text3: 'NO',
        text4: 'im not sure',
    }
]

const CameraCategory = () => {

    // const [selectedOptions, setSelectOptions] = useState([]);

    const [selectedOptions, setSelectOptions] = useState({});

    // useEffect(()=>{
    //     setSelectOptions(options.map(option => {return {type: option.type, value: ''}}))
    // },[])

    const onOptionPress = (type, value) => {

        setSelectOptions({ ...selectedOptions, [type]: value })

        // const tempOptions = selectedOptions.map(option => {
        //     if(option.type === type) return {...option, value}
        //     return option
        // });

        // setSelectOptions(tempOptions)
    }

    useEffect(() => {
        console.log(selectedOptions)
    }, [selectedOptions])

    return (
        <Wrapper>
            <Header
                text={'Camera Category'}
            />
            <View
                style={{
                    padding: heightPercentageToDP('4%'),
                    paddingTop: heightPercentageToDP('1%')
                }}
            >
                <SearchBar />
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: heightPercentageToDP('2%'), alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                {options.map((item) => (
                    <SwitchOptions
                        heading={item.heading}
                        text1={item.text1}
                        text2={item.text2}
                        text3={item.text3}
                        text4={item.text4}
                        onOptionPress={value => onOptionPress(item.type, value)}
                        selectedValue={selectedOptions[item.type]}
                    />
                ))}
                <View
                    style={{
                        paddingTop: heightPercentageToDP('2%'),
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('2.5%'),
                            color: colors.black,
                            fontFamily: fonts.Medium
                        }}
                    >
                        Additional add ons ?
                    </Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('4%'),

                        }}
                    >
                        <Button
                            linearButton
                            buttonStyle={{ backgroundColor: '#BDBDBD', marginBottom: heightPercentageToDP('3%') }}
                            buttonText={'Describe'}
                        />
                        <Button
                            buttonText={'Next'}
                        />
                    </View>
                </View>
            </ScrollView>
            <SideOption />
        </Wrapper>
    )
}

export default CameraCategory;

const styles = StyleSheet.create({

})