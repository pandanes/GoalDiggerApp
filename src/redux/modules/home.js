//ACTIONS TYPE OR ACTION CREATOR
export const HOME_ACTIONS = Object.freeze({
  SET_GOAL: `../../views/home/setGoal`,
  GOAL_COUNT: `../../views/home/goalCount`
})

//ACTIONS
export const homeActions = Object.freeze({
  setGoal: value => ({ type: HOME_ACTIONS.SET_GOAL, value }),
  goalCount: () => ({ type: HOME_ACTIONS.GOAL_COUNT }),
})

/**
 * Reducer
 */

const initState = {
    goalsCount: 1,
    rewardsCount: 1,
    goal: {}
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
    default:
      return state
  }
}

export default reducer
