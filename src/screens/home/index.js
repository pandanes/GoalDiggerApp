import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { homeActions } from "../../redux/modules/home";
import Swipeable from 'react-native-swipeable';
import styles from "../shared-style";
import CheckIcon from "../../components/checkIcon";

import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//GET STATE
const mapStateToProps = state => ({ home: state.home });

//DISPATCH ACTIONS
const mapDispatchToProps = dispatch => ({
  setGoal: value => dispatch(homeActions.setGoal(value))
});

//Collapsing animations
const HEADER_EXPANDED_HEIGHT = 220;
const HEADER_COLLAPSED_HEIGHT = 140;

//Swipeable goal cards
const rightButtons = [
  <TouchableOpacity style={{height: 75, marginTop: 16, paddingLeft: '6%', backgroundColor:'#92E5B4', justifyContent: 'center'}}>
    <Image style = {{width: 30, height: 32}} source = {require('../../assets/icons/edit.png')} />
  </TouchableOpacity>,
  <TouchableOpacity style={{height: 75, marginTop: 16, paddingLeft: '6%', backgroundColor:'#FF5E71', justifyContent: 'center'}}>
    <Image style = {{width: 30, height: 32}} source = {require('../../assets/icons/delete.png')} />
  </TouchableOpacity>
];

const goals = [
  { title: "Learn Javascript", brief: "Lorem ipsum dolor sit amet" },
  { title: "Save the world", brief: "Lorem ipsum dolor sit amet" },
  { title: "Learn to fly", brief: "Help me burn out bright" },
  { title: "💩💩💩💩💩💩", brief: "😴😴😴😴😴😴" },
  { title: "aaaaaaaaaaa", brief: "" }
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("data")
      .then(res => {
        const data = JSON.parse(res);
        this.setState({ data });
        //Dispatched action👆
        this.props.setGoal(data);
        console.log("check", data);
      })
      .catch(err => console.log("landing here error"));
  }

  state = {
    leftActionActivated: false,
    toggle: false
  };

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });
    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const heroTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    
    const {leftActionActivated, toggle} = this.state;

    //console.log("landing inkjsdkjhskdjhka", this.state.data);
    //console.log('landing fireeebaseee', data)

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
        </View>
        <View style={styles.container}>

        <Animated.View style={[styles1.header, { height: headerHeight }]}>
          <Animated.View style={{ opacity: headerTitleOpacity, bottom: 16, paddingHorizontal: 16, paddingBottom: 16, marginVertical: 28 }}>
          <View style = {styles1.counterContainer}>
              <View style = {styles1.counterRectangleCollapsed}>
                <Text style = {styles1.counterTextCollapsed}>GOALS DONE: {this.props.home.goalsCount}</Text>
              </View>
              <View style = {styles1.counterRectangleCollapsed}>
                <Text style = {styles1.counterTextCollapsed}>REWARDS RECEIVED: {this.props.home.rewardsCount}</Text>
              </View>
            </View>
            <Text style = {styles.titleText}>TODAY GOALS</Text>
            <View style={{ height: 1, backgroundColor: '#B0E5FF', marginTop: 10}} />
          </Animated.View>

          <Animated.View style = {{position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity}}>
            <Animated.Text style = {[styles.titleText, {opacity: heroTitleOpacity}]}>TODAY STATS</Animated.Text>
              <View style={styles1.counterContainer}>
                <View style={styles.counterRectangle}>
                  <Text style={styles.counterNumber}>
                    {this.props.home.goalsCount}
                  </Text>
                  <Text style={styles.counterText}>GOALS DONE</Text>
                </View>
                <Animated.View style={styles.counterRectangle}>
                  <Animated.Text style={styles.counterNumber}>
                    {this.props.home.rewardsCount}
                  </Animated.Text>
                  <Animated.Text style={styles.counterText}>REWARDS RECEIVED</Animated.Text>
                </Animated.View>
              </View>
            </Animated.View>

        </Animated.View>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles1.scrollContainer}
        onScroll={Animated.event(
          [{ nativeEvent: {
              contentOffset: {
                y: this.state.scrollY
              }
            }
          }])
        }
          scrollEventThrottle={16}>

            <Animated.Text style = {[styles.titleText, {opacity: heroTitleOpacity}]}>TODAY GOALS</Animated.Text>
            <Swipeable leftActionActivationDistance={200}
            leftContent={(
              <View style={{height: 75, marginTop: 16, backgroundColor: leftActionActivated ? 'lightgoldenrodyellow' : 'steelblue'}}>
                {leftActionActivated ?
                  <Text style={{textAlign: 'right'}}>release!</Text> :
                  <Text style={{textAlign: 'right'}}>keep pulling!</Text>}
              </View>
            )}
            onLeftActionActivate={() => this.setState({leftActionActivated: true})}
            onLeftActionDeactivate={() => this.setState({leftActionActivated: false})}
            onLeftActionComplete={() => this.setState({toggle: !toggle})}
            rightButtons={rightButtons}
          >
              <TouchableOpacity
                style={[styles.goalCard, { maxHeight: 75 }]}
                onPress={() => this.props.onPress(this.state.data)}
              >
                <View style={styles.goalDetailWrapper}>
                  <Text style={styles.goalTitleText}>
                    {this.props.home.goal.goalName}
                  </Text>
                  <Text style={styles.goalBriefText}>
                    {this.props.home.goal.goalBrief}
                  </Text>
                </View>
                <CheckIcon />
              </TouchableOpacity>
            </Swipeable>
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.title}
              data={goals}
              renderItem={({ item }) => (
                <Swipeable 
                leftActionActivationDistance={200}
                leftContent={(
                  <View style={{height: 75, marginTop: 16, backgroundColor: leftActionActivated ? 'lightgoldenrodyellow' : 'steelblue'}}>
                    {leftActionActivated ?
                      <Text style={{textAlign: 'right'}}>release!</Text> :
                      <Text style={{textAlign: 'right'}}>keep pulling!</Text>}
                  </View>
                )}
                onLeftActionActivate={() => this.setState({leftActionActivated: true})}
                onLeftActionDeactivate={() => this.setState({leftActionActivated: false})}
                onLeftActionComplete={() => this.setState({toggle: !toggle})}
                rightButtons={rightButtons}
                >
                <TouchableOpacity
                  style={styles.goalCard}
                  onPress={this.props.onPress}
                >
                  <View style={styles.goalDetailWrapper}>
                    <Text style={styles.goalTitleText}>{item.title}</Text>
                    <Text style={styles.goalBriefText}>{item.brief}</Text>
                  </View>
                  <CheckIcon />
                </TouchableOpacity>
                </Swipeable>
              )}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const { width } = Dimensions.get("window");
const styles1 = StyleSheet.create({
  counterContainer: {
    width: width-32,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 16,
    marginBottom: 24,
	},
  counterRectangleCollapsed: {
    width: width*0.44,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 4,
    //shadowRadius: 12,
    shadowOpacity: 0.5,
    elevation: 2,
  },
  counterNumberCollapsed: {
    fontFamily: 'OpenSans',
    color: 'rgba(81,81,81,1.0)'
  },
  counterTextCollapsed: {
    fontFamily: 'OpenSans',
    fontWeight: '500',
    fontSize: 13,
    color: 'rgba(74,144,226,1)',
    letterSpacing: 0.8,
  },
  scrollContainer: {
    paddingTop: HEADER_EXPANDED_HEIGHT-16
  },
  header: {
    backgroundColor: 'rgba(253,253,253,1.0)',
    position: 'absolute',
    width: width,
    top: 0,
    left: 0,
    zIndex: 9999,
  },
});