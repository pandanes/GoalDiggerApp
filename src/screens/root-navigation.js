
import { StackNavigator } from 'react-navigation'

import Home from './home'
import TabNavigator from './list'
//import TabNavigator from './home'

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
        headerTitle: 'Dashboard',
    },
    list: {
        screen: TabNavigator,
        headerTitle: 'List'
        },
     /* list: {
      screen: List,
    }  */
},
  {initialRouteName: 'list'}
)

export default AppNavigator
