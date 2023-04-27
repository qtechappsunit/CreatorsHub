import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStatusBar from '../components/AppStatusBar';
import SplashScreen from 'react-native-splash-screen';
import CustomerStack from './Customer/CustomerStack';
import CreatorStack from './Creator/CreatorStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    return (
        <NavigationContainer>
            <AppStatusBar />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='AuthStack' component={AuthStack} />
                <Stack.Screen name='CustomerStack' component={CustomerStack} />
                <Stack.Screen name='CreatorStack' component={CreatorStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes