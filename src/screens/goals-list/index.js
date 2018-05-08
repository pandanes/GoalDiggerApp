import { View } from 'react-native';
import React, { Component } from 'react';
import { PagerTitleIndicator, IndicatorViewPager } from 'rn-viewpager';

import OngoingGoals from '../ongoing-goals'
import CompletedGoals from '../completed-goals'

export default class GoalsList extends Component {
  render() {
    return (
      <IndicatorViewPager
			style={{flex:1, backgroundColor:'white'}}
      indicator={this._renderTitleIndicator()}>
				<View>
						<OngoingGoals />
				</View>
				<View>
						<CompletedGoals />
				</View>
			</IndicatorViewPager>
      )
	}

	_renderTitleIndicator() {
		return <PagerTitleIndicator style={{backgroundColor:'white'}} titles={['Ongoing', 'Completed']} />;
}
}