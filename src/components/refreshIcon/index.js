import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import { connect } from 'react-redux'

//GET STATE
const mapStateToProps = state => ({ home: state.home })

export default class RefreshIcon extends Component {
	constructor(props) {
    super(props);
    this.state = {
      pic: require('../../assets/icons/refresh.png')
		}
	}

	iconClicked() {
    this.setState({
      pic: require('../../assets/icons/checked-active.png')
    });
    this.goalsCount++;
	}
	
	render() {
		return (
			<TouchableOpacity style = {styles.checkIconWrapper} /* onPress={() => this.iconClicked()} */>
				<Image style = {[{width: 30, height: 30, opacity: 0.5}]} source = {this.state.pic} /> 
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