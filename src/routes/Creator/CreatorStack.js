import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatorHome from '../../screens/creator/CreatorHome';
import CreatorVideos from '../../screens/creator/CreatorVideos';
import CreatorPhoto from '../../screens/creator/CreatorPhoto';
import CreatorNotifications from '../../screens/creator/CreatorNotifications';
import CreatorProfile from '../../screens/creator/CreatorProfile';
import CreatorMap from '../../screens/creator/CreatorMap';
import EditProfile from '../../screens/creator/EditProfile';
import UploadPhoto from '../../screens/creator/CreatorUpload';
import CreatorUpload from '../../screens/creator/CreatorUpload';
import Feed from '../../screens/creator/Feed';

const Stack = createNativeStackNavigator();

const CreatorStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='CreatorHome' component={CreatorHome} />
            <Stack.Screen name='CreatorVideos' component={CreatorVideos} />
            <Stack.Screen name='CreatorNotifications' component={CreatorNotifications} />
            <Stack.Screen name='CreatorProfile' component={CreatorProfile} />
            <Stack.Screen name='CreatorMap' component={CreatorMap} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
            <Stack.Screen name='CreatorPhoto' component={CreatorPhoto} />
            <Stack.Screen name='CreatorUpload' component={CreatorUpload} />
            <Stack.Screen name='Feed' component={Feed} />
        </Stack.Navigator>
    )
}

export default CreatorStack;

