import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';




export default function EventPage({ route, navigation }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  return (
    <View style={styles.mainSection}>
      <Text>Event Creation Page {route.params.paramKey} </Text>
      <Button title="Back to Home" onPress={() => {navigation.navigate('HomeScreen'); ScreenOrientation.unlockAsync();}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '15%',
    backgroundColor: 'skyblue',
    alignItems: "center",
    justifyContent: "center",

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