import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  dayCircle: {
		width: 45,
		height: 45,
		backgroundColor: 'rgba(196,196,196,0.32)',
		borderRadius: 45/2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	dayCircleText: {
		fontFamily: 'OpensSans',
		fontWeight: 'bold',
		fontSize: 16,
		color: 'rgba(81,81,81,0.8)',
		letterSpacing: 1
	},
	dayCircleSelected: {
    width: 45,
		height: 45,
		borderRadius: 45/2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(74,144,226,1)'
	},
	dayCircleTextSelected: {
		fontFamily: 'OpensSans',
		fontWeight: 'bold',
		fontSize: 16,
		color: 'rgba(255,255,255,1)',
		letterSpacing: 1
	},
})

export default styles