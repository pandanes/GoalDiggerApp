import { View } from 'react-native';
import React, { Component } from 'react';
import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';

import Home from '../home'
import AddGoal from '../add-goal'
import List from '../list'
import Detail from '../detail'
import GoalsList from '../goals-list'
import ExampleView from '../collapse'

export default class BottomNav extends Component {
  _renderTabIndicator() {
    let tabs = [{
      text: 'Home',
      iconSource: require('../../assets/icons/nav-bar-home-inactive.png'),
      selectedIconSource: require('../../assets/icons/nav-bar-home.png')
      },
      {
      text: 'Add New',
      iconSource: require('../../assets/icons/nav-bar-add.png'),
      selectedIconSource: require('../../assets/icons/nav-bar-add.png')
      },{
      text: 'List',
      iconSource: require('../../assets/icons/nav-bar-list-inactive.png'),
      selectedIconSource: require('../../assets/icons/nav-bar-list.png')
      }];
          
    return <PagerTabIndicator tabs={tabs} iconStyle={{ width: 28, height: 28}} selectedIconStyle={{ width: 28, height: 28}} />;
  }
  render() {
    return (
      <View style={{flex:1}}>        
        <IndicatorViewPager
        style={{flex:1}}
        indicator={this._renderTabIndicator()}>
          <View>
              <ExampleView />
          </View>
          <View>
              <AddGoal />
          </View>
          <View>
              <List />
          </View>
        </IndicatorViewPager>
      </View>
      );
  }
}