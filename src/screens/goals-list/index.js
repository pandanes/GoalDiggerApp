import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { PagerTitleIndicator, IndicatorViewPager } from 'rn-viewpager';

import OngoingGoals from '../ongoing-goals'
import CompletedGoals from '../completed-goals'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
	indicatorContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 56,
		backgroundColor: '#3DA7F2'
	},
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
	}
})

export default class GoalsList extends Component {
  render() {
    return (
			<View style={{ flex: 1 }}>
				<View style = {styles.header}>
					<Text style = {styles.headerText}>Goals List</Text>
				</View>
				<IndicatorViewPager
					style={{ flex: 1,
						backgroundColor: 'rgba(253,253,253,1.0)',
						paddingHorizontal: 16,
						paddingTop: 56,
						paddingBottom: 8 }}
					indicator={this._renderTitleIndicator()}>
						<OngoingGoals onPress={this.props.onPress}/>
						<CompletedGoals />
				</IndicatorViewPager>
			</View>
    )
	}

	_renderTitleIndicator() {
		return <PagerTitleIndicator
						selectedItemStyle={{ width: width/2}}
						selectedItemTextStyle={{
							fontFamily: 'OpenSans',
							fontWeight: 'bold',
							fontSize: 14,
							color: '#FFFFFF',
							letterSpacing: 1.28,
							lineHeight: 19
						}}
						itemTextStyle={{
							fontFamily: 'OpenSans',
							fontWeight: 'bold',
							fontSize: 14,
							color: '#FFFFFF',
							letterSpacing: 1.28,
							lineHeight: 19,
							opacity: 0.6,
						}}
						itemStyle={{ width: width/2, backgroundColor: '#3DA7F2' }}
						selectedBorderStyle={{
							borderWidth: 2,
							borderColor: '#FFFFFF',
						}}
						style={styles.indicatorContainer}
						titles={['ONGOING', 'COMPLETED']}
					/>;
}
}