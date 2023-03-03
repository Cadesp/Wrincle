import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';


export default function HomeScreen({ navigation }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);


  return (
    <><Text style={styles.titleText}>Match Summary</Text><View style={styles.mainSection}>
      <TextInput
        style={styles.input}
        placeholder='Time'
        placeholderTextColor='black'
        textAlign='center'
        />
      <TextInput
        style={styles.input}
        placeholder='Position'
        placeholderTextColor='black'
        textAlign='center' />
      <TextInput
        style={styles.input}
        placeholder="Riding Time"
        placeholderTextColor="black"
        textAlign="center" />
      <TextInput
        style={styles.input}
        placeholder="Period"
        placeholderTextColor="black"
        textAlign="center" />
      <View style={styles.checkInput}>
        <Text>Overtime</Text>
      </View>
      </View><Button title="Submit" onPress={() => navigation.navigate('EventPage', { paramKey: nameH })} /></>
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