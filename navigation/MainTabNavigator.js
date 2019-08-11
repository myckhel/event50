import React from 'react';
import { Platform, TouchableOpacity, Text, Dimensions, Icon } from 'react-native';
import {
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

// import { TopBar } from '../components/TopBar';
import color from '../constants/Colors';
import Home from '../screens/Stacks/Home'

import MainMenu from '../components/app/MainMenu'

const MainStack = createStackNavigator({
  // Music: MusicTab,
  Home: Home,
}, {
  defaultNavigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: color.primary,
    },
    // header: <TopBar navigation={navigation} />,
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text>Menu</Text>
        {/*<TabBarIconE name="dots-three-vertical" style={[menu]} />*/}
      </TouchableOpacity>
    ),
    // headerStyle: { paddingRight: 10, paddingLeft: 15 },
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
