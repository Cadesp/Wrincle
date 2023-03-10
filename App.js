import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer, HeaderBackButton } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import HomeScreen from './components/HomeScreen.js';
import NewMatch from './components/NewMatch.js';
import EventPage from './components/EventPage.js';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: 'Wrestling Statistics',
         headerStyle: {backgroundColor: 'skyblue'},
         headerTintColor: 'white',
         headerTitleStyle: {fontWeight: 'bold'},}}>
        <Stack.Screen name="HomeScreen"
         component={HomeScreen}
         
         
         />
        <Stack.Screen name="NewMatch" component={NewMatch} options={{title: "Create Match"}}/>
        <Stack.Screen name="EventPage" component={EventPage} options={{
          // headerLeft:(<HeaderBackButton onPress={()=>{navigation.navigate('NewMatch'); ScreenOrientation.unlockAsync();}}/>),
          title: "Event Creator"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
