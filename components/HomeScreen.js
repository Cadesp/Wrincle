import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function HomeScreen({ navigation }) {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
    <Text style={styles.titleText}>Match Summary</Text>
    <View style={styles.mainSection}>
      <TextInput 
          style={styles.input}
          placeholder='Time'
          placeholderTextColor='black'
          textAlign='center'
          value={timeH}
          onChangeText={(timeH) => setNameH(timeH)}
          
      />
      <TextInput 
          style={styles.input}
          placeholder='Position'
          placeholderTextColor='black'
          textAlign='center'
      />
      <TextInput 
          style={styles.input}
          placeholder="Riding Time"
          placeholderTextColor="black"
          textAlign="center"
      />
      <TextInput 
          style={styles.input}
          placeholder="Period"
          placeholderTextColor="black"
          textAlign="center"
      />
      <View style={styles.checkInput}>
      <Text>Overtime</Text>
      <Checkbox style={{marginLeft: 25}} value={natQualH} onValueChange={setNatQualH}/> 
      </View>
      
    </View>
    <Text style={styles.titleText}>Opponent</Text>
    <View style={styles.mainSection}>
      <TextInput 
          style={styles.input}
          placeholder='First Name'
          placeholderTextColor='black'
          textAlign='center' 
      />
      <TextInput 
          style={styles.input}
          placeholder='Last Name'
          placeholderTextColor='black'
          textAlign='center'
      />
      <TextInput 
          style={styles.input}
          placeholder="Team"
          placeholderTextColor="black"
          textAlign="center"
      />
      <TextInput 
          style={styles.input}
          placeholder="Weight Class"
          placeholderTextColor="black"
          textAlign="center"
      />
      <View style={styles.checkInput}>
          <Text>NAT QUAL</Text>
          <Checkbox style={{marginLeft: 25}} value={natQualA} onValueChange={setNatQualA}/> 
      </View>
      <View style={styles.checkInput}>
          <Text>All American</Text>
          <Checkbox style={{marginLeft: 25}} value={allAmerA} onValueChange={setAllAmerA}/>
      </View>
      <View style={{padding: 20}}>
      <TextInput 
          style={styles.input}
          placeholder='Event Name'
          placeholderTextColor='black'
          textAlign='center' 
      />
      <TextInput 
          style={styles.input}
          placeholder='Event Type'
          placeholderTextColor='black'
          textAlign='center' 
      />
      <TextInput 
          style={styles.input}
          placeholder='Match Type'
          placeholderTextColor='black'
          textAlign='center' 
      />
      </View>

    </View>
    <Button title="Submit" onPress={() => navigation.navigate('EventPage', {paramKey: nameH})}/>
  </ScrollView>
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