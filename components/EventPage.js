import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';






export default function EventPage({ route, navigation }) {
  const insets = useSafeAreaInsets();
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  return (
    <SafeAreaView style={styles.safeView}>
    <View  style={styles.container}>
      <Text style='alignItems: '>Match Summary {route.params.paramKey} </Text>
      <Button title="Back to Home" onPress={() => {navigation.navigate('HomeScreen'); ScreenOrientation.unlockAsync();}}/>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
   
    width: '15%',
    backgroundColor: 'skyblue',
    alignItems: "left",
    

  },
  safeView: {
    
    backgroundColor: 'gray',
    justifyContent: 'center',

  },
  mainSection: {
    height: '80%',
    alignItems: "center", 
    justifyContent: "center"
  },
  titleText: {
    alignItems: "center",
    fontFamily: "Arial",
    font: "Arial Black",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  }
});