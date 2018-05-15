import React, { Component } from 'react';
import { PagerTabIndicator, IndicatorViewPager } from 'rn-viewpager';
import { Button, Text, Image, View, FlatList, TouchableOpacity, ScrollView, Dimensions, StyleSheet} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


import Home from '../home'
import AddGoal from '../add-goal'
import List from '../list'
import Detail from '../detail'
import GoalsList from '../goals-list'
import ExampleView from '../collapse'
import Scroll from '../scroll'
import Swipe from '../swipe'
import Onboard from '../onboard'

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
    goalCard: {
        marginTop: 16,
        paddingRight: 20,
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,1)',
        minHeight: 75,
        elevation: 3,
        //borderWidth: 1,
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
      iconSource: require('../../assets/icons/nav-bar-list-inactive2.png'),
      selectedIconSource: require('../../assets/icons/nav-bar-list2.png')
      }];
          
    return <PagerTabIndicator tabs={tabs} iconStyle={{ width: 28, height: 28}} selectedIconStyle={{ width: 28, height: 28}} />;
  }
  render() {
    console.log("INI PROPSSSSS == ", this.props.navigation)
    return (
      <View style={{flex:1}}>        
        <IndicatorViewPager
        horizontalScroll={false}
        keyboardDismissMode='none'
        style={{flex:1}}
        indicator={this._renderTabIndicator()}>
          <View>
              <Home
                onPress={data => this.props.navigation.navigate('detail', data)}
                //onPress = {value => this.handleDetail(value)}
              />
          </View>
          <View>
              <AddGoal />
          </View>
          <View>
							{/* <ExampleView /> */}
							 {/* <List /> */}
              {/* <Detail /> */}
              {/* <Scroll /> */}
              {/* <Swipe /> */}
              {/* <Onboard /> */}
              <GoalsList
                onPress={() => this.props.navigation.navigate('detail')}/>
          </View>
        </IndicatorViewPager>
      </View>
      );
  }
}

//baby steps - every day / week - goal/mountain

//log daily icon: calendar/today
//rewards : trophy