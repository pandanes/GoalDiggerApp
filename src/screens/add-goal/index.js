import React, { Component } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { addGoalActions } from '../../redux/modules/add-goal'
import DayCircle from '../../components/dayCircle'

//GET STATE
const mapStateToProps = state => state.addGoal

//DISPATCH ACTIONS
const mapDispatchToProps = dispatch  => ({
	saveGoalName: text => dispatch(addGoalActions.saveGoalName(text)),
	saveGoalBrief: text => dispatch(addGoalActions.saveGoalBrief(text)),
	//saveFrequency: value => dispatch(addGoalActions.saveFrequency(value)),
	saveImmediateRewards: text => dispatch(addGoalActions.saveImmediateRewards(text)),
	saveCompletedRewards: text => dispatch(addGoalActions.saveCompletedRewards(text)),
	changeDays: (field, value) => dispatch(addGoalActions.changeDay(field, value))
	//changeDays: (value) => dispatch(addGoalActions.changeDay(value))
})

//SAVE TO ASYNC STORAGE
handleAddGoal = (goalName, goalBrief, immediateRewards, completedRewards) => {
	const data = {goalName, goalBrief, immediateRewards, completedRewards}
	console.log('goal name:', goalName)
	AsyncStorage.setItem('data', JSON.stringify(data))
}

handleDays = (field, value) => changeDays(field, value)

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

  const day = { everyday, monday, tuesday, wednesday, thursday, friday, saturday, sunday,}

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
            <DayCircle onPress = {() => changeDays('everyday', !everyday)} status={everyday} text = 'E'/>
            <DayCircle onPress = {() => changeDays('monday', !monday)} status={monday} text = 'MO'/>
            <DayCircle onPress = {() => changeDays('tuesday', !tuesday)} status={tuesday} text = 'TU'/>
            <DayCircle onPress = {() => changeDays('wednesday', !wednesday)} status={wednesday} text = 'WED'/>
            <DayCircle onPress = {() => changeDays('thursday', !thursday)} status={thursday} text = 'TH'/>
            <DayCircle onPress = {() => changeDays('friday', !friday)} status={friday} text = 'FRI'/>
            <DayCircle onPress = {() => changeDays('saturday', !saturday)} status={saturday} text = 'SAT'/>
            <DayCircle onPress = {() => changeDays('sunday', !sunday)} status={sunday} text = 'SUN'/>
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

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	header: {
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: 'rgba(60,145,242,1)'
	},
	headerText: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'rgba(255,255,255,1.0)',
		letterSpacing: 1.28,
		lineHeight: 19
	},
	container: {
		flex: 1,
		backgroundColor: 'rgba(253,253,253,1.0)',
		paddingHorizontal: 16,
		paddingTop: 24
	},
	titleText: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'rgba(81,81,81,1.0)',
		letterSpacing: 1.28,
		lineHeight: 19
	},
	textInputStyle: {
    fontSize: 18,
    letterSpacing: 1,
		marginTop: 12,
		marginBottom: 24,
		padding: 16,
		backgroundColor: 'rgba(255,255,255,1.0)',
		borderRadius: 4,
		elevation: 2    
	},
	dayOptionContainer: {
		marginBottom: 28,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 12
	},
	dayCircle: {
		width: 45,
		height: 45,
		backgroundColor: 'rgba(196,196,196,0.32)',
		borderRadius: 45/2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	dayCircleText: {
		fontFamily: 'OpensSans',
		fontWeight: 'bold',
		fontSize: 16,
		color: 'rgba(81,81,81,0.8)',
		letterSpacing: 1
	},
	dayCircleSelected: {
    width: 45,
		height: 45,
		borderRadius: 45/2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(74,144,226,1)'
	},
	dayCircleTextSelected: {
		fontFamily: 'OpensSans',
		fontWeight: 'bold',
		fontSize: 16,
		color: 'rgba(255,255,255,1)',
		letterSpacing: 1
	},
	rewardsFormContainer: {
		marginTop: 12,
		marginBottom: 20,
		paddingTop: 20,
		paddingHorizontal: 16,
		backgroundColor: 'rgba(255,255,255,1)',
		borderRadius: 4,
		elevation: 2
	},
	rewardsTextInput: {
    fontSize: 18,
    letterSpacing: 1,
		marginBottom: 20,
		padding: 12,
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(216,216,216,1)'  
	},
	buttonSave: {
		paddingVertical: 12,
		backgroundColor: 'rgba(44,110,183,1)',
		borderRadius: 5
	},
	buttonSaveText: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'rgba(255,255,255,1.0)',
		letterSpacing: 1.28,
		textAlign: 'center'
	}

})

export default connect(mapStateToProps, mapDispatchToProps)(AddGoal)