import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import SearchBar from '../../components/SearchBar';
import MapView from 'react-native-maps';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';

const Map = () => {

    const navigation = useNavigation();

    return (
        <Wrapper>
            <Header
                text={'Map'}
            />

            <Text
                style={{
                    fontSize: heightPercentageToDP('2%'),
                    color: '#BDBDBD',
                    marginLeft: heightPercentageToDP('3%')
                }}
            >Location</Text>
            <ScrollView
                contentContainerStyle={{
                    padding: heightPercentageToDP('3%'),
                    paddingBottom: heightPercentageToDP('15%')
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        paddingTop: heightPercentageToDP('1%'),
                        marginBottom: heightPercentageToDP('3%')
                    }}
                >
                    <SearchBar />
                </View>
                <View
                    style={{
                        borderRadius: 30,
                        overflow: "hidden",
                        height: heightPercentageToDP('55%'),
                    }}
                >
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        style={styles.map}
                    />
                </View>
                <Button
                    buttonText={'Shoot on calendar'}
                    buttonStyle={{ marginTop: heightPercentageToDP('4.5%'), alignSelf: 'center' }}
                    onPress={() => navigation.navigate('ShootCalendar')}
                />
            </ScrollView>
            <View style={styles.wrapper}>
                <BottomBar
                    active={'BOOK'}
                    style={{ width: '97%' }}
                    barStyle={{ bottom: heightPercentageToDP('9.6%') }}
                />
            </View>
        </Wrapper>
    )
}

export default Map;

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    },
    wrapper: {
        position: 'absolute',
        bottom: 0
    }
})