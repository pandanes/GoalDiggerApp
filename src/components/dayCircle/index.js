import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
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
			<TouchableOpacity
        // style = {[styles.dayCircle, this.props.style]}
        style = {this.props.status ? styles.dayCircleSelected : styles.dayCircle}
        onPress = {this.props.onPress}
      >
        <Text style = {this.props.status ? styles.dayCircleTextSelected : styles.dayCircleText}>
          {this.props.text}
        </Text>
    </TouchableOpacity>
		)
	}
}

export default DayCircle