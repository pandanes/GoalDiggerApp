import React from 'react'
import { StackNavigator } from 'react-navigation'
import AppNavigator from './root-navigation'

class RootView extends React.Component {

  render() {
    return (
      <AppNavigator />
    )
  }
}

export default RootView