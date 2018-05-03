import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootView from './src/screens'
//import Home from './src/screens/home';
//import store from './src/redux'

 /* export default class App extends Component {
  render() {
    return (
      <RootView />
    );
  }
}  */

   const App = () => (
  //<Register />
  //<RootView />
  //<Provider store={store}>
    <RootView />
  //</Provider>
)  

export default App 

/* export default class App extends Component {
  render() {
    return (
      <Home />
    );
  }
} */