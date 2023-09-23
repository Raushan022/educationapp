import React from 'react';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name='Home' component={Home} /> */}
        <Stack.Screen name='Home'>
          {(props) => <Home {...props} channelName={'OUR EDUCATION APP'} /> }
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  )
}
