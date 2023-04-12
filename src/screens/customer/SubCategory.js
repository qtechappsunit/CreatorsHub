import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import colors from '../../assets/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import SearchBar from '../../components/SearchBar';
import SideOption from '../../components/SideOption';
import SubCategoryCard from '../../components/SubCategoryCard';
import images from '../../assets/images';

const categories = [
    {
        id: 1,
        image1: images.sub,
        image2: images.sub2,
        images3: images.sub3,
        text1: 'SONY',
        text2: 'RED',
        text3: 'CANON'
    },
    {
        id: 2,
        image1: images.sub4,
        image2: images.sub5,
        images3: images.sub6,
        text1: 'DJI',
        text2: 'NIKON',
        text3: 'No preference',
    },
]

const SubCategory = () => {
    return (
        <Wrapper>
            <Header
                text={'SubCategory'}
            />
            <View
                style={{
                    padding: heightPercentageToDP('4%'),
                    paddingTop: heightPercentageToDP('1%')
                }}
            >
                <Text
                    style={{
                        color: colors.black,
                    }}>Choose camera preference if you have one</Text>
                <SearchBar />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: heightPercentageToDP('20%'), paddingTop: heightPercentageToDP('2%'), }}
                >

                    {categories.map((item) => (
                        <SubCategoryCard
                            image1={item.image1}
                            text1={item.text1}
                            image2={item.image2}
                            text2={item.text2}
                            image3={item.images3}
                            text3={item.text3}
                        />
                    ))}
                </ScrollView>
            </View>
            <SideOption />
        </Wrapper>
    )
}

export default SubCategory;

const styles = StyleSheet.create({

})