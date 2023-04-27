import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Wrapper from '../../components/Wrapper';
import SearchBar from '../../components/SearchBar';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import MapView from 'react-native-maps';
import Button from '../../components/Button';
import BottomBar from '../../components/BottomBar';
import colors from '../../assets/colors';
import images from '../../assets/images';
import MarkerImages from '../../components/Markers';
import { useNavigation } from '@react-navigation/native';

const markers = [
    {
        id: 1,
        image: images.markerImage,
        lat: 37.78825,
        long: -122.4324
    },
    {
        id: 2,
        image: images.markerImage1,
        lat: 37.777174,
        long: -122.399941
    },
    {
        id: 3,
        image: images.markerImage2,
        lat: 37.773578,
        long: -122.430825
    }, {
        id: 4,
        image: images.markerImage3,
        lat: 37.782872,
        long: -122.462926
    },
    {
        id: 5,
        image: images.markerImage4,
        lat: 37.760346,
        long: -122.444172
    },
    {
        id: 6,
        image: images.markerImage5,
        lat: 37.768327,
        long: -122.454128
    },
    {
        id: 7,
        image: images.markerImage6,
        lat: 37.759371,
        long: -122.420483
    }
]

const CreatorMap = () => {

    const navigation = useNavigation();

    return (
        <Wrapper>
            <ScrollView contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <SearchBar />
                <View
                    style={{
                        paddingTop: heightPercentageToDP('3%'),
                        height: heightPercentageToDP('64%'),
                    }}
                >
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        scrollEnabled={false}
                        style={styles.map}
                    >
                        {markers.map((item) => (
                            <MarkerImages
                                key={item.id}
                                image={item.image}
                                lat={item.lat}
                                long={item.long}
                            />
                        ))}
                    </MapView>
                    <View style={styles.radiusWrapper}>
                        <View style={styles.mapRadius} />
                        <View style={[styles.mapRadius, { padding: heightPercentageToDP('13.5%') }]} />
                        <View style={[styles.mapRadius, { padding: heightPercentageToDP('9.5%') }]} />
                    </View>
                </View>
                <Button
                    buttonText={'Next'}
                    buttonStyle={{ alignSelf: 'center', marginTop: heightPercentageToDP('4%') }}
                    onPress={() => alert('working')}
                />
            </ScrollView>
            <BottomBar
                active={'MORE'}
                activeBar={'MAP'}
            />
        </Wrapper>
    )
}

export default CreatorMap;

const styles = StyleSheet.create({
    container: {
        padding: heightPercentageToDP('2.5%'),
        paddingTop: heightPercentageToDP('7%'),
    },
    map: {
        height: '100%',
        width: '100%',
    },
    mapRadius: {
        borderRadius: 200,
        borderWidth: 2,
        borderColor: colors.primary,
        position: 'absolute',
        padding: heightPercentageToDP('17%'),
        // height: 200,
        // width: 200,
        backgroundColor: 'rgba(163, 143, 163, 0.2)'
    },
    // border: {
    //     borderRadius: 300,
    //     position: 'absolute',
    //     borderWidth: 2,
    //     borderColor: colors.primary,
    //     bottom: 35,
    //     top: 35,
    //     left: 35,
    //     right: 35,
    // },
    // borderMap: {
    //     borderRadius: 300,
    //     position: 'absolute',
    //     borderWidth: 2,
    //     borderColor: colors.primary,
    //     bottom: 75,
    //     top: 75,
    //     left: 75,
    //     right: 75,
    // },
    image: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 100,
        height: heightPercentageToDP('12%'),
        width: heightPercentageToDP('12%'),
    },
    radiusWrapper: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        left: 0,
        bottom: 0,
        top: 0
    }

})