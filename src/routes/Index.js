import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './Auth/AuthStack';
import AppStatusBar from '../components/AppStatusBar';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    useEffect(()=>{
        SplashScreen.hide()
    },[])
    return (
        <NavigationContainer>
            <AppStatusBar />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='AuthStack' component={AuthStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes