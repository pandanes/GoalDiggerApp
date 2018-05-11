//ACTIONS TYPE OR ACTION CREATOR
export const HOME_ACTIONS = Object.freeze({
  SET_GOAL: `../../views/main/setGoal`,
})

//ACTIONS
export const homeActions = Object.freeze({
  setGoal: value => ({ type: HOME_ACTIONS.SET_GOAL, value }),
})

/**
 * Reducer
 */

const initState = {
    goalsCount: 0,
    rewardsCount: 0,
    goal: {}
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case HOME_ACTIONS.SET_GOAL:
      return {
        ...state,
        goal: action.value
      }
    default:
      return state
  }
}

export default reducer
