import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import CreatorHeader from '../../components/CreatorHeader';
import SearchBar from '../../components/SearchBar';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import OptionsCard from '../../components/OptionsCard';
import images from '../../assets/images';
import colors from '../../assets/colors';
import BottomBar from '../../components/BottomBar';
import { useNavigation } from '@react-navigation/native';

const Cards = [
    {
        id: 1,
        image: images.option1,
        text: 'Video',
        background: false
    },
    {
        id: 2,
        image: images.option2,
        text: 'Motion Graphics',
        background: true
    },
    {
        id: 3,
        image: images.option3,
        text: 'PhotoGraphy',
        background: false
    },
    {
        id: 4,
        image: images.option4,
        text: 'Audio Mastering',
        background: true
    },
    {
        id: 5,
        image: images.option5,
        text: 'Content',
        background: true
    }
]

const CreatorHome = () => {

    const navigation = useNavigation();

    const onOptionPress = (id) => {
        if (id == '1') {
            navigation.navigate('CreatorVideos')
        }
        else if (id == '3') {
            navigation.navigate('CreatorPhoto')
        } else {
            alert('working')
        }
    }

    return (
        <Wrapper>
            <CreatorHeader
                headerText={'Creators'}
                iconStyle={{ marginTop: heightPercentageToDP('1.5%') }}
                iconColor={colors.black}
            />
            <View style={styles.container}>
                <SearchBar />
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: heightPercentageToDP('40%'),
                        paddingTop: heightPercentageToDP('3%')
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {Cards.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={1}
                            onPress={() => onOptionPress(item.id)}
                        >
                            <OptionsCard
                                key={item.id}
                                image={item.image}
                                text={item.text}
                                background={item.background}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0
                }}
            >
                <BottomBar
                    style={{ width: '97%' }}
                    active={'HOME'}
                />
            </View>
        </Wrapper>
    )
}

export default CreatorHome;

const styles = StyleSheet.create({
    container: {
        padding: heightPercentageToDP('2%'),
    }
})