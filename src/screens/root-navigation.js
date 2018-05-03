
import { StackNavigator } from 'react-navigation'

import Home from './home'
import TabNavigator from './list'
import AddNew from './add-new'
import Detail from './detail'

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
    addNew: {
        screen: AddNew,
    },
    detail: {
        screen: Detail
    }
},
  {initialRouteName: 'detail'}
)

export default AppNavigator
