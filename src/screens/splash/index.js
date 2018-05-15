import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class Splash extends Component {
  constructor(props){
    super(props);
  }

/*   componentDidMount (){
    setTimeout(() => {
      this.navigate('splash')
    }, 1000)
  } */

  /* navigate = routeName => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    })
    this.props.navigation.dispatch(resetAction)
  } */

  render() {
    return (
      <View style = {styles.container}>
        <View styles = {styles.imageContainer}><Image style = {{width: 189, height: 104}} source ={ require('../../assets/logo.png')} /></View>
        <Image style = {{width: 147, height: 22, marginTop: 16}} source ={ require('../../assets/logotitle.png')} />
        <Text style = {styles.titleText}>Version 0.9.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 200,
    backgroundColor: 'rgba(74,144,226,1)'
  },
  titleText: {
    fontFamily: "Open-Sans",
    fontSize: 13,
    color: "white",
    marginTop: 4
  },
})