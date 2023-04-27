import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Profile from '../../components/Profile';
import images from '../../assets/images';
import UploadPhoto from '../../components/UploadPhoto';
import DescribeInput from '../../components/DescribeInput';
import BottomBar from '../../components/BottomBar';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const CreatorUpload = ({ route }) => {
    const URL = route.params.imageURL;
    console.log('uriiiiii', URL)

    const navigation = useNavigation();

    return (
        <Wrapper>
            <ScrollView
                contentContainerStyle={{
                    paddingTop: heightPercentageToDP('7%'),
                    padding: heightPercentageToDP('3%'),
                    paddingBottom: heightPercentageToDP('4%'),
                    flexGrow: 1
                }}
                showsVerticalScrollIndicator={false}
            >
                <Profile
                    name={'Jason'}
                    image={images.upload}
                />
                <View
                    style={{
                        paddingTop: heightPercentageToDP('1.5%')
                    }}
                >
                    <UploadPhoto
                        image={{ uri: URL }}
                    />
                </View>
                <View
                    style={{
                        paddingTop: heightPercentageToDP('2.5%')
                    }}
                >
                    <DescribeInput
                        placeholder={'Write a caption'}
                        style={{ height: heightPercentageToDP('13%') }}
                    />
                    <Button
                        buttonText={'Done'}
                        buttonStyle={{ alignSelf: 'center', marginTop: heightPercentageToDP('3.5%') }}
                        onPress={() => navigation.navigate('Feed')}
                    />
                </View>
            </ScrollView>
            <BottomBar />
        </Wrapper>
    )
}

export default CreatorUpload;

const styles = StyleSheet.create({

})