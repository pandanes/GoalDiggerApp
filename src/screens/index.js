import React from 'react'
import { StackNavigator } from 'react-navigation'
import AppNavigator from './root-navigation'
import OnboardPager from './onboard'
import Splash from './splash'
import SignIn from './signin'


class RootView extends React.Component {

  render() {
    return (
      <AppNavigator />
    )
  }
}

export default RootView