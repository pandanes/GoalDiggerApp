
import { StackNavigator } from 'react-navigation'

import Home from './home'
import List from './list'
//import TabNavigator from './home'

const AppNavigator = StackNavigator({
/*     login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    }, */
    home: {
      screen: Home,
      headerTitle: 'Dashboard',
    },
     list: {
      screen: List,
    } 
},
  {initialRouteName: 'home'}
)

export default AppNavigator
