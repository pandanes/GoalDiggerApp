import React, { Component } from 'react';
import { Text, Image, View, ScrollView, FlatList, Dimensions, StyleSheet, TouchableOpacity, Animated, AsyncStorage} from 'react-native';
import { connect } from 'react-redux'
import { homeActions } from '../../redux/modules/home'
import styles from '../shared-style'
import CheckIcon from '../../components/checkIcon'

//GET STATE
const mapStateToProps = state => ({ home: state.home })

//DISPATCH ACTIONS
const mapDispatchToProps = dispatch => ({
  setGoal: value => dispatch(homeActions.setGoal(value))
})

const goals= [
  {title: 'Learn Javascript', brief: 'Lorem ipsum dolor sit amet'},
  {title: 'Save the world', brief: 'Lorem ipsum dolor sit amet'},
  {title: 'Learn to fly', brief: 'Help me burn out bright'},
  {title: '💩💩💩💩💩💩', brief: '😴😴😴😴😴😴'},
  {title: 'aaaaaaaaaaa', brief: ''}
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  async componentDidMount() {
    AsyncStorage.getItem('data')
    .then(res => this.setState({ data: JSON.parse(res) }))
    //Dispatched action👆
    this.props.setGoal(data)
    .catch(err => console.log('landing here error'))

    console.log('render different state', props.home.goal)
  }

  render(){
    return (
      <View style = {{flex:1}}>
            <View style = {styles.header}>
              <Text style = {styles.headerText}>Dashboard</Text>
            </View>
            <View style = {styles.container}>
              <ScrollView showsVerticalScrollIndicator = {false}>
                <Text style = {styles.titleText}>TODAY STATS</Text>
                <View style = {styles.counterContainer}>
                  <View style = {styles.counterRectangle}>
                    <Text style = {styles.counterNumber}>0</Text>
                    <Text style = {styles.counterText}>GOALS DONE</Text>
                  </View>
                  <View style = {styles.counterRectangle}>
                    <Text style = {styles.counterNumber}>0</Text>
                    <Text style = {styles.counterText}>REWARDS RECEIVED</Text>
                  </View>
                </View>
                <Text style = {styles.titleText}>TODAY GOALS</Text>
                <TouchableOpacity
                    style = {styles.goalCard}
                    onPress={this.props.onPress}>
                    <View style = {styles.goalDetailWrapper}>
                      <Text style = {styles.goalTitleText}>{this.goalBrief}</Text>
                      <Text style = {styles.goalBriefText}>{this.goalBrief}</Text>
                    </View>
                    <CheckIcon />
                  </TouchableOpacity>
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
            </View>
          </View>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

