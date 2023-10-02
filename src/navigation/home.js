import {createStackNavigator} from 'react-navigation-stack'


import HomePage from '../screens/Home/HomePage';

import bottomTabNavigator from './tabnavigator';
export default createStackNavigator({
  tab: {
    screen: bottomTabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
    },
  },
});
