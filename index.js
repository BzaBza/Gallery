import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import {name as appName} from './app.json';
import reducer from './src/redux-stuff/reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const appContainer = () =>{
  return(
   <Provider store={store}>
     <App/>
   </Provider>
  )
};

AppRegistry.registerComponent(appName, () => appContainer);
