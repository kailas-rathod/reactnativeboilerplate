import {createStackNavigator} from 'react-navigation-stack';
import AuthChangePassword from '../screens/auth/AuthChangePassword';
import ForgotPassword from '../screens/auth/ForgotPassword';

import Login from '../screens/auth/Login';
import Registration from '../screens/auth/Registration';

export default createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
});
