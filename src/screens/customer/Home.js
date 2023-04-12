import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import ProfileAvatar from '../../components/ProfileAvatar';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import PhotographerCard from '../../components/PhotographerCard';
import images from '../../assets/images';
import SideOption from '../../components/SideOption';
import PhotosCard from '../../components/PhotosCard';

const photographers = [
    {
        id: 1,
        image: images.photographer1,
        name: 'Crystal Philips',
        text: 'Photographer Editor'
    },
    {
        id: 2,
        image: images.photographer2,
        name: 'Todd Doram',
        text: 'Studio Films Making'
    },
    {
        id: 3,
        image: images.photographer3,
        name: 'Patrick Schultz',
        text: 'Fashion, Product Photography'
    },
    {
        id: 4,
        image: images.photographer6,
        name: 'Lauren Jones',
        text: 'Photographer Video'
    },
    {
        id: 5,
        image: images.photographer5,
        name: 'William Rogers',
        text: 'DP, Colorist, VFX'
    },
    {
        id: 6,
        image: images.photographer4,
        name: 'Roy Crawford',
        text: 'Camera'
    }
]

const photoCard = [
    {
        id: 1,
        image: images.photo,
        icon: true,
        profile: images.photographer,
        name: 'Jake Larson',
        skill: 'Producer, Editor, Director'
    },
    {
        id: 1,
        image: images.photo2,
        icon: false,
        profile: images.photographer,
        name: 'Jake Larson',
        skill: 'Producer, Editor, Director'
    }
]

const Home = () => {
    return (
        <Wrapper>
            <View
                style={{
                    paddingTop: heightPercentageToDP('3%'),
                }}
            >
                <ProfileAvatar />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        paddingTop: heightPercentageToDP('0.5%'),
                        padding: heightPercentageToDP('4%')
                    }}
                >
                    <Text
                        style={{
                            fontSize: heightPercentageToDP('3%'),
                            color: colors.black,
                            fontFamily: fonts.Medium
                        }}
                    >TOP PHOTOGRAPHER</Text>
                    <View
                        style={{
                            paddingTop: heightPercentageToDP('2%'),
                        }}
                    >
                        <FlatList
                            numColumns={3}
                            data={photographers}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, index }) => (
                                <PhotographerCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    skill={item.text}
                                />
                            )}
                        />
                        {photoCard.map((item) => (
                            <PhotosCard
                                image={item.image}
                                icon={item.icon}
                                profile={item.profile}
                                name={item.name}
                                skill={item.skill}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
            <SideOption />
        </Wrapper>
    )
}

export default Home;

const styles = StyleSheet.create({

})