import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import colors from '../../assets/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import SearchBar from '../../components/SearchBar';
import SideOption from '../../components/SideOption';
import SubCategoryCard from '../../components/SubCategoryCard';
import images from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';

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

    const navigation = useNavigation();


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
                    contentContainerStyle={{ paddingBottom: heightPercentageToDP('30%'), paddingTop: heightPercentageToDP('2%'), }}
                >

                    {categories.map((item) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CameraCategory')}
                            activeOpacity={1}
                            key={item.id}
                        >
                            <SubCategoryCard
                                key={item.id}
                                image1={item.image1}
                                text1={item.text1}
                                image2={item.image2}
                                text2={item.text2}
                                image3={item.images3}
                                text3={item.text3}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <SideOption />
            <View
                style={styles.wrapper}
            >
                <BottomBar
                    active={'BOOK'}
                    style={{ width: '97%' }}
                />
            </View>
        </Wrapper>
    )
}

export default SubCategory;

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0
    }
})