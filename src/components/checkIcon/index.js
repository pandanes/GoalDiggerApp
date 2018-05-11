import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

export default class CheckIcon extends Component {
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
     // goals done ++
	}
	
	render() {
		return (
			<TouchableOpacity style = {styles.checkIconWrapper} onPress={() => this.iconClicked()}>
				<Image style = {styles.checkIcon} source = {this.state.pic} /> 
			</TouchableOpacity>
		)
	}
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
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