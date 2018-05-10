import React, { Component } from 'react';
import { Text, Image, View, ScrollView, FlatList, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../shared-style'
import CheckIcon from '../../components/checkIcon'

export default class Home extends Component {
  render() {
		console.log('checking home', this.props)
	const goals= [
		{title: 'Learn Javascript', brief: 'Lorem ipsum dolor sit amet'},
		{title: 'Save the world', brief: 'Lorem ipsum dolor sit amet'},
		{title: 'Learn to fly', brief: 'Help me burn out bright'},
		{title: '💩💩💩💩💩💩', brief: '😴😴😴😴😴😴'},
		{title: 'aaaaaaaaaaa', brief: ''}
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
							<Text style = {styles.counterNumber}>0</Text>
							<Text style = {styles.counterText}>GOALS DONE</Text>
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
						<TouchableOpacity
							style = {styles.goalCard}
							onPress={this.props.onPress}>
							<View style = {styles.goalDetailWrapper}>
								<Text style = {styles.goalTitleText}>{item.title}</Text>
								<Text style = {styles.goalBriefText}>{item.brief}</Text>
							</View>
							<CheckIcon />
						</TouchableOpacity>
					}>
					</FlatList>
				</ScrollView>
			</View>
		</View>
	);
  }
}

