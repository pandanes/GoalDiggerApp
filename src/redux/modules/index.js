import { combineReducers } from 'redux'

//Import class
import addGoal from './add-goal'
import home from './home'
import navigation from './navigation'


export default combineReducers({
addGoal,
home,
navigation,
})

