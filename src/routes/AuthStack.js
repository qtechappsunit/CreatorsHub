import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/auth/GetStarted';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';
import NewPassword from '../screens/auth/NewPassword';
import RequestPassword from '../screens/auth/RequestPassword';
import SuccessPassword from '../screens/auth/SuccessPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='GetStarted' component={GetStarted} />
            <Stack.Screen name='Signin' component={Signin} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='NewPassword' component={NewPassword} />
            <Stack.Screen name='RequestPassword' component={RequestPassword} />
            <Stack.Screen name='SuccessPassword' component={SuccessPassword} />
        </Stack.Navigator>
    )
}

export default AuthStack;