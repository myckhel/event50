import React from 'react';
import { Platform, TouchableOpacity, Text, Dimensions, Icon } from 'react-native';
import {
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import color from '../constants/Colors';
import Home from '../screens/Stacks/Home'
import Profile from '../screens/Stacks/Profile'

import MainMenu from '../components/app/MainMenu'

const MainStack = createStackNavigator({
  Home: Home,
  Profile
}, {
  defaultNavigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: color.primary,
    },
    headerLeft: () => (
      <TouchableOpacity style={{padding: 5}} onPress={() => navigation.toggleDrawer()}>
        <Text>Menu</Text>
      </TouchableOpacity>
    ),
    headerTintColor: '#000',
  }),
})

const drawernav = createDrawerNavigator({
  MainMenu: {
    screen: MainStack,
  },
}, {
  contentComponent: MainMenu,
  drawerWidth: Dimensions.get('window').width - 120,
});

export default createAppContainer(drawernav);
