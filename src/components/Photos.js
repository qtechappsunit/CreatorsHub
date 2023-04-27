import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import images from '../assets/images';

const Photos = () => {
    return (
        <View
            style={{
                flexDirection: 'row'
            }}
        >
            <View
                style={{
                    width: '50%',
                }}
            >
                <Image
                    source={images.photo1}
                    style={styles.photoimage}
                />
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <Image
                            source={images.photo4}
                            style={styles.fourthImage}
                        />
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    width: '120%'
                                }}
                            >
                                <Image
                                    source={images.photo7}
                                    style={styles.sevenImage}
                                />
                                <Image
                                    source={images.photo9}
                                    style={styles.ninthImage}
                                />
                            </View>
                            <Image
                                source={images.photo8}
                                style={styles.eightImage}
                            />
                        </View>
                    </View>
                    <Image
                        source={images.photo5}
                        style={styles.fifthImage}
                    />
                    <Image
                        source={images.photo6}
                        style={styles.sixImage}
                    />
                </View>
            </View>
            <Image
                source={images.photo2}
                style={styles.secondImage}
            />
            <Image
                source={images.photo3}
                style={styles.thirdImage}
            />
        </View>
    )
}

export default Photos;

const styles = StyleSheet.create({
    photoimage: {
        width: '100%'
    },
    secondImage: {
        width: '15%'
    },
    thirdImage: {
        width: '35%'
    },
    fourthImage: {
        width: '100%'
    },
    fifthImage: {
        width: '30%'
    },
    sixImage: {
        width: '70%'
    },
    sevenImage: {
        width: '120%'
    },
    eightImage: {
        width: '81%'
    },
    ninthImage: {
        width: '167%'
    },

})