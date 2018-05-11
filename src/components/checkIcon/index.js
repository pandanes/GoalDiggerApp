import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import { connect } from 'react-redux'
import { homeActions } from '../../redux/modules/home'

const active = require('../../assets/icons/checked-active.png')
const inactive = require('../../assets/icons/checked-inactive.png')


//GET STATE
const mapStateToProps = state => ({ home: state.home })

const mapDispatchToProps = dispatch => ({
  goalCount: () => dispatch(homeActions.goalCount())
})
class CheckIcon extends Component {
	constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      disabled: false,
		}
  }
  
  onClick() {

console.log('landing here', this.props.goalCount)
    this.setState({ clicked: true, disabled: true })
    this.props.goalCount()
  }
	
	render() {
    console.log('landing here 1')
		return (
			<TouchableOpacity disabled={this.state.disabled} style = {styles.checkIconWrapper} onPress={() => this.onClick()}>
				<Image style = {styles.checkIcon} source = {this.state.clicked ? active : inactive} /> 
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckIcon)