import React, { Component } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions } from 'react-native';

export default class Detail extends Component {
	render() {
    const data = this.props.navigation
    console.log('landing here check props bro goal name:', data.state.params.goalName)
		return (
			<View style = {{flex:1}}>
				<View style = {styles.headerNav}>
					<TouchableOpacity style = {styles.backIconWrapper} onPress={() => this.props.navigation.goBack()}>
						<Image style = {styles.backIcon} source = {require('../../assets/icons/back.png')} /> 
					</TouchableOpacity>
					<Text style = {styles.headerNavText}>Goal Detail</Text>
				</View>
				<View style = {styles.container}>
					<ScrollView showsVerticalScrollIndicator = {false}>
						<Text style = {styles.detailLabelText}>Goal Name:</Text>
						<View style = {styles.detailBg}>
							<Text style = {styles.titleText}>{data.state.params.goalName}</Text>
						</View>
						<Text style = {styles.detailLabelText}>Frequency:</Text>
						<View style = {styles.selectedDayContainer}>
								<View style = {[styles.dayCircle, styles.dayCircleSelected]}><Text style = {styles.dayCircleTextSelected}>WED</Text></View>
								<View style = {[styles.dayCircle, styles.dayCircleSelected]}><Text style = {styles.dayCircleTextSelected}>FRI</Text></View>
						</View>
						<Text style = {styles.detailLabelText}>Rewards</Text>
						<View style = {styles.rewardsFormContainer}>
								<Text style = {styles.detailLabelText}>Immediate:</Text>
								<View style = {styles.rewardsBg}>
										<Text style = {styles.titleText}>{data.state.params.immediateRewards}</Text>
								</View>
								<Text style = {styles.detailLabelText}>Completed:</Text>
								<View style = {styles.rewardsBg}>
										<Text style = {styles.titleText}>{data.state.params.completedRewards}</Text>
								</View>
						</View>
						<Text style = {styles.titleText}>Stats:</Text>
						<View style = {styles.detailBg}>
								<View style = {styles.statsContainer}>
										<View style = {styles.barContainer}>
												<View style = {styles.barDone}></View>
												<View style = {styles.barDone}></View>
												<View style = {styles.barUndone}></View>
												<View style = {styles.barUndone}></View>
												<View style = {styles.barUndone}></View>
												<View style = {styles.barUndone}></View>
										</View>
										<View style = {styles.statsNumberContainer}>
												<Text style = {styles.numberDoneText}>2 </Text>
												<Text style = {styles.numberUndoneText}>/ 5</Text>
										</View>
								</View>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	headerNav: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: 'rgba(60,145,242,1)'
	},
	backIconWrapper: {
		flex: 1
	},
	backIcon: {
		width: 24,
		height: 24
	},
	headerNavText: {
		flex: 2,
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
	detailLabelText: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'rgba(149,149,149,0.8)',
		letterSpacing: 1.28,
		lineHeight: 19
	},
	detailBg: {
		marginTop: 12,
		marginBottom: 28,
		paddingVertical: 20,
		paddingHorizontal: 16,
		backgroundColor: 'rgba(255,255,255,1)',
		borderRadius: 4,
		elevation: 2
	},
	titleText: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'rgba(81,81,81,1.0)',
		letterSpacing: 1.28,
		lineHeight: 19
	},
	selectedDayContainer: {
		marginBottom: 24,
		flexDirection: 'row',
		paddingTop: 12
	},
	dayCircle: {
		width: 45,
		height: 45,
		marginRight: 5,
		backgroundColor: 'rgba(196,196,196,0.32)',
		borderRadius: 45/2,
		justifyContent: 'center',
		alignItems: 'center'
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
	rewardsBg: {
		marginTop: 4,
    marginBottom: 12,
		padding: 14,
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
		textAlign: 'center',
	},
	statsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	barContainer: {
		flexDirection: 'row'
	},
	barDone: {
		width: 9,
		height: 55,
		borderRadius: 7,
		backgroundColor: 'rgba(74,144,226,1)',
		marginRight: 8
	},
	barUndone: {
		width: 9,
		height: 55,
		borderRadius: 7,
		backgroundColor: 'rgba(216,216,216,1)',
		marginRight: 8
	},
	statsNumberContainer: {
		flexDirection: 'row',
		//justifyContent: 'baseline',
		alignItems: 'flex-end'
	},
	numberDoneText: {
		fontFamily: 'OpensSans',
		fontWeight: '600',
		fontSize: 28,
		color: 'rgba(81,81,81,1)'
	},
	numberUndoneText: {
		fontFamily: 'OpensSans',
		fontWeight: '600',
		fontSize: 24,
		color: 'rgba(81,81,81,1)'
	}
})