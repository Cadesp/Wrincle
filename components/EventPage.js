import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ScrollView, TextInput, FlatList, Checkbox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import Svg, { Circle, Rect, AreaChart, Grid, Line, PolyLine } from 'react-native-svg';
import { SelectList } from 'react-native-dropdown-select-list';
import Stopwatch from './Stopwatch';
import DropDownPicker from 'react-native-dropdown-picker';

// import Graph from './Graph.js'


export default function EventPage({ route, navigation, props }) {
  
    const [periodH, setPeriodH] = React.useState('1');
    const [otH, setOtH] = React.useState(false);
    const [currentPos, setCurrentPos] = React.useState([]);
    const [positions, setPositions] = React.useState([
        {label: "Neutral", value:"Neutral"},
        {label: "Top", value: "Top"},
        {label: "Bottom", value: "Bottom"}
      ]);
    const positionsNeutral = ["Single Leg", "Double Leg", "Hi-C", "Scramble", "Throw", "Front Headlock", "Defended Shot"];
    const positionsTop = ["Tilt", "Half", "Arm Bar", "Cradle", "Leg Ride", "Takedown to Back"];
    const positionsBottom = ["Stand Up", "Sit Out", "Switch", "Tripod", "Roll"];

    const [selectedPos, setSelectedPos] = React.useState("");
    const [selectedOfAction, setSelectedOfAction] = React.useState("");
  

    const [finalTime, setFinalTime] = React.useState(0);
    function handleStopwatchStop(timeElapsed) {
      setFinalTime(timeElapsed);
    }

    //dropdowns
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);



    const handlePosition = () => {
      

    };
  //Setup Header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () =>
      (
        <View style={styles.topSection}>
          <SafeAreaView style={styles.matchInfo}>
            <View style={{marginTop: 5}}>
              <Text>Match Summary</Text>
              <Text style={{alignItems: 'center'}}>{route.params.paramLastH} VS {route.params.paramLastA}</Text>
            </View>
          </SafeAreaView>
            <View style={styles.time}>
              <Stopwatch onStop={handleStopwatchStop} currentTime={finalTime}/>
            </View>
            <View style={styles.positionInput}>
          
            <DropDownPicker
              open={open}
              value={value}
              items={positions}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setPositions}
            />




            {/* <SelectList
            placeholder="Position"
            setSelected={(val) => setSelectedPos(val)}
            data={positions}
            save="value"
            onSelect={handlePosition}
            /> */}
            </View>
          </View>
         
      ),
    })
  });


//lock orientation to landscape
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
//events list section

const [events, changeEvents]  = React.useState([]);
const [listState, setListState] = React.useState(events);
const [idx, incr] = React.useState(0);
const [title, setTitle] = React.useState('');
const [circlePositions, setCirclePositions] = React.useState([]);
const [localCircles, setLocalCircles] = React.useState(circlePositions);
const [circleColor, setCircleColor] = React.useState('red');



const addElement = () => { //adds element to list
  if(title != '' && localCircles.length%2 == 0 && localCircles.length/2 == events.length+1)//if input is not null
  {
  var newArray = [...events , {id : idx, text: title, time: finalTime }]; //create new array with new element
  incr(idx+1); //iterates new id value of each event in list (starts as 0)
  console.log(finalTime);
  setListState(newArray); //updating states
  changeEvents(newArray);


  }
};

const deleteElement = () => {  //delete element
  if(events.length !=0 && localCircles.length%2 == 0 && localCircles.length/2 == events.length)
  {
    
    incr(idx-1); //decrease id so events maintain ascending order with no skips
    const newArray = listState.filter((item) => item.id !== events[events.length-1].id); //create new array without last element
    setListState(newArray); //updating states
    changeEvents(newArray);
    const newCircles = [...localCircles];
    newCircles.pop();
    newCircles.pop();
    setLocalCircles(newCircles);
    setCirclePositions(newCircles);
  }
};


const deleteLastCircle = () => {
    if(localCircles.length%2 !=0 || localCircles.length/2 == events.length+1){

      if(circleColor == "red"){//revert back to circle color that is being deleted
        setCircleColor("orange");
      }
      else
      {
        setCircleColor("red");
      }
    let newCircles = [...localCircles];//delete circle
    newCircles.pop();
    setLocalCircles(newCircles);
    setCirclePositions(newCircles);
    }
  }

  const handlePress = (event) => {
    if(localCircles.length == events.length*2 || localCircles.length==0 || localCircles.length == events.length*2+1 ) {
    const { locationX, locationY } = event.nativeEvent;
    const newCircle = {id:idx, x: locationX, y: locationY, color: circleColor };

    if(circleColor == "red"){//change to next circle to be placed
      setCircleColor("orange");
    }
    else
    {
      setCircleColor("red");
    }
    let newCircles = [...localCircles, newCircle];
    setLocalCircles(newCircles);
    setCirclePositions(newCircles);
    }

    
  };




  return (

    
    <View style={styles.backgrounMainSection}>
  
      <View style={styles.eventsSection}> 
      
          <FlatList 
            data={listState}
            renderItem={item => (
              <View style={styles.item}>
                <Text >{item.item.text}</Text> 
              </View>
            )}
            keyExtractor={item => item.id}
            />
      </View>


      <View style={styles.eventInput}>
        {/* <TextInput placeholder="input" value={title} onChangeText={(title) => setTitle(title)}/> */}
      
        <Button title="update" onPress={addElement}/>
        <Button title="Delete last Event" onPress={deleteElement} />
      </View>

      <View style={styles.timeInput}>

      </View>
      
      <View style={styles.chartSection}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Svg width="200" height="200"  onPress={handlePress}>
          <Rect x = '0' y = '0' width='200' height='200' fill='blue' />
          <Circle cx="100" cy="100" r="100" fill="lightgrey" />
          <Circle cx='100' cy='100' r='50' fill='white' stroke="blue" />
          <Line x1="100" y1="0" x2="100" y2="200" stroke="blue" strokeWidth="1" />
          <Line x1='0' y1='100' x2='200' y2='100' stroke='blue' strokeWidth='1' />
          
          {localCircles.map((circle, index) => (
            <Circle key={index} cx={circle.x} cy={circle.y} r="5" fill={circle.color} stroke="black" strokewidth="1" />
          ))}
          </Svg>
          <Button title="Delete last Event" onPress={deleteLastCircle} />
        </View>
      </View>
        
    </View>
    

    
  );
}

const styles = StyleSheet.create({
  positionInput: {
    width: '12%',
    justifyContent: 'center',
    alignItems: 'right',
  },
  time: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
  },
  topSection: {
    flexDirection: "row",
  },

  header: {
    height: '10%',  
  },

  matchInfo: {
    backgroundColor: 'skyblue',
    height: 90,
    width: '20%',
    borderRightWidth: 3,
    alignItems: 'right',
  },
  container: {
    height: '20%',
    width: '30%',
    backgroundColor: 'skyblue',
    alignItems: "left",
  },
  backgrounMainSection: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
  eventInput: {
    width: '25%',
    height: '75%',
    alignItems: "center", 
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  chartSection: {
    width: '30%',
    height: '75%',
    alignItems: "center", 
    justifyContent: 'center', 
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  timeInput: {
    width: '25%',
    height: '75%',
    alignItems: "center", 
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },
  titleText: {
    alignItems: "center",
    fontFamily: "Arial",
    font: "Arial Black",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
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
});