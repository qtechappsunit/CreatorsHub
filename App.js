import React from 'react';
import { Text, View } from 'react-native';
import Routes from './src/routes/Index';
import Provider from './src/routes/Context/Provider';

const App = () => {

  return (
    <Provider>
      <Routes />
    </Provider>

  )
}

export default App;
