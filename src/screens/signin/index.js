import React, { Component } from 'react';
import { Text, TextInput, Image, TouchableOpacity, View, StyleSheet, ScrollView, Dimensions, AsyncStorage } from 'react-native';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = (text) => {
    this.setState({ username: text})
  }

  handlePassword = (text) => {
    this.setState({ password: text })
  }

  handleLogin = (pic) => {
    const { email, password } = this.state;
  }

  render() {
    const {username, password, pic} = this.state
    const valid = username && password != ''   
    const enabled = username.length > 0 && password.length > 0; 

    return (
      <View style = {styles.container}>
        <View style = {{alignItems: 'center'}}>
          <Image style = {{width: 160, height: 88}} source = {require ('../../assets/logo.png')} />
          <Image style = {{width: 122, height: 19, marginTop: 14}} source ={ require('../../assets/logotitle.png')} />
        </View>
        <Text style = {{fontFamily: 'OpenSans', fontStyle: 'italic', fontSize: 16, color: '#FFFFFF', textAlign: 'center', marginTop: 10, marginBottom: 20}}>Habit tracker made simple</Text>
        
        <View style = {styles.rewardsFormContainer}>
          <Text style = {styles.titleText}>Username:</Text>
          <TextInput
          style = {styles.rewardsTextInput}
          placeholder = 'Username'
          placeholderTextColor = 'rgba(196,196,196,1)'
          underlineColorAndroid = 'transparent'
          onChangeText = {text => this.handleUsername(text)}
          //value = {immediateRewards}
          />
          <Text style = {styles.titleText}>Password:</Text>
          <TextInput
          style = {styles.rewardsTextInput}
          placeholder = 'Password'
          secureTextEntry={true}
          placeholderTextColor = 'rgba(196,196,196,1)'
          underlineColorAndroid = 'transparent'
          onChangeText = {text => this.handlePassword(text)}
          //value = {completedRewards}
          />
        </View>
        <TouchableOpacity
        disabled={!enabled}
        style = {[styles.buttonSignIn, valid ? {backgroundColor:'rgba(44,110,183,1)'} : {backgroundColor:'rgba(196,196,196,0.5)'}]}
        onPress={() => this.props.navigation.navigate('bottomNav')}
        >
          <Text style = {[styles.buttonSignInText, valid ? {color:'#FFFFFF'} : {color:'rgba(255,255,255,0.3)'}]}>SIGN IN</Text>
        </TouchableOpacity>
        <Text style = {{fontFamily: 'OpenSans', fontSize: 12, color: '#FFFFFF', textAlign: 'center', marginTop: 14}}>Don’t have an account? Sign Up <Text style = {{textDecorationLine: 'underline'}}>here</Text>.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(74,144,226,1)',
    paddingHorizontal: 32,
    paddingTop: 70
  },
  titleText: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(81,81,81,1.0)",
    letterSpacing: 1.28,
    lineHeight: 19
  },
  rewardsFormContainer: {
    marginTop: 12,
    marginBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 4,
    elevation: 2
  },
  rewardsTextInput: {
    fontSize: 16,
    letterSpacing: 1,
    marginBottom: 20,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(216,216,216,1)"
  },
  buttonSignIn: {
    paddingVertical: 12,
    backgroundColor: "rgba(44,110,183,1)",
    borderRadius: 5
  },
  buttonSignInText: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(255,255,255,1.0)",
    letterSpacing: 1.28,
    textAlign: "center"
  }
})


