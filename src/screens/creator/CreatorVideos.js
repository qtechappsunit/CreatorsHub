import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Wrapper from '../../components/Wrapper';
import CreatorHeader from '../../components/CreatorHeader';
import VideoCard from '../../components/VideoCard';
import SearchBar from '../../components/SearchBar';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import images from '../../assets/images';
import colors from '../../assets/colors';
import BottomBar from '../../components/BottomBar';
import Add from 'react-native-vector-icons/Ionicons';


const Video = [
    {
        id: 1,
        image: images.creatorVideo,
        add: false
    },
    {
        id: 2,
        image: images.creatorVideo2,
        add: true
    }
]

const CreatorVideos = () => {
    return (
        <Wrapper>
            <CreatorHeader
                headerText={'Videos'}
                iconStyle={{ marginTop: heightPercentageToDP('1.5%') }}
                iconColor={colors.black}
            />
            <ScrollView contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <SearchBar />
                <View
                    style={{
                        paddingTop: heightPercentageToDP('4%')
                    }}
                >
                    {Video.map((item) => (
                        <VideoCard
                            key={item.id}
                            image={item.image}
                            add={item.add}
                        />
                    ))}
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.addView}
                activeOpacity={0.9}
                onPress={() => alert('working in progress')}
            >
                <Add
                    name={'add'}
                    color={colors.white}
                    size={36}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0
                }}
            >
                <BottomBar
                    style={{ width: '95%' }}
                />
            </View>
        </Wrapper>
    )
}

export default CreatorVideos;

const styles = StyleSheet.create({
    container: {
        padding: heightPercentageToDP('3%'),
        paddingBottom: heightPercentageToDP('10%')
    },
    addView: {
        position: 'absolute',
        bottom: heightPercentageToDP('12%'),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.primary,
        padding: heightPercentageToDP('0.5%'),
        borderRadius: 100,
    },
    icon: {
        marginLeft: heightPercentageToDP('0.3%')
    }
})