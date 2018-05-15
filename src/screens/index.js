import React from 'react'
import { StackNavigator } from 'react-navigation'
import AppNavigator from './root-navigation'
import OnboardPager from './onboard'
import Splash from './splash'
import SignIn from './sign-in'


class RootView extends React.Component {

  render() {
    return (
      <SignIn />
    )
  }
}

export default RootView