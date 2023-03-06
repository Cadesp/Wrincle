import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';






export default function EventPage({ route, navigation }) {
  const insets = useSafeAreaInsets();
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  return (
    <><SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style='alignItems: '>Match Summary {route.params.paramKey} </Text>
        <Button title="Back to Home" onPress={() => { navigation.navigate('HomeScreen'); ScreenOrientation.unlockAsync(); } } />
      </View>
      <TextInput 
        style={styles.input}
        placeholder= "Time"
        placeholderTextColor = 'black'
        textAlign='center' />
        <TextInput 
        style={styles.input}
        placeholder= "Position"
        placeholderTextColor = 'black'
        textAlign='center' />
        <TextInput 
        style={styles.input}
        placeholder= "Position"
        placeholderTextColor = 'black'
        textAlign='center' />
        <TextInput 
        style={styles.input}
        placeholder= "Riding Time"
        placeholderTextColor = 'black'
        textAlign='center' />
        <TextInput 
        style={styles.input}
        placeholder= "Period"
        placeholderTextColor = 'black'
        textAlign='center' />
        <TextInput 
        style={styles.input}
        placeholder= "Overtime"
        placeholderTextColor = 'black'
        textAlign='center' />
    </SafeAreaView>
        </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
   
    width: '15%',
    backgroundColor: 'skyblue',
    alignItems: "left",
    

  },
  safeView: {
    
    backgroundColor: 'white',
    justifyContent: 'center',
    flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center', 
        gap: '10rem',
        justifyContent: 'center',

  },
  mainSection: {
    height: '80%',
    alignItems: "center", 
    justifyContent: "center",
  },
  titleText: {
    alignItems: "center",
    fontFamily: "Arial",
    font: "Arial Black",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  input: {
    alignItems: 'stretch',
    width: 75,
    height: 25,
    margin: 10,
    borderWidth: 2,
    padding: 10,
    fontColor: 'black',
  },
checkInput: {
    alignItems: 'stretch',
    width: 150,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontColor: 'black',
    flexDirection: 'row',
}
});