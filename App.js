import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* Home Screen  */}
        {/* <Stack.Screen name='Home' component={Home} /> */}
        <Stack.Screen name='Home'>
          {(props) => <Home {...props} channelName={'OUR EDUCATION APP'} /> }
        </Stack.Screen>

        {/* Course Screen  */}
        <Stack.Screen name='Course' component={Course} />

        {/* UserData Screen  */}        
        <Stack.Screen name='Student' component={UserData} />

         {/* About Screen  */}
        <Stack.Screen name='About' component={About} />

        {/* Contact Screen  */}
        <Stack.Screen name='Contact' component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}
