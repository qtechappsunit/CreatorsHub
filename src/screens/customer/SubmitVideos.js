import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import CreatorsCard from '../../components/CreatorsCard';
import images from '../../assets/images';
import SideOption from '../../components/SideOption';
import Button from '../../components/Button';
import colors from '../../assets/colors';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Video from 'react-native-video';
import BottomBar from '../../components/BottomBar';
import { useNavigation } from '@react-navigation/native';

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
    const [videoURL, setVideoURL] = useState(null)

    const width = Dimensions.get('window').width;
    const navigation = useNavigation();


    const onUploadVideo = async () => {
        const options = {
            title: 'Select video',
            mediaType: 'video',
            storageOptions: {
                skipBackup: true,
                path: 'video',
                quality: 0.5,
            }
        }

        await launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');

            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            }
            else {
                setVideoURL(response.assets[0].uri)
            }
        });

    }
    const addAnotherVideo = () => {
        onUploadVideo()
    }

    return (
        <Wrapper>
            <Header
                text={'Submit Videos'}
            />
            <View
                style={{
                    padding: heightPercentageToDP('2%'),
                    paddingTop: heightPercentageToDP('2%'),
                }}
                showsVerticalScrollIndicator={false}
            >
                {videoURL
                    ?
                    <>
                        <Video
                            source={{ uri: videoURL }}
                            muted={true}
                            controls={true}
                            style={{
                                height: '20%',
                                width: '100%',
                                borderRadius: 15
                            }}
                            resizeMode={'stretch'}
                        />
                        <TouchableOpacity
                            style={{
                                alignItems: 'flex-end'
                            }}
                            onPress={addAnotherVideo}
                            activeOpacity={0.9}
                        >
                            <Text
                                style={styles.text}
                            >Add Another Video</Text>
                        </TouchableOpacity>
                    </>
                    : <>
                        {/* < CreatorsCard
                            image={images.submit}
                            text={'Fashion'}
                            wrapperStyle={{ right: heightPercentageToDP('20%') }}
                        /> */}
                        <View
                            style={styles.uploadView}
                        >
                            <Button
                                onPress={() => onUploadVideo()}
                                buttonStyle={styles.button}
                                buttonText={'Upload Video'}
                                arrowIcon={true}
                            />
                        </View>


                    </>
                }
                <ScrollView
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingTop: heightPercentageToDP('7%'),
                        paddingBottom: heightPercentageToDP('56%')
                    }}
                    showsVerticalScrollIndicator={false}
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
                            paddingTop: heightPercentageToDP('2%')
                        }}
                    >
                        <Button
                            buttonText={'Submit Videos'}
                            onPress={() => navigation.navigate('Payment')}
                        />
                    </View>
                </ScrollView>
            </View>
            <SideOption />
            <View style={styles.wrapper}>
                <BottomBar
                    active={'BOOK'}
                    style={{ width: '97%' }}
                />
            </View>
        </Wrapper>
    )
}

export default SubmitVideos;

const styles = StyleSheet.create({
    text: {
        marginTop: heightPercentageToDP('2%'),
        marginRight: heightPercentageToDP('1%'),
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: heightPercentageToDP('2%')
    },
    uploadView: {
        padding: heightPercentageToDP('5%'),
        backgroundColor: 'lightgray',
        alignItems: 'center',
        borderRadius: heightPercentageToDP('2%'),
        alignSelf: 'center'
    },
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        width: heightPercentageToDP('29%')
    },
    wrapper: {
        position: 'absolute',
        bottom: 0
    }
})