import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatorHome from '../../screens/creator/CreatorHome';
import CreatorMore from '../../screens/creator/CreatorMore';

const Stack = createBottomTabNavigator();

const CreatorStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='CreatorHome' component={CreatorHome} />
            <Stack.Screen name='CreatorMore' component={CreatorMore} />
        </Tab.Navigator>
    )
}

export default CreatorStack;