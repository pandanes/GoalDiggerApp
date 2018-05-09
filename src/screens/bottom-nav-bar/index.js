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

class CheckIcon extends Component {
	constructor(props) {
    super(props);
    this.state = {
			pic: require('../../assets/icons/checked-inactive.png')
		}
	}

	iconClicked() {
    this.setState({
      pic: require('../../assets/icons/checked-active.png')
    });
	}
	
	render() {
		return (
			<TouchableOpacity style = {styles.checkIconWrapper} onPress={() => this.iconClicked()}>
				<Image style = {styles.checkIcon} source = {this.state.pic} /> 
			</TouchableOpacity>
		)
	}
}

class Ongoing extends Component {
  render() { 
		console.log('hai im here', this.props)
    const goals= [
		{title: 'Ongoing', brief: 'Lorem ipsum dolor sit amet'},
		{title: 'Save the world', brief: 'Lorem ipsum dolor sit amet'},
		{title: 'Learn to fly', brief: 'Help me burn out bright'},
		{title: 'Live happily', brief: 'Run and tell the angels'},
		{title: 'Looking for something', brief: 'Make way back home and fly'},
		{title: 'Be a minority', brief: 'You are on your own side'},
		{title: 'Take me close to you', brief: 'Far away far away waste away tonight'},
	];
	return (
		<View style = {{flex:1}}>
			{/* <View style = {styles.header}>
				<Text style = {styles.headerText}>Goal List</Text>
			</View> */}
			<View style = {styles.container}>
				<ScrollView showsVerticalScrollIndicator = {false}>
					<FlatList
					showsVerticalScrollIndicator={false}
					keyExtractor={item => item.title}
					data = {goals}
					renderItem = {
						({item}) => 
						<TouchableOpacity
							style = {styles.goalCard}
							onPress={this.props.onPress}
						>
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
class Completed extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <ScrollView showsVerticalScrollIndicator = {false}>
            {/* <Text style = {styles.titleText}>TODAY GOALS</Text> */}
            <View style = {styles.goalCard}>
                <View style = {styles.goalDetailWrapper}>
                    <Text style = {styles.goalTitleText}>Learn Javascript</Text>
                    <Text style = {styles.goalBriefText}>Help me burn out bright</Text>
                </View>
                <View style = {styles.checkIconWrapper}>
                    <Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
                </View>
            </View>
            <View style = {styles.goalCard}>
                <View style = {styles.goalDetailWrapper}>
                    <Text style = {styles.goalTitleText}>Learn Javascript</Text>
                    <Text style = {styles.goalBriefText}>Help me burn out bright</Text>
                </View>
                <View style = {styles.checkIconWrapper}>
                    <Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
                </View>
            </View>
            <View style = {styles.goalCard}>
                <View style = {styles.goalDetailWrapper}>
                    <Text style = {styles.goalTitleText}>Learn Javascript</Text>
                    <Text style = {styles.goalBriefText}>Help me burn out bright</Text>
                </View>
                <View style = {styles.checkIconWrapper}>
                    <Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
                </View>
            </View>
            <View style = {styles.goalCard}>
                <View style = {styles.goalDetailWrapper}>
                    <Text style = {styles.goalTitleText}>Learn Javascript</Text>
                    <Text style = {styles.goalBriefText}>Help me burn out bright</Text>
                </View>
                <View style = {styles.checkIconWrapper}>
                    <Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
                </View>
            </View>
            <View style = {styles.goalCard}>
                <View style = {styles.goalDetailWrapper}>
                    <Text style = {styles.goalTitleText}>Learn Javascript</Text>
                    <Text style = {styles.goalBriefText}>Help me burn out bright</Text>
                </View>
                <View style = {styles.checkIconWrapper}>
                    <Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
                </View>
            </View>
            <View style = {styles.goalCard}>
                <View style = {styles.goalDetailWrapper}>
                    <Text style = {styles.goalTitleText}>Learn Javascript</Text>
                    <Text style = {styles.goalBriefText}>Help me burn out bright</Text>
                </View>
                <View style = {styles.checkIconWrapper}>
                    <Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
                </View>
            </View>
            <View style = {styles.goalCard}>
                <View style = {styles.goalDetailWrapper}>
                    <Text style = {styles.goalTitleText}>Learn Javascript</Text>
                    <Text style = {styles.goalBriefText}>Help me burn out bright</Text>
                </View>
                <View style = {styles.checkIconWrapper}>
                    <Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
                </View>
            </View>
            <View style = {styles.goalCard}>
                <View style = {styles.goalDetailWrapper}>
                    <Text style = {styles.goalTitleText}>Learn Javascript</Text>
                    <Text style = {styles.goalBriefText}>Help me burn out bright</Text>
                </View>
                <View style = {styles.checkIconWrapper}>
                    <Image style = {styles.checkIcon} source = {require('../../assets/icons/checked-inactive.png')} /> 
                </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

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

const ListTab = TabNavigator(
  {
    'ongoing': {
      screen: Ongoing,
      navigationOptions: {
        //   headerTitle: 'Pinjaman Saya',
      },
    },
    'completed': {
      screen: Completed,
      navigationOptions: {
        //   headerTitle: 'Pinjaman Saya',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#CFFAFF',
      style: {
        backgroundColor: '#2196F3',
        elevation: 0,
        shadowOpacity: 0,
      },
      indicatorStyle: { backgroundColor: '#FFFFFF' },
    },
  },
)

const App = StackNavigator(
	{
		list: {
			screen: ListTab,
			navigationOptions: {
				header: null,
			}
		}
	},
	{
    initialRouteName: 'list'
  }
)
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
        style={{flex:1}}
        indicator={this._renderTabIndicator()}>
          <View>
              <Home onPress={() => this.props.navigation.navigate('detail')}/>
          </View>
          <View>
              <AddGoal />
          </View>
          <View>
							{/* <ExampleView /> */}
							 {/* <List /> */}
							{/* <Detail /> */}
              <GoalsList onPress={() => this.props.navigation.navigate('detail')}/>
          </View>
        </IndicatorViewPager>
      </View>
      );
  }
}