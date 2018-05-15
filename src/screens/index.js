import React from 'react'
import { StackNavigator } from 'react-navigation'
import AppNavigator from './root-navigation'
import OnboardPager from './onboard'
import Splash from './splash'


class RootView extends React.Component {

  render() {
    return (
      <Splash />
    )
  }
}

export default RootView