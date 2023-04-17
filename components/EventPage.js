import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Checkbox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker'
import  { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';



export default function EventPage({ route, navigation }) {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () =>
      (
        
          <SafeAreaView style={styles.matchInfo}>
            <View style={{marginTop: 5}}>
              <Text>Match Summary</Text>
              <Text style={{alignItems: 'center'}}>{route.params.paramLastH} VS {route.params.paramLastA}</Text>
            </View>
      
          </SafeAreaView>
      ),
    })
  });

const insets = useSafeAreaInsets();
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  const EventPage = ( { navigation } ) => {
    const [periodH, setPeriodH] = useState('1');
    const [isPositionH, setPositionH] = useState('Top');    const [otH, setOtH] = useState(false);
    const [actionTypeH, setActionTypeH] = useState('Tilt');
    const [resultH, setResultH] = useState('Win');
    
    

  <SafeAreaView style={styles.safeView}>
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
    
  };

 

const [events, changeEvents]  = React.useState([
]);

const [listState, setListState] = React.useState(events);
const [idx, incr] = React.useState(0);
const [title, setTitle] = React.useState('');

function handleChange(event) {
  setTitle(event.target.value);
}

const addElement = () => {
  var newArray = [...events , {id : idx, text: title }];
  incr(idx+1);
  setListState(newArray);
  changeEvents(newArray);
}


  


  return (

    
    <View style={styles.safeView}>
      <View style={styles.eventsSection}>
        
        {/* <View style={{alignItems: 'center'}}> */}
          <FlatList
            data={listState}
            renderItem={item => (
              <View style={styles.item}>
                <Text >{item.item.text}</Text>
              </View>
            )}

            keyExtractor={item => item.id}
            />
          {/* </View> */}
          
      </View>

      <View style={styles.mainSection}>
      <View>
<SelectList 
  
  setSelected={(actionTypeH) => setActionTypeH(actionTypeH)}
  data={[{label: 'Tilt', value: 'Tilt'}, {label: 'Half', value: 'Half'}, {label: "Armbar", value: 'Armbar'},  {label: "Cradle", value: 'Cradle'},  {label: "Leg Ride", value: 'Leg Ride'},  {label: "Takedown To Back", value: 'Takedown To Back'}]}
  save="value"
  placeholder={'Action Type'}
  boxStyles={styles.selectList}
      />

<TextInput 
        style={styles.input}
        placeholder= "Points"
        placeholderTextColor = 'black'
        textAlign='center' />

<TextInput    
          style={styles.input}
          placeholder= "Team"
          placeholderTextColor = 'black'
          textAlign = 'center' />

<SelectList
        setSelected={(resultH) => setResultH(resultH)}
        data={[{label: 'Loss', value: 'Loss'}, {label: "Win", value: 'Win'}]}
        save="value"
        placeholder={'Result'}
        boxStyles={styles.selectList}

      />

<View style={styles.checkInput}>
        <Text>Caution</Text>
        <Checkbox style={{marginLeft: 10}} value={otH} onValueChange={setOtH}/>
        </View>

</View>
        <TextInput placeholder="input" value={title} onChangeText={(title) => setTitle(title)}/>
        <Button title="Update" onPress={addElement}/>

      
      </View>

    </View>
    
    


    
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    //alignItems: 'center',
    //backgroundColor: 'skyblue',
    
  },
  matchInfo: {
    backgroundColor: 'skyblue',
    height: 90,
    width: '20%',
    borderRightWidth: 3,
    alignItems: 'right',
    
    //alignItems: 'center',
    //paddingTop: '10%',
  },
  container: {
    height: '20%',
    width: '30%',
    backgroundColor: 'skyblue',
    alignItems: "left",
    

  },
  safeView: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    

  },
  mainSection: {
    width: '80%',
    alignItems: "center", 
    justifyContent: "center"
  },
  titleText: {
    alignItems: "center",
    fontFamily: "Arial",
    font: "Arial Black",
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },
  eventsSection: {
    width: '20%',
    borderWidth: 3,
  },
  item: {
    flex: 1,
    borderBottomWidth: 2,
    alignItems: 'center',
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
  
});