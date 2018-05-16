import React, { Component } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { addGoalActions } from '../../redux/modules/add-goal'
import DayCircle from '../../components/dayCircle'
import styles from '../shared-style'
import * as firebase from 'firebase';
import {firebaseConfig, init, database, ref} from '../helpers'

//GET STATE
const mapStateToProps = state => state.addGoal

//DISPATCH ACTIONS
const mapDispatchToProps = dispatch  => ({
	saveGoalName: text => dispatch(addGoalActions.saveGoalName(text)),
	saveGoalBrief: text => dispatch(addGoalActions.saveGoalBrief(text)),
	saveImmediateRewards: text => dispatch(addGoalActions.saveImmediateRewards(text)),
	saveCompletedRewards: text => dispatch(addGoalActions.saveCompletedRewards(text)),
	changeDays: (field, value) => dispatch(addGoalActions.changeDay(field, value))
	//changeDays: (value) => dispatch(addGoalActions.changeDay(value))
})

//SAVE TO ASYNC STORAGE
handleAddGoal = (day, goalName, goalBrief, immediateRewards, completedRewards) => {
	const data = {day, goalName, goalBrief, immediateRewards, completedRewards}
	//console.log('goal data:', data)
  AsyncStorage.setItem('data', JSON.stringify(data))
  //Save to firebase
  ref.push(data)
  //console.log('land ref push data', ref.push(data))
}

handleDays = (field, value) => changeDays(field, value)

/* getData = () => {
  AsyncStorage.getAllKeys()
  .then(res => {
    if (res[0] ) {
    AsyncStorage.setItem('data', JSON.stringify(data))  
    } else {
	  AsyncStorage.setItem('data_1', JSON.stringify(data))      
    }
  })
  .catch(err => console.log(err))
} */

getData = () => {
  AsyncStorage.getAllKeys()
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

const AddGoal = ({saveGoalName,
	saveGoalBrief,
	saveFrequency,
	saveImmediateRewards,
	saveCompletedRewards,
	goalName,
	goalBrief,
	immediateRewards,
	completedRewards,
  everyday,
  monday,
  tuesday,
	wednesday,
	thursday,
	friday,
	saturday,
	sunday,
	changeDays
	}) => {

  const day = { everyday, monday, tuesday, wednesday, thursday, friday, saturday, sunday }

	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var n = weekday[d.getDay()];
//	console.log(n);
//console.log('landing here fireeeee', firebase)
  return (
    <View style = {{flex: 1}}>
      <View style = {styles.header}>
        <Text style = {styles.headerText}>Add New Goal</Text>
      </View>
      <View style = {styles.container}>
        <ScrollView showsVerticalScrollIndicator = {false}>
          <Text style = {styles.titleText}>Goal Name:</Text>
          <TextInput
          style = {styles.textInputStyle}
          placeholder = 'Enter the goal name'
          placeholderTextColor = 'rgba(196,196,196,1)'
          underlineColorAndroid = 'transparent'
          onChangeText = {text => saveGoalName(text)}
          value = {goalName}
          />
          <Text style = {styles.titleText}>Goal Brief:</Text>
          <TextInput
          style = {styles.textInputStyle}
          placeholder = 'Enter the goal brief'
          placeholderTextColor = 'rgba(196,196,196,1)'
          underlineColorAndroid = 'transparent'
          onChangeText = {text => saveGoalBrief(text)}
          value = {goalBrief}
          />
          <Text style = {styles.titleText}>Frequency:</Text>
          <View style = {styles.dayOptionContainer}>
            <DayCircle onPressButton = {() => changeDays('everyday', !everyday)} status={everyday} text = 'E'/>
            <DayCircle onPressButton = {() => changeDays('monday', !monday)} status={monday} text = 'MO'/>
            <DayCircle onPressButton = {() => changeDays('tuesday', !tuesday)} status={tuesday} text = 'TU'/>
            <DayCircle onPressButton = {() => changeDays('wednesday', !wednesday)} status={wednesday} text = 'WED'/>
            <DayCircle onPressButton = {() => changeDays('thursday', !thursday)} status={thursday} text = 'TH'/>
            <DayCircle onPressButton = {() => changeDays('friday', !friday)} status={friday} text = 'FRI'/>
            <DayCircle onPressButton = {() => changeDays('saturday', !saturday)} status={saturday} text = 'SAT'/>
            <DayCircle onPressButton = {() => changeDays('sunday', !sunday)} status={sunday} text = 'SUN'/>
          </View>
          <Text style = {styles.titleText}>Set Rewards</Text>
          <View style = {styles.rewardsFormContainer}>
            <Text style = {styles.titleText}>Immediate Reward:</Text>
            <TextInput
            style = {styles.rewardsTextInput}
            placeholder = 'e.g. Browse the internet for 10 mins'
            placeholderTextColor = 'rgba(196,196,196,1)'
            underlineColorAndroid = 'transparent'
            onChangeText = {text => saveImmediateRewards(text)}
            value = {immediateRewards}
            />
            <Text style = {styles.titleText}>Completed Reward:</Text>
            <TextInput
            style = {styles.rewardsTextInput}
            placeholder = 'e.g. Treat myself two scoops of gelato'
            placeholderTextColor = 'rgba(196,196,196,1)'
            underlineColorAndroid = 'transparent'
            onChangeText = {text => saveCompletedRewards(text)}
            value = {completedRewards}
            />
          </View>
          <TouchableOpacity
          style = {styles.buttonSave}
          onPress = {() => handleAddGoal(day, goalName, goalBrief, immediateRewards, completedRewards)}
          >
            <Text style = {styles.buttonSaveText}>SAVE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGoal)