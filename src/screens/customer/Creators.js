import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import SearchBar from '../../components/SearchBar';
import SideOption from '../../components/SideOption';
import CreatorsCard from '../../components/CreatorsCard';
import images from '../../assets/images';

const creator = [
    {
        id: 1,
        images: images.creator2,
        text: 'Fitness'
    },
    {
        id: 2,
        images: images.creator3,
        text: 'Product'
    },
    {
        id: 3,
        images: images.creator4,
        text: 'Event',
    },
    {
        id: 4,
        images: images.creator5,
        text: 'Interview'
    }
]



const Creators = () => {
    return (
        <Wrapper>
            <Header
                text={'Creators'}
            />
            <View
                style={{
                    marginLeft: heightPercentageToDP('3%')
                }}
            >
                <Text
                    style={{
                        color: colors.black,
                        fontSize: heightPercentageToDP('1.9%')
                    }}
                >VIDEO SHOOT</Text>
            </View>
            <View
                style={{
                    padding: heightPercentageToDP('4%'),
                    paddingTop: heightPercentageToDP('1%')
                }}
            >
                <SearchBar />
                <ScrollView
                    contentContainerStyle={{ paddingBottom: heightPercentageToDP('22%') }}
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('3%'),
                            alignItems: 'center'
                        }}
                    >
                        <CreatorsCard
                            image={images.creator}
                            text={'Fashion'}
                            add
                        />

                    </View>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('4%'),
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginLeft: heightPercentageToDP('-1%')
                        }}
                    >
                        <FlatList
                            data={creator}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            renderItem={({ item, index }) => (
                                <CreatorsCard
                                    key={index}
                                    image={item.images}
                                    imageStyle={styles.image}
                                    text={item.text}
                                    wrapperStyle={{ right: heightPercentageToDP('8%') }}
                                    componentWrapper={{ marginRight: 20, marginBottom: heightPercentageToDP('5%') }}
                                    textStyle={{ fontSize: heightPercentageToDP('2%') }}
                                    add
                                />
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
            <SideOption />
        </Wrapper>
    )
}

export default Creators;

const styles = StyleSheet.create({
    image: {
        height: heightPercentageToDP('30%'),
        width: heightPercentageToDP('20.5%'),

    }
})