import { StackNavigator } from 'react-navigation'

import Home from './home'
import App from './list'
import AddGoal from './add-goal'
import Detail from './detail'
import BottomNav from './bottom-nav-bar'
import Splash from './splash'
import Welcome from './welcome'
import Onboard from './onboard'

const AppNavigator = StackNavigator({
  splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
    }
},
    detail: {
        screen: Detail,
        navigationOptions: {
          header: null,
          }
    },
    bottomNav: {
        screen: BottomNav,
        navigationOptions: {
          header: null
        }
    },
    welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    onboard: {
      screen: Onboard,
      navigationOptions: {
        header: null,
      },
    },
},
  {initialRouteName: 'bottomNav'}
)

export default AppNavigator
