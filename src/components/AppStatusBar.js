import React from 'react';
import { StatusBar } from 'react-native';

const AppStatusBar = () => {
    return (
        <StatusBar 
            barStyle={'dark-content'}
            backgroundColor={'transparent'}
            translucent={true}
        />
    )
}

export default AppStatusBar;