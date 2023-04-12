import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CreatorsCard from '../../components/CreatorsCard';
import images from '../../assets/images';
import SideOption from '../../components/SideOption';
import Button from '../../components/Button';

const videoButtons = [
    {
        id: 1,
        text: 'Videos title'
    },
    {
        id: 2,
        text: 'Video Category'
    },
    {
        id: 3,
        text: 'Tags'
    },
    {
        id: 4,
        text: 'Dimensions'
    }
]

const SubmitVideos = () => {
    return (
        <Wrapper>
            <Header
                text={'Submit Videos'}
            />
            <ScrollView
                contentContainerStyle={{
                    padding: heightPercentageToDP('2%'),
                    paddingTop: heightPercentageToDP('2%')
                }}
            >
                <CreatorsCard
                    image={images.submit}
                    text={'Fashion'}
                    wrapperStyle={{ right: heightPercentageToDP('20%') }}
                />
                <View
                    style={{
                        alignItems: 'center',
                        paddingTop: heightPercentageToDP('10%')
                    }}
                >
                    {videoButtons.map((item, i) => (
                        <Button
                            key={i}
                            buttonText={item.text}
                            linearButton={true}
                            buttonStyle={{ backgroundColor: '#D4D4D4', marginBottom: heightPercentageToDP('3%') }}
                        />
                    ))}
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('4%')
                        }}
                    >
                        <Button
                            buttonText={'Submit Videos'}
                        />
                    </View>
                </View>
            </ScrollView>
            <SideOption />
        </Wrapper>
    )
}

export default SubmitVideos;

const styles = StyleSheet.create({

})