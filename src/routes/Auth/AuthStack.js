import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../../screens/auth/GetStarted';
import Signin from '../../screens/auth/Signin';
import Signup from '../../screens/auth/Signup';
import Home from '../../screens/customer/Home';
import Walkthrough from '../../screens/customer/Walkthrough';
import Creators from '../../screens/customer/Creators';
import NewPassword from '../../screens/auth/NewPassword';
import RequestPassword from '../../screens/auth/RequestPassword';
import SuccessPassword from '../../screens/auth/SuccessPassword';
import SubCategory from '../../screens/customer/SubCategory';
import CameraCategory from '../../screens/customer/CameraCategory';
import Describe from '../../screens/customer/Describe';
import Map from '../../screens/customer/Map';
import ShootCalendar from '../../screens/customer/ShootCalendar';
import BookingDetails from '../../screens/customer/BookingDetails';
import SubmitVideos from '../../screens/customer/SubmitVideos';
import Payment from '../../screens/customer/Payment';
import AddCard from '../../screens/customer/AddCard';
import Subscription from '../../screens/customer/Subscription';
import ContactUs from '../../screens/customer/ContactUs';


const Stack = createNativeStackNavigator();

const AuthStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {/* <Stack.Screen name='GetStarted' component={GetStarted} /> */}
            {/* <Stack.Screen name='Signin' component={Signin} /> */}
            {/* <Stack.Screen name='Signup' component={Signup} /> */}
            {/* <Stack.Screen name='Home' component={Home} /> */}
            {/* <Stack.Screen name='Walkthrough' component={Walkthrough} /> */}
            {/* <Stack.Screen name='Creator' component={Creators} /> */}
            {/* <Stack.Screen name='NewPassword' component={NewPassword} /> */}
            {/* <Stack.Screen name='RequestPassword' component={RequestPassword} /> */}
            {/* <Stack.Screen name='SuccessPassword' component={SuccessPassword} /> */}
            {/* <Stack.Screen name='SubCategory' component={SubCategory} /> */}
            {/* <Stack.Screen name='CameraCategory' component={CameraCategory} /> */}
            {/* <Stack.Screen name='Describe' component={Describe} /> */}
            {/* <Stack.Screen name='Map' component={Map} /> */}
            {/* <Stack.Screen name='ShootCalendar' component={ShootCalendar} /> */}
            {/* <Stack.Screen name='BookingDetails' component={BookingDetails} /> */}
            {/* <Stack.Screen name='SubmitVideos' component={SubmitVideos} /> */}
            {/* <Stack.Screen name='Payment' component={Payment} /> */}
            {/* <Stack.Screen name='AddCard' component={AddCard} /> */}
            {/* <Stack.Screen name='Subscription' component={Subscription} /> */}
            <Stack.Screen name='ContactUs' component={ContactUs} />
        </Stack.Navigator>
    )
}

export default AuthStack;