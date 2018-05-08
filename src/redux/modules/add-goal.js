//ACTION TYPE OR ACTIONS CREATOR
export const ADD_GOAL_ACTIONS = Object.freeze({
	SAVE_GOAL_NAME: '../../screens/saveGoalName',
	SAVE_GOAL_BRIEF: '../../screens/saveGoalBrief',
	SAVE_FREQUENCY: '../../screens/saveFrequency',
	SAVE_IMMEDIATE_REWARDS: '../../screens/saveImmediateRewards',
	SAVE_COMPLETED_REWARDS: '../../screens/saveCompletedRewards'
})

//ACTIONS
export const addGoalActions = Object.freeze({
	saveGoalName: (text) => ({ type: ADD_GOAL_ACTIONS.SAVE_GOAL_NAME, text}),
	saveGoalBrief: (text) => ({ type: ADD_GOAL_ACTIONS.SAVE_GOAL_BRIEF, text}),
	saveFrequency: (value) => ({ type: ADD_GOAL_ACTIONS.SAVE_FREQUENCY, value}),
	saveImmediateRewards: (text) => ({ type: ADD_GOAL_ACTIONS.SAVE_IMMEDIATE_REWARDS, text}),
	saveCompletedRewards: (text) => ({ type: ADD_GOAL_ACTIONS.SAVE_COMPLETED_REWARDS, text})
})

//REDUCER
const initState = {
	goalsDone: [],
	rewardsReceived: [],
	todayGoals: [],
	ongoingGoals: [],
	completedGoals: [],
	dailyLog: false,
	statsDone: 0,
	statsUndone: 0,

	goalName: '',
	goalBrief: '',
	frequency: '',
	immediateRewards: '',
	completedRewards: ''
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_GOAL_ACTIONS.SAVE_GOAL_NAME:
			return {...state, goalName: action.text}
		case ADD_GOAL_ACTIONS.SAVE_GOAL_BRIEF:
			return {...state, goalBrief: action.text}
		case ADD_GOAL_ACTIONS.SAVE_FREQUENCY:
			return {...state, frequency: action.text}
		case ADD_GOAL_ACTIONS.SAVE_IMMEDIATE_REWARDS:
			return {...state, immediateRewards: action.text}
		case ADD_GOAL_ACTIONS.SAVE_COMPLETED_REWARDS:
			return {...state, completedRewards: action.text}
		default:
			return state
 }
}

export default reducer