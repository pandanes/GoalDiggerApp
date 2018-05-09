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
							color: 'rgba(255,255,255,1)',
							letterSpacing: 1.28,
							lineHeight: 19
						}}
						itemTextStyle={{
							fontFamily: 'OpenSans',
							fontWeight: 'bold',
							fontSize: 14,
							color: 'rgba(255,255,255,0.3)',
							letterSpacing: 1.28,
							lineHeight: 19
						}}
						itemStyle={{ width: width/2, backgroundColor: 'rgba(32,74,122,1)' }}
						selectedBorderStyle={{
							backgroundColor: 'rgba(80,227,194,1)'
						}}
						style={styles.indicatorContainer}
						titles={['ONGOING', 'COMPLETED']}
					/>;
}
}