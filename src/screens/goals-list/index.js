import { View, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { PagerTitleIndicator, IndicatorViewPager } from 'rn-viewpager';

import OngoingGoals from '../ongoing-goals'
import CompletedGoals from '../completed-goals'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	indicatorContainer: {
		height: 50,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
	},
})

export default class GoalsList extends Component {
  render() {
    return (
			<View style={{ flex: 1 }}>
				<IndicatorViewPager
					style={{ flex: 1 }}
					indicator={this._renderTitleIndicator()}>
						<OngoingGoals />
						<CompletedGoals />
				</IndicatorViewPager>
			</View>
    )
	}

	_renderTitleIndicator() {
		return <PagerTitleIndicator selectedItemStyle={{ width: width/2 }} itemStyle={{ width: width/2 }} style={styles.indicatorContainer} titles={['Ongoing', 'Completed']} />;
}
}