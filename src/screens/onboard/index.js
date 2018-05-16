import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import { PagerDotIndicator, IndicatorViewPager } from "rn-viewpager";
import { StackNavigator, createStackNavigator } from 'react-navigation';

class Onboard1 extends Component {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <View style = {styles.onboardImageContainer}>
          <Image style = {styles.onboardImage} source = {require('../../assets/onboarding/Onboard1.png')} />
        </View>
        <View style = {styles.onboardTextContainer} >
          <Text style = {styles.onboardTitle}>
            BABY STEPS
          </Text>
          <Text style = {styles.onboardCaption}>
            Weekly basis tracker makes it easier to stick to your habits regularly.
          </Text>
        </View>
        <View style = {styles.onboardPagerContainer} >
            <TouchableOpacity style={{ flex: 1 }}><Text style={[styles.pagerText, {color: 'rgba(149,149,149,1)'}]}>SKIP</Text></TouchableOpacity>
            <TouchableOpacity style={{ flex: 4 }}><Text style={styles.pagerCircle}></Text></TouchableOpacity>
            <TouchableOpacity onPress={this.props.onPress} style={{ flex: 1 }}><Text style={[styles.pagerText, {color: 'rgba(93,163,244,1)'}]}>NEXT</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export class Onboard2 extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.onboardImageContainer}>
          <Image style = {{width: 339, height: 236}} source = {require('../../assets/onboarding/Onboard2.png')} />
        </View>
        <View style = {styles.onboardTextContainer} >
          <Text style = {styles.onboardTitle}>
            LOG DAILY
          </Text>
          <Text style = {styles.onboardCaption}>
            Never forget a task, we remind you daily.
          </Text>
        </View>
        <View style = {styles.onboardPagerContainer} >
            <TouchableOpacity style={{ flex: 1 }}><Text style={[styles.pagerText, {color: 'rgba(149,149,149,1)'}]}>SKIP</Text></TouchableOpacity>
            <TouchableOpacity style={{ flex: 4 }}><Text style={styles.pagerCircle}></Text></TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }}><Text style={[styles.pagerText, {color: 'rgba(93,163,244,1)'}]}>NEXT</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Onboard3 extends Component {
  render() {

    return (
      <View style = {styles.container}>
        <View style = {styles.onboardImageContainer}>
          <Image style = {{width: 339, height: 236}} source = {require('../../assets/onboarding/Onboard3.png')} />
        </View>
        <View style = {styles.onboardTextContainer} >
          <Text style = {styles.onboardTitle}>
            GET REWARDS
          </Text>
          <Text style = {styles.onboardCaption}>
          Set rewards to keep you motivated completing your goals.
          </Text>
        </View>
        <View style = {styles.onboardPagerContainer} >
            <TouchableOpacity style={{ flex: 1 }}><Text style={[styles.pagerText, {color: 'rgba(149,149,149,1)'}]}></Text></TouchableOpacity>
            <TouchableOpacity style={{ flex: 4 }}><Text style={styles.pagerCircle}></Text></TouchableOpacity>
            <TouchableOpacity 
              onPress={this.props.onPress}
              style={{ flex: 1 }}><Text style={[styles.pagerText, {color: 'rgba(93,163,244,1)'}]}>FINISH</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class OnboardPager extends Component {
  render() {
      return (
          <View style={{flex:1}}>
              <IndicatorViewPager
                  style={{height:'100%'}}
                  indicator={this._renderDotIndicator()}   
              >
                
                  <View>
                      <Onboard1 onPress={() => this.props.navigation.navigate('onboard2')}/>
                  </View>
                  <View>
                    <Onboard2 />
                  </View>
                  <View>
                    <Onboard3 onPress={() => this.props.navigation.navigate('signin')} />
                  </View>
              </IndicatorViewPager>

          </View>
      );
  }

  _renderDotIndicator() {
    return <PagerDotIndicator 
            pageCount={3}
            style = {{paddingBottom: 12}}
            dotStyle={{
              backgroundColor: 'rgba(21,180,241,0.3)'
            }}
            selectedDotStyle={{
              backgroundColor: 'rgba(93,163,244,1)',
              width: 20
            }}
            />;
}
}

const App = StackNavigator({
  Onboard1: { screen: Onboard1 },
  Onboard2: { screen: Onboard2 },
  Onboard3: { screen: Onboard3 },
});

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  onboardImageContainer: {
    flex: 6,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'cyan'
  },
  onboardTextContainer: {
    flex: 4,
    width: '100%',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 42,
    //backgroundColor: 'azure',
    borderBottomWidth: 1,
    borderColor: 'rgba(234,234,234,1)'
  },
  onboardImage: {
    //width: 295, height: 217
    width: 339,
    height: 224
  },
  onboardTitle: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 20,
    color: "rgba(81,81,81,1.0)",
    letterSpacing: 1.64,
    lineHeight: 24,
  },
  onboardCaption: {
    width: 0.7*width,
    fontFamily: "OpenSans",
    fontWeight: '400',
    fontSize: 16,
    color: "rgba(81,81,81,1.0)",
    letterSpacing: 1.28,
    lineHeight: 26,
    marginTop: 20,
    textAlign: 'center',
  },
  onboardPagerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    //backgroundColor: 'beige'
  },
  pagerText: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 14,
    color: "rgba(149,149,149,1)",
    letterSpacing: 0,
    lineHeight: 19,
    textAlign: 'center',
  },
  pagerCircle: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 16,
    //backgroundColor: 'crimson'
  }



})
