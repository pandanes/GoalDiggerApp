
import { StackNavigator } from 'react-navigation'

import Home from './home'
import TabNavigator from './list'
import AddGoal from './add-goal'
import Detail from './detail'
import BottomNav from './bottom-nav-bar'

const AppNavigator = StackNavigator({
/*     login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
     */
    home: {
        screen: Home,
    },
    list: {
        screen: TabNavigator,
        },
    addGoal: {
        screen: AddGoal,
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
    }
},
  {initialRouteName: 'bottomNav'}
)

export default AppNavigator
