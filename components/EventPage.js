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
    <><SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text style='alignItems: '>Match Summary {route.params.paramKey} </Text>
        <Button title="Back to Home" onPress={() => { navigation.navigate('HomeScreen'); ScreenOrientation.unlockAsync(); } } />
      </View>
    </SafeAreaView><ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
        <Text style={styles.titleText}>Our Wrestler</Text>
        <View style={styles.mainSection}>
          <TextInput
            style={styles.input}
            placeholder='First Name'
            placeholderTextColor='black'
            textAlign='center'
            value={nameH}
            onChangeText={(nameH) => setNameH(nameH)} />
          <TextInput
            style={styles.input}
            placeholder='Last Name'
            placeholderTextColor='black'
            textAlign='center' />
          <TextInput
            style={styles.input}
            placeholder="Team"
            placeholderTextColor="black"
            textAlign="center" />
          <TextInput
            style={styles.input}
            placeholder="Weight Class"
            placeholderTextColor="black"
            textAlign="center" />
          <View style={styles.checkInput}>
            <Text>NAT QUAL</Text>
            <Checkbox style={{ marginLeft: 25 }} value={natQualH} onValueChange={setNatQualH} />
          </View>
          <View style={styles.checkInput}>
            <Text>All American</Text>
            <Checkbox style={{ marginLeft: 25 }} value={allAmerH} onValueChange={setAllAmerH} />
          </View>
        </View>
        <Text style={styles.titleText}>Opponent</Text>
        <View style={styles.mainSection}>
          <TextInput
            style={styles.input}
            placeholder='First Name'
            placeholderTextColor='black'
            textAlign='center' />
          <TextInput
            style={styles.input}
            placeholder='Last Name'
            placeholderTextColor='black'
            textAlign='center' />
          <TextInput
            style={styles.input}
            placeholder="Team"
            placeholderTextColor="black"
            textAlign="center" />
          <TextInput
            style={styles.input}
            placeholder="Weight Class"
            placeholderTextColor="black"
            textAlign="center" />
          <View style={styles.checkInput}>
            <Text>NAT QUAL</Text>
            <Checkbox style={{ marginLeft: 25 }} value={natQualA} onValueChange={setNatQualA} />
          </View>
          <View style={styles.checkInput}>
            <Text>All American</Text>
            <Checkbox style={{ marginLeft: 25 }} value={allAmerA} onValueChange={setAllAmerA} />
          </View>
          <View style={{ padding: 20 }}>
            <TextInput
              style={styles.input}
              placeholder='Event Name'
              placeholderTextColor='black'
              textAlign='center' />
            <TextInput
              style={styles.input}
              placeholder='Event Type'
              placeholderTextColor='black'
              textAlign='center' />
            <TextInput
              style={styles.input}
              placeholder='Match Type'
              placeholderTextColor='black'
              textAlign='center' />
          </View>

        </View>
        <Button title="Submit" onPress={() => navigation.navigate('EventPage', { paramKey: nameH })} />
      </ScrollView></>
        
    
  );
  };


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
  },
  input: {
    alignItems: 'stretch',
    width: 150,
    height: 40,
    margin: 12,
    borderWidth: 1,
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