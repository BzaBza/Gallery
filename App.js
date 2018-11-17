import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import GalleryList from "./src/components/galerry-list";
import CurrentImage from "./src/components/current-image";

const App = createStackNavigator({
  Home: {screen: GalleryList},
  Image: {screen: CurrentImage},
});

export default App;