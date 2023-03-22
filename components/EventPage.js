import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Checkbox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker'
import  { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';


export default function EventPage({ route, navigation }) {
  const insets = useSafeAreaInsets();
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  // const EventPage = ( { navigation } ) => {
    const [periodH, setPeriodH] = useState('1');
    const [perioda, setPeriodA] = useState('1');
    const [isPositionH, setPositionH] = useState('Top');
    const [isPositionA, setPositionA] = useState('Top');
    const [otH, setOtH] = useState(false);

  return (
    <><SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder= "Time"
        placeholderTextColor = 'black'
        textAlign='center' />
        
      <SelectList 
        setSelected={(isPositionH) => setPositionH(isPositionH)}
        data={[{label: 'Top', value: 'Top'}, {label: 'Bottom', value: 'Bottom'}, {label: "Neutral", value: 'Neutral'}]}
        save="value"
        placeholder={'Position'}
        boxStyles={styles.selectList}
            />

              <SelectList 
                setSelected={(periodH) => setPeriodH(periodH)}
                data={[{label: '1', value: '1'}, {label: '2', value: '2'}, {label: '3', value: '3'}]}
                save="value"
                placeholder={"Period"}
                boxStyles={styles.selectList}
            />
    
        <TextInput 
        style={styles.input}
        placeholder= "Riding Time"
        placeholderTextColor = 'black'
        textAlign='center' />

  <View style={styles.checkInput}>
        <Text>Overtime</Text>
        <Checkbox style={{marginLeft: 10}} value={otH} onValueChange={setOtH}/>
        </View>

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
    alignItems: 'center',
    width: 100,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontColor: 'black',
  },
checkInput: {
    alignItems: 'center',
    width: 105,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontColor: 'black',
    flexDirection: 'row',
},

selectList: {
  width: 100,
  height: 40,
  backgroundColor: 'transparent',
  borderRadius: 0,
  borderWidth: 1, 
  borderColor: 'black', 
  margin: 10,
}
});