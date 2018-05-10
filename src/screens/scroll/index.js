import React, { Component } from 'react';
import {
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CheckIcon from '../../components/checkIcon'

import styles from '../shared-style'

const HEADER_EXPANDED_HEIGHT = 220;
const HEADER_COLLAPSED_HEIGHT = 130;

const { width: SCREEN_WIDTH } = Dimensions.get("screen")

export default class Scroll extends Component {
  constructor() {
    super();

    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

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

    const headerTitle = 'HEADER'

    const goals= [
      {title: 'Learn Javascript', brief: 'Lorem ipsum dolor sit amet'},
      {title: 'Save the world', brief: 'Lorem ipsum dolor sit amet'},
      {title: 'Learn to fly', brief: 'Help me burn out bright'},
      {title: '💩💩💩💩💩💩', brief: '😴😴😴😴😴😴'},
      {title: 'aaaaaaaaaaa', brief: ''},
      {title: 'aaaaaaaaaaa', brief: ''},
      {title: 'aaaaaaaaaaa', brief: ''}
    ];

    return (
      <View style={styles1.container}>
        <Animated.View style={[styles1.header, { height: headerHeight }]}>
          {/* <Animated.Text style={{textAlign: 'right', fontSize: 18, color: 'black', marginTop: 28, opacity: headerTitleOpacity}}>akhir header title</Animated.Text> */}

          <Animated.View style={{ opacity: headerTitleOpacity, bottom: 16, left: 16, marginTop: 28}}>
          <View style = {styles1.counterContainer}>
              <View style = {styles1.counterRectangleCollapsed}>
                <Text style = {styles1.counterTextCollapsed}>GOALS DONE: 0</Text>
              </View>
              <View style = {styles1.counterRectangleCollapsed}>
                <Text style = {styles1.counterTextCollapsed}>REWARDS RECEIVED: 0</Text>
              </View>
            </View>
            <Text style = {styles.titleText}>TODAY GOALS</Text>
          </Animated.View>


         {/*  <Animated.Text style={{textAlign: 'center', fontSize: 32, color: 'tomato', position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity}}>awal hero title</Animated.Text> */}

          <Animated.View style = {{position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity}}>
            <Animated.Text style = {[styles.titleText, {opacity: heroTitleOpacity}]}>TODAY STATS</Animated.Text>
            <View style = {styles1.counterContainer}>
              <View style = {styles1.counterRectangle}>
                <Text style = {styles1.counterNumber}>0</Text>
                <Text style = {styles1.counterText}>GOALS DONE</Text>
              </View>
              <Animated.View style = {styles1.counterRectangle}>
                <Animated.Text style = {styles1.counterNumber}>0</Animated.Text>
                <Animated.Text style = {styles1.counterText}>REWARDS RECEIVED</Animated.Text>
              </Animated.View>
            </View>
          </Animated.View>

        </Animated.View>
        <ScrollView
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
    );
  }
}

const styles1 = StyleSheet.create({
  counterContainer: {
    width: SCREEN_WIDTH-32,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 16,
    marginBottom: 25,
	},
	counterRectangle: {
		width: SCREEN_WIDTH*0.44,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 12,
		backgroundColor: 'rgba(255,255,255,1)',
		borderRadius: 4,
		minHeight: 116,
		shadowRadius: 12,
		shadowOpacity: 1,
    elevation: 3,
	},
	counterNumber: {
		fontFamily: 'OpenSans',
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

  counterRectangleCollapsed: {
    width: SCREEN_WIDTH*0.44,
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

  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollContainer: {
    padding: 16,
    paddingTop: HEADER_EXPANDED_HEIGHT
  },
  header: {
    backgroundColor: 'white',
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999,
    marginBottom: 4,
    shadowOpacity: 0.5,
    elevation: 1,
  },
  title: {
    marginVertical: 16,
    color: "black",
    fontWeight: "bold",
    fontSize: 24
  }
});