import React, { Component } from 'react';
import { Button, Text, Image, View, FlatList, TouchableOpacity, ScrollView, Dimensions, StyleSheet} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

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
		//<View style = {{flex:1}}>
			<View style = {styles.container}>
				<ScrollView showsVerticalScrollIndicator = {false}><Button
              title="tes"
              onPress={() => this.props.navigation.navigate('detail')}
            />
					<FlatList
					showsVerticalScrollIndicator={false}
					keyExtractor={item => item.title}
					data = {goals}
					renderItem = {
						({item}) => 
						<TouchableOpacity style = {styles.goalCard} onPress={() => this.props.navigation.navigate('detail')}>
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
		//</View>
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
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 25
    },
    counterRectangle: {
        width: width*0.44,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 4,
        minHeight: 116,
        shadowColor: 'red',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 12,
        shadowOpacity: 1,
        elevation: 3,
    },
    counterNumber: {
        fontFamily: 'OpenSans',
        //fontWeight: '400',
        fontSize: 52,
        color: 'rgba(81,81,81,1.0)'
    },
    counterText: {
        fontFamily: 'OpenSans',
        fontWeight: '500',
        fontSize: 14,
        letterSpacing: 1,
        color: 'rgba(74,144,226,1)',
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
        //borderWidth: 1
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

export default TabNavigator({
  Ongoing: { screen: Ongoing },
  Completed: { screen: Completed },
});