import { View, StyleSheet, Dimensions } from 'react-native';
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
		backgroundColor: 'rgba(60,145,242,1)'
	},
})

export default class GoalsList extends Component {
  render() {
    return (
			<View style={{ flex: 1 }}>
				<IndicatorViewPager
					style={{ flex: 1,
						backgroundColor: 'rgba(253,253,253,1.0)',
						paddingHorizontal: 16,
						paddingTop: 48,
						paddingBottom: 8 }}
					indicator={this._renderTitleIndicator()}>
						<OngoingGoals />
						<CompletedGoals />
				</IndicatorViewPager>
			</View>
    )
	}

	_renderTitleIndicator() {
		return <PagerTitleIndicator
						selectedItemStyle={{ width: width/2 }}
						itemStyle={{ width: width/2 }}
						style={styles.indicatorContainer}
						titles={['ONGOING', 'COMPLETED']}
					/>;
}
}