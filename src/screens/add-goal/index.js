import React, { Component } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { addGoalActions } from '../../redux/modules/add-goal';

//GET STATE
const mapStateToProps = state => state.addGoal

//DISPATCH ACTIONS
const mapDispatchToProps = dispatch  => ({
	saveGoalName: text => dispatch(addGoalActions.saveGoalName(text)),
	saveGoalBrief: text => dispatch(addGoalActions.saveGoalBrief(text)),
	saveFrequency: value => dispatch(addGoalActions.saveFrequency(value)),
	saveImmediateRewards: text => dispatch(addGoalActions.saveImmediateRewards(text)),
	saveCompletedRewards: text => dispatch(addGoalActions.saveCompletedRewards(text)),
	changeDays: (field, value) => dispatch(addGoalActions.changeDay(field, value))
	//changeDays: (value) => dispatch(addGoalActions.changeDay(value))
})

//SAVE TO ASYNC STORAGE
handleAddGoal = (goalName, goalBrief, frequency, immediateRewards, completedRewards) => {
	const data = {goalName, goalBrief, frequency, immediateRewards, completedRewards}
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
	frequency,
	immediateRewards,
	completedRewards,
	everyday,
	changeDays,
	handleDays
	}) => {
	console.log('check day ==== ', goalBrief)
	console.log('check changeday ==== ', everyday)	
	
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
				<TouchableOpacity
				//onPress = {() => changeDays(!everyDay)}
				onPress = {() => changeDays('everyday', !everyday)}
				style = {everyday ? styles.dayCircle : [styles.dayCircle, styles.dayCircleSelected]}>
					<Text style = {styles.dayCircleText}>E</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress = {value => handleDay('monday', value)}
				style = {styles.dayCircle}>
					<Text style = {styles.dayCircleText}>MO</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress = {value => handleDay('tuesday', value)}
				style = {styles.dayCircle}>
					<Text style = {styles.dayCircleText}>TU</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress = {value => handleDay('wednesday', value)}
				style = {[styles.dayCircle, styles.dayCircleSelected]}>
					<Text style = {styles.dayCircleTextSelected}>WED</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress = {value => handleDay('thursday', value)}
				style = {styles.dayCircle}>
					<Text style = {styles.dayCircleText}>TH</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress = {value => handleDay('friday', value)}
				style = {[styles.dayCircle, styles.dayCircleSelected]}>
					<Text style = {styles.dayCircleTextSelected}>FRI</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress = {value => handleDay('saturday', value)}
				style = {styles.dayCircle}>
					<Text style = {styles.dayCircleText}>SAT</Text>
				</TouchableOpacity>
				<TouchableOpacity
				onPress = {value => handleDay('sunday', value)}
				style = {styles.dayCircle}>
					<Text style = {styles.dayCircleText}>SUN</Text>
				</TouchableOpacity>
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
			onPress = {() => handleAddGoal(goalName, goalBrief, frequency, immediateRewards, completedRewards)}
			>
				<Text style = {styles.buttonSaveText}>SAVE</Text>
			</TouchableOpacity>
		</ScrollView>
	</View>
)
	}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
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
		marginTop: 12,
		marginBottom: 24,
		padding: 16,
		backgroundColor: 'rgba(255,255,255,1.0)',
		borderRadius: 4,
		elevation: 2    
	},
	dayOptionContainer: {
		marginBottom: 24,
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