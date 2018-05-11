import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './style'

/* const DayCircle = (props) => (
     <TouchableOpacity
    style = {[styles.dayCircle, props.style]}
    onPress = {props.onPress}
    >
        <Text style = {[styles.dayCircleText, props.textStyle]}>
        {props.text}
        </Text>
    </TouchableOpacity>
)  */

class DayCircle extends Component {
  constructor(props) {
    super(props);
  }
  
	render() {
		return (
      <View>
			<TouchableOpacity 
        // style = {[styles.dayCircle, this.props.style]}
        //hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        style = {this.props.status ? styles.dayCircleSelected : styles.dayCircle}
        onPress = {this.props.onPressButton}
      >
        <Text onPress = {this.props.onPressButton} style = {this.props.status ? styles.dayCircleTextSelected : styles.dayCircleText}>
          {this.props.text}
        </Text>
    </TouchableOpacity>
    </View>
		)
	}
}

export default DayCircle