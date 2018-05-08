import React, { Component } from 'react';
import { Text, Image, View, ScrollView, FlatList, Dimensions, StyleSheet} from 'react-native';

export default class OngoingGoals extends Component {
  render() {
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

