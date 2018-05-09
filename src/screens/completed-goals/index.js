import React, { Component } from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity, FlatList, Dimensions, StyleSheet} from 'react-native';
import styles from '../shared-style'
import CheckIcon from '../../components/checkIcon'

export default class CompletedGoals extends Component {
  render() {
		const goals= [
			{title: 'Ongoing bb💖', brief: 'Lorem ipsum dolor sit amet'},
			{title: 'Save the world', brief: 'Lorem ipsum dolor sit amet'},
			{title: 'Learn to fly', brief: 'Help me burn out bright'},
			{title: 'Live happily', brief: 'Idk what what what what'},
			{title: 'Looking for something', brief: 'Make way back home and fly'},
			{title: 'Be nice', brief: 'You are on your own side'},
			{title: 'Take me home', brief: 'Far away far away'},
		];
	
		return (
			<View style = {{flex:1}}>
				{/* <View style = {styles.container}> */}
					<ScrollView showsVerticalScrollIndicator = {false}>
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
				{/* </View> */}
			</View>
		);
		}
}

