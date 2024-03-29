import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function HomeScreen({ navigation }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  return (
   
    <View style={styles.mainSection}>
      <Text>Home Screen</Text>
      <Button title="Create New Match" onPress={() => navigation.navigate('NewMatch')}/>
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