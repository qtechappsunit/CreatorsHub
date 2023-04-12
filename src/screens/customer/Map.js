import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import Header from '../../components/Header';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import SearchBar from '../../components/SearchBar';
import MapView from 'react-native-maps';
import Button from '../../components/Button';

const Map = () => {
    return (
        <Wrapper>
            <Header
                text={'Map'}
            />
            <View
                style={{
                    padding: heightPercentageToDP('5%'),
                    paddingTop: heightPercentageToDP('0%')
                }}
            >
                <Text
                    style={{
                        fontSize: heightPercentageToDP('2%'),
                        color: '#BDBDBD'
                    }}
                >Location</Text>
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
                        backgroundColor: 'red',
                        height: heightPercentageToDP('60%'),
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
                    buttonStyle={{ marginTop: heightPercentageToDP('4.5%') }}
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
    }
})