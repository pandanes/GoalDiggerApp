//ACTIONS TYPE OR ACTION CREATOR
export const HOME_ACTIONS = Object.freeze({
  SET_GOAL: `../../views/home/setGoal`,
  GOAL_COUNT: `../../views/home/goalCount`,
  SET_GOALS: `../../views/home/setGoals`,
})

//ACTIONS
export const homeActions = Object.freeze({
  setGoal: value => ({ type: HOME_ACTIONS.SET_GOAL, value }),
  goalCount: () => ({ type: HOME_ACTIONS.GOAL_COUNT }),
  setGoals: value => ({ type: HOME_ACTIONS.SET_GOALS, value }),
})

/* const watchGoalsData = () => {
  return function(dispatch) {
    firebase.database().ref("goals").on("value", function(snapshot)
    { 
        var goals = snapshot.val();
        var actionSetGoals = setGoals(goals);
        dispatch(actionSetGoals);
    }, function(error) { console.log(error); });
  }
}, */

/**
 * Reducer
 */

const initState = {
    goalsCount: 1,
    rewardsCount: 1,
    goal: {},
    goals: {},
    goalsDataArray: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case HOME_ACTIONS.SET_GOAL:
      return {
        ...state,
        goal: action.value
      }
    case HOME_ACTIONS.GOAL_COUNT:
    console.log('Am I triggered???')
      return {
        ...state,
        goalsCount: state.goalsCount + 1,
        rewardsCount: state.rewardsCount + 1
      }
      case HOME_ACTIONS.SET_GOALS:
      return {
        ...state,
        goals: action.value
      }
    default:
      return state
  }
}

export default reducer
