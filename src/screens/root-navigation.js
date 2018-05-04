
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
    },
    list: {
        screen: TabNavigator,
        },
    addNew: {
        screen: AddNew,
    },
    detail: {
        screen: Detail,
        navigationOptions: {
            header: null,
          },
    }
},
  {initialRouteName: 'home'}
)

export default AppNavigator
