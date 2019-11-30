// import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import color from '../../constants/Colors';
// import TabBarIconI, { TabBarIconE, TabBarIconM } from '../../components/TabBarIcon';

class SideMenu extends PureComponent {
  navigateToScreen = (route) => () => {
    // const navigateAction = NavigationActions.navigate({
    //   routeName: route
    // });
    this.props.navigation.navigate(route);
  }

  componentDidMount = () => {
    // console.log(this.props.navigation.isFocused());
  }

  componentDidAppear = () => {
    // console.log('appeard');
  }

  Route = ({to, label}) => {
    return (
      <TouchableOpacity onPress={() => typeof to === 'function' ? to() : this.navigateToScreen(to)}
        style={styles.navSection}>
        <Text style={styles.navItem} >{label}</Text>
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <this.Route to="Home" label="Home" />
          <this.Route to="Attendance" label="Attendance" />
          <this.Route to="Profile" label="Profile" />
          <this.Route to={() => alert('will logout')} label="Logout" />
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>copyright c 2019 Event 50</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItem: {
    padding: 10
  },
  navSection: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  footerContainer: {
    padding: 20,
    backgroundColor: color.primary
  },
  footerText: {
    fontSize: 10,
    textAlign: 'center'
  }
});

// SideMenu.propTypes = {
//   navigation: PropTypes.object
// };

export default SideMenu;
