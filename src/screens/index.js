import React from 'react'
import { StackNavigator } from 'react-navigation'
import AppNavigator from './root-navigation'
import OnboardPager from './onboard'

class RootView extends React.Component {

  render() {
    return (
      <OnboardPager />
    )
  }
}

export default RootView