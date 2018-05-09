import React, { Component } from 'react';
import { Text, Image, View, ScrollView, FlatList, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends Component {
  render() {
		console.log('checking home', this.props)
	const goals= [
		{title: 'Learn Javascript', brief: 'Lorem ipsum dolor sit amet'},
		{title: 'Save the world', brief: 'Lorem ipsum dolor sit amet'},
		{title: 'Learn to fly', brief: 'Help me burn out bright'},
		{title: 'Be a minority', brief: 'You are on your own side'},
		{title: 'Take me close to you', brief: 'Far away far away waste away tonight'},
	];

	return (
		<View style = {{flex:1}}>
			<View style = {styles.header}>
				<Text style = {styles.headerText}>Dashboard</Text>
			</View>
			<View style = {styles.container}>
				<ScrollView showsVerticalScrollIndicator = {false}>
					<Text style = {styles.titleText}>TODAY STATS</Text>
					<View style = {styles.counterContainer}>
						<View style = {styles.counterRectangle}>
							<TouchableOpacity onPress={this.props.onPress}>
								<Text style = {styles.counterNumber}>0</Text>
								<Text style = {styles.counterText}>GOALS DONE</Text>
							</TouchableOpacity>
						</View>
						<View style = {styles.counterRectangle}>
							<Text style = {styles.counterNumber}>0</Text>
							<Text style = {styles.counterText}>REWARDS RECEIVED</Text>
						</View>
					</View>
					<Text style = {styles.titleText}>TODAY GOALS</Text>

					<FlatList
					showsVerticalScrollIndicator={false}
					keyExtractor={item => item.title}
					data = {goals}
					renderItem = {
						({item}) => 
						<View style = {styles.goalCard}>
							<View style = {styles.goalDetailWrapper}>
								<Text style = {styles.goalTitleText}>{item.title}</Text>
								<Text style = {styles.goalBriefText}>{item.brief}</Text>
							</View>
							<View style = {styles.checkIconWrapper}>
								<Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
							</View>
						</View>
					}>
					</FlatList>
				</ScrollView>
			</View>
		</View>
	);
  }
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
	counterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 16,
		marginBottom: 25
	},
	counterRectangle: {
		width: width*0.44,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 12,
		backgroundColor: 'rgba(255,255,255,1)',
		borderRadius: 4,
		minHeight: 116,
		shadowColor: 'red',
		shadowOffset: {width: 0, height: 5},
		shadowRadius: 12,
		shadowOpacity: 1,
		elevation: 3,
	},
	counterNumber: {
		fontFamily: 'OpenSans',
		//fontWeight: '400',
		fontSize: 52,
		color: 'rgba(81,81,81,1.0)'
	},
	counterText: {
		fontFamily: 'OpenSans',
		fontWeight: '500',
		fontSize: 14,
		letterSpacing: 1,
		color: 'rgba(74,144,226,1)',
	},
	goalCard: {
		marginTop: 16,
		paddingRight: 20,
		flex: 1,
		flexDirection: 'row',
		borderRadius: 4,
		backgroundColor: 'rgba(255,255,255,1)',
		minHeight: 75,
		elevation: 3,
		//borderWidth: 1
		borderLeftWidth: 6,
		borderLeftColor: 'rgba(74,144,226,1)'
	},
	goalDetailWrapper: {
		paddingVertical: 16,
		flex: 20,
		justifyContent: 'center',
		paddingLeft: 22
	},
	goalTitleText: {
		fontFamily: 'OpenSans',
		fontWeight: 'bold',
		fontSize: 16,
		color: 'rgba(81,81,81,1.0)',
		letterSpacing: 1.5,
		lineHeight: 19
	},
	goalBriefText: {
		fontFamily: 'OpenSans',
		fontSize: 14,
		color: 'rgba(196,196,196,1)',
		letterSpacing: 1.5,
		lineHeight: 19,
		marginTop: 4
	},
	checkIconWrapper: {
		paddingVertical: 16,
		flex: 2,
		justifyContent: 'center'
	},
	checkIcon: {
		width: 30,
		height: 32
	}


})

