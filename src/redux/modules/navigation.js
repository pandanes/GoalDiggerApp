import AppNavigator from '../../screens/root-navigation'

const initState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('bottomNav'),
)

const navReducer = (state = initState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
}

export default navReducer